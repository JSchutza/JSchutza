#!/bin/bash

# Call the configuredb script
./configuredb.sh

psql -h localhost -U postgres -c "ALTER USER postgres WITH PASSWORD 'password';"


# Run migrations
flask db upgrade

# Seed the database
flask seed all

# Start the Flask app
flask run
