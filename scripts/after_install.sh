#!/bin/bash

#add configuration files from tmpappconfig which are config.json and .env file
sudo cp -a /home/ubuntu/event-app-backend/tmpappconfig/. /home/ubuntu/event-app-backend/

#delete tmp folder
sudo rm -rf /home/ubuntu/event-app-backend/tmpappconfig