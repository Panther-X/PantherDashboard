#!/bin/bash
name="server-detection"
service=$(cat /var/dashboard/services/$name | tr -d '\n')


function check_dashboard_server_status()
{
  local timeout=5
  local target=$1
  local ret_code_1=`curl -I -s --connect-timeout ${timeout} ${target} -w %{http_code} | tail -n1`
  local ret_code_2=`curl -I -s --connect-timeout ${timeout} ${target} -w %{http_code} | tail -n1`
  local ret_code_3=`curl -I -s --connect-timeout ${timeout} ${target} -w %{http_code} | tail -n1`
  if [ "x$ret_code_1" = "x200" ] || [ "x$ret_code_2" = "x200" ] || [ "x$ret_code_3" = "x200" ]; then
    echo "$2 :can be connected." >> /var/dashboard/logs/$name.log
    return 0
  else
    echo "$2 :can't be connected, please check your local network setting." >> /var/dashboard/logs/$name.log
    return 1
  fi
  return 0
}

function check_validator_server_status()
{
  local ret_code=`curl -I -s --connect-timeout 5 https://api.helium.io/v1/validators/elected -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36' -w %{http_code} | tail -n1`
  if [[ "x$ret_code" = "x200" ]]; then
    for grpc_addr in `curl -s https://api.helium.io/v1/validators/elected -H 'user-agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.75 Safari/537.36' | jq .data[].status.grpc_addr`;do
      ip=$(echo ${grpc_addr} | sed 's/http:\/\///' | sed 's/"//' | sed 's/:/ /' | awk '{print $1}' );
      port=$(echo ${grpc_addr} | sed 's/"//' | sed 's/"//' | sed 's/http:\/\///' | sed 's/:/ /' | awk '{print $2}' );
      nc -z -w 2 $ip $port
      if [[ $? == 0 ]]; then
        echo "Validator :can be connected." >> /var/dashboard/logs/$name.log
        return 0
      fi
    done
  fi
  echo "Validator :can't be connected, please check your local network setting." >> /var/dashboard/logs/$name.log
  return 1
}

# Fix invalid status when boot finish
if [[ $service == 'running' ]]; then
  if [[ ! -f /tmp/dashboard-$name-flag ]]; then
    echo 'stopped' > /var/dashboard/services/$name
  fi
fi

if [[ $service == 'start' ]]; then
  touch /tmp/dashboard-$name-flag
  echo 'running' > /var/dashboard/services/$name
  echo 'Running Network Detection' > /var/dashboard/logs/$name.log
  check_dashboard_server_status https://raw.githubusercontent.com/Panther-X/PantherDashboard/main/install.sh Dashboard-Server
  check_validator_server_status
  echo 'stopped' > /var/dashboard/services/$name
  echo 'Network Detection complete.' >> /var/dashboard/logs/$name.log
fi
