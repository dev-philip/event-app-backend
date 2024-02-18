# EventAppBackend

Course Project for COP4710

# Github Repository

https://github.com/dev-philip/event-app-backend
https://docs.google.com/document/d/1ynONMdP0S2a1tgvAOk-ozcSMURndsDTdifKDlSrmuqE/edit

## HOW TO RUN THIS APPLICATION

1. Download NVM (Node version Manager) from this link `https://github.com/coreybutler/nvm-windows/releases/download/1.1.12/nvm-setup.exe`
2. when Installed successfully open cmd and run this command `nvm install 20.9.0` It will install node version 20.9.0 on your system
3. To confirm it was installed use the commmand `nvm ls` this will list all the version of node you have on your system and the one activated will have an (\* asterick in front if it).
4. Clone repository `https://github.com/dev-philip/event-app-backend.git`
5. Create a new file in the root directory called `.env` and copy the content in this url `https://docs.google.com/document/d/1ynONMdP0S2a1tgvAOk-ozcSMURndsDTdifKDlSrmuqE/edit?usp=sharing`
6. Navigate to the root folder and run this command `npm install` then run `npm start`. this will start the backend server for the application

# Create migrations

npx knex migrate:make create_admin_user_table

# Run migrations

npx knex migrate:latest
npx knex migrate:rollback
npx knex migrate:status

# Run seed data (if you have seed files)

npx knex seed:run

## Project repository

https://github.com/dev-philip/event-app-backend.git

## how to read codeploy log

nano /opt/codedeploy-agent/deployment-root/deployment-logs/codedeploy-agent-deployments.log

sudo /opt/codedeploy-agent/deployment-root/deployment-logs/codedeploy-agent-deployments.log
