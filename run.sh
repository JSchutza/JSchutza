#!/bin/bash

docker build -t jschutza-backend .
docker run -p 5000:5000 jschutza-backend
