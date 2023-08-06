#!/bin/bash

read -p "Do you want to run the project locally? (yes/no): " local_choice

if [ "$local_choice" == "yes" ]; then
    # to run the project locally
    docker build -t jschutza-backend .
    docker run -p 5000:5000 jschutza-backend
elif [ "$local_choice" == "no" ]; then
    read -p "Do you want to deploy to GCP? (yes/no): " gcp_choice
    if [ "$gcp_choice" == "yes" ]; then
        # make sure to re-authenticate with the correct GCP account.
        chmod +x reauth_gcloud.sh
        ./reauth_gcloud.sh
        # to build and push the project to GCP
        gcloud builds submit --tag us.gcr.io/joshua-schutza-22c95/jschutza-backend

    else
        echo "Exiting without deploying."
        exit 0
    fi
else
    echo "Invalid choice. Exiting."
    exit 1
fi
