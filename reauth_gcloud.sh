#!/bin/bash

# Log out from the current Google Cloud account
gcloud auth revoke

# Log in again
gcloud auth login

echo "Authentication process completed."

# List accounts and ask the user to choose one
ACCOUNTS=( $(gcloud auth list --format="value(account)") )
echo "Available accounts:"
for i in "${!ACCOUNTS[@]}"; do
  echo "$((i+1)). ${ACCOUNTS[$i]}"
done

read -p "Select an account by its number: " choice
CHOSEN_ACCOUNT="${ACCOUNTS[$((choice-1))]}"

# Set the chosen account as the active account
gcloud config set account "$CHOSEN_ACCOUNT"
echo "Active account set to $CHOSEN_ACCOUNT."

# List projects and ask the user to choose one
PROJECTS=( $(gcloud projects list --format="value(projectId)") )
echo "Available projects for $CHOSEN_ACCOUNT:"
for i in "${!PROJECTS[@]}"; do
  echo "$((i+1)). ${PROJECTS[$i]}"
done

read -p "Select a project by its number: " choice
CHOSEN_PROJECT="${PROJECTS[$((choice-1))]}"

# Set the chosen project as the active project
gcloud config set project "$CHOSEN_PROJECT"
echo "Active project set to $CHOSEN_PROJECT."
