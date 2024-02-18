#!/bin/bash


#add configuration files from tmpappconfig which are config.json and .env file
sudo cp -a /home/ubuntu/event-app-backend/tmpappconfig/. /home/ubuntu/event-app-backend/

#delete tmp folder
sudo rm -rf /home/ubuntu/event-app-backend/tmpappconfig

#remove node module 
sudo rm -rf /home/ubuntu/event-app-backend/node_modules

#This command is used to change the ownership of the /home/ubuntu/event-app-backend directory and all its contents recursively
sudo chown -R $(whoami) /home/ubuntu/event-app-backend
