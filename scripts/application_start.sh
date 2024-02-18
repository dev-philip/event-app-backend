#!/bin/bash


#This command is used to change the ownership of the /home/ubuntu/event-app-backend directory and all its contents recursively
sudo chown -R $(whoami) /home/ubuntu/event-app-backend

#start the application
cd event-app-backend/

#remove node module 
#sudo rm -rf node_modules

#install app packages
#npm install

#use pm2 to start the node js application
#pm2 start npm --name eventapp -- start