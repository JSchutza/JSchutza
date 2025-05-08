#!/bin/bash

# Build the Docker image
docker build -t jschutza-app .

# Run the Docker container, mapping port 8000 from the container to 8000 on your host
docker run -p 8000:8000 jschutza-app
