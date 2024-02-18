#!/bin/bash


# Clean up old Artifact
sudo rm -rf /home/ubuntu/event-app-backend

#Stop pm2 Process
pm2 stop all