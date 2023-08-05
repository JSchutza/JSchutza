#!/bin/bash

# Location of the pg_hba.conf file (this location might differ based on your installation)
PG_HBA="/etc/postgresql/15/main/pg_hba.conf"

# Backup the original pg_hba.conf file
cp $PG_HBA $PG_HBA.bak

# Create a new temporary pg_hba file with the passwordless configurations at the top
TEMP_PG_HBA=$(mktemp)

# Allow passwordless local connections for the postgres user
echo "local   all             postgres                                trust" > $TEMP_PG_HBA
echo "host    all             postgres        127.0.0.1/32            trust" >> $TEMP_PG_HBA
echo "host    all             postgres        ::1/128                 trust" >> $TEMP_PG_HBA

# Append the rest of the original pg_hba.conf file to the temporary one
cat $PG_HBA >> $TEMP_PG_HBA

# Replace the original pg_hba.conf with our new one
mv $TEMP_PG_HBA $PG_HBA

# Reload PostgreSQL configuration (this might require sudo privileges)
chown postgres:postgres /etc/postgresql/15/main/pg_hba.conf
chmod 600 /etc/postgresql/15/main/pg_hba.conf

service postgresql reload
service postgresql restart

echo "Passwordless access set up for local 'postgres' user. Original pg_hba.conf backed up as $PG_HBA.bak"
