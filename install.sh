#!/bin/bash
rm /tmp/latest.tar.gz

if test -f /var/dashboard/branch; then
  BRANCH=`cat /var/dashboard/branch`
else
  BRANCH='main'
fi

if test -d /var/dashboard; then
  echo 'Dashboard already installed, running an update...'
  wget https://raw.githubusercontent.com/Panther-X/PantherDashboard/${BRANCH}/update.sh -O - | sudo bash
else
  if id -nG admin | grep -qw "sudo"; then
    if test -f /var/dashboard/commit-hash; then
      VER=`cat /var/dashboard/commit-hash`
      wget https://codeload.github.com/Panther-X/PantherDashboard/tar.gz/${VER} -O /tmp/latest.tar.gz
    else
      wget https://raw.githubusercontent.com/Panther-X/PantherDashboard/${BRANCH}/version -O /tmp/dashboard_latest_ver
      VER=`cat /tmp/dashboard_latest_ver`
      wget https://codeload.github.com/Panther-X/PantherDashboard/tar.gz/refs/tags/${VER} -O /tmp/latest.tar.gz
    fi
    cd /tmp
    if test -f latest.tar.gz; then
      rm -rf /tmp/PantherDashboard-*
    
      tar -xzf latest.tar.gz
      cd PantherDashboard-${VER}
      apt-get update
      apt-get --assume-yes install nginx php-fpm php7.3-fpm ngrep gawk php-cli logrotate netcat

      # Remove it first if the /var/dashboard is invalid
      if test -e /var/dashboard; then
        rm -f /var/dashboard
      fi
      mkdir -p /var/dashboard
      mkdir -p /var/dashboard/logs
      mkdir -p /etc/monitor-scripts
      mkdir -p /var/log/packet-forwarder/

      cp -r dashboard/* /var/dashboard/
      cp version /var/dashboard/
      cp monitor-scripts/* /etc/monitor-scripts/
      cp -r logrotate.d/* /etc/logrotate.d/
       
      cp nginx/snippets/* /etc/nginx/snippets/
      cp nginx/default /etc/nginx/sites-enabled
    
      if ! test -f /var/dashboard/.htpasswd; then
        cp nginx/.htpasswd /var/dashboard/.htpasswd
      fi
    
      openssl dhparam -out /etc/ssl/certs/dhparam.pem 2048
      openssl req -new -newkey rsa:2048 -days 365 -nodes -x509 -subj "/C=CN/ST=Panther/L=Panther/O=Panther/CN=localhost" -keyout /etc/ssl/private/nginx-selfsigned.key -out /etc/ssl/certs/nginx-selfsigned.crt
    
      cp systemd/* /etc/systemd/system/

      chmod 755 /etc/monitor-scripts/*
      chown root:www-data /var/dashboard/services/*
      chown root:www-data /var/dashboard/statuses/*
      chmod 775 /var/dashboard/services/*
      chmod 775 /var/dashboard/statuses/*
      chown root:root /etc/ssl/private/nginx-selfsigned.key
      chmod 600 /etc/ssl/private/nginx-selfsigned.key
      chown root:root /etc/ssl/certs/nginx-selfsigned.crt
      chmod 777 /etc/ssl/certs/nginx-selfsigned.crt
      chown root:www-data /var/dashboard/.htpasswd
      chmod 775 /var/dashboard/.htpasswd
      chown root:www-data /var/dashboard
      chmod 775 /var/dashboard
      chmod 775 /var/dashboard/logs

      bash /etc/monitor-scripts/pantherx-ver-check.sh
      FILES="systemd/*.timer"
      for f in $FILES;
      do
         name=$(echo $f | sed 's/.timer//' | sed 's/systemd\///')
         systemctl start $name.timer
         systemctl enable $name.timer
         systemctl start $name.service
      done

      systemctl daemon-reload
      systemctl enable packet-forwarder-sniffer.service
      systemctl start packet-forwarder-sniffer.service

      systemctl enable nginx
      systemctl restart nginx
      bash /etc/monitor-scripts/pubkeys.sh

      echo 'Success.'
    else
      echo 'No installation archive found.  No changes made.'
    fi
  else
    echo 'Error checking if admin user exists.  No changes made.';
  fi
fi
