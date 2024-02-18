#!/bin/bash

#Stop pm2 Process
pm2 stop all


#add configuration files from tmpappconfig which are config.json and .env file
sudo cp -a /home/ubuntu/event-app-backend/tmpappconfig/. /home/ubuntu/event-app-backend/

#delete tmp folder
sudo rm -rf /home/ubuntu/event-app-backend/tmpappconfig


#start the application
cd event-app-backend/

#use pm2 to start the node js application
pm2 start npm --name eventapp -- start