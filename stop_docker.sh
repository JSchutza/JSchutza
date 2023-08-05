#!/bin/bash

# Check if there are any running Docker containers
if [ "$(docker ps -q 2> /dev/null)" != "" ]; then
    echo "Stopping running Docker containers..."
    docker stop $(docker ps -q)
else
    # Check if there are any stopped Docker containers
    if [ "$(docker ps -aq 2> /dev/null)" != "" ]; then
        echo "No Docker containers are running. Removing stopped containers..."
        docker rm $(docker ps -aq 2> /dev/null)
    else
        echo "No Docker containers found. Exiting..."
        exit 0
    fi
fi
