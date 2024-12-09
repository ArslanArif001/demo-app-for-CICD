#!/bin/bash

cd /var/www/demo-app

# Stop and delete the existing app if it's running
echo "Stopping and deleting existing app..."
pm2 stop demo-app || true  # Ignore errors if the app is not running
pm2 delete demo-app || true  # Ignore errors if the app is not running

# Start the new app
echo "Starting the app..."
pm2 start index.js --name "demo-app"
pm2 save  # Save the PM2 process list to restart on system reboot