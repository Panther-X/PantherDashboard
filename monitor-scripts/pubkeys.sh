#!/bin/bash

ecc_addr=`i2cdetect -y 1 | grep 60 | awk '{ print $2 }'`
for i in {1..3}; do
    if [ "$ecc_addr" != "60" ]; then
        ecc_addr=`i2cdetect -y 1 | grep 60 | awk '{ print $2 }'`
        sleep 1
    fi
done
[ "$ecc_addr" != "60" ] && systemctl suspend
sleep 1

pubkey=`cat /var/dashboard/statuses/pubkey`
[ "$pubkey" != "" ] && exit

data=$(sudo docker exec helium-miner helium_gateway key info)

if [[ $data =~ name([^\"]*) ]]; then
  match=`echo $data | jq '.name' | sed 's/"//g'`
fi

echo "${match//-/ }" > /var/dashboard/statuses/animal_name

if [[ $data =~ key([^\"]*) ]]; then
  match=`echo $data | jq '.key' | sed 's/"//g'`
fi

echo $match > /var/dashboard/statuses/pubkey
