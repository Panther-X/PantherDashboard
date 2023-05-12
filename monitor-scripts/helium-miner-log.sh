#!/bin/bash
docker logs --since "`date -d "-2 day" +%Y-%m-%d`" helium-miner > /var/dashboard/logs/helium-miner.log
