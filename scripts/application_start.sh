#!/bin/bash
cd /home/ubuntu/project/event-app-backend

#start the application
pm2 start npm --name eventapp -- start