
# Use an official Python runtime as the base image
FROM python:3.8-slim

EXPOSE 5000

# Set environment variables
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV DATABASE_URL=postgresql://postgres:password@localhost:5432/postgres
ENV ADMIN_EMAIL=fakeemail@gmail.com
ENV ADMIN_PASSWORD=password
ENV SECRET_KEY=isasecret

# Setup Flask environment
ENV FLASK_ENV=production
ENV SQLALCHEMY_ECHO=True

# Set the working directory
WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    gcc \
    libpq-dev \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PostgreSQL
RUN apt-get update && apt-get install -y postgresql postgresql-contrib && rm -rf /var/lib/apt/lists/*



# Install Python dependencies
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

RUN pip install psycopg2

# Copy the current directory contents into the container at /app
COPY . .

# Copy the startup script into the container
COPY startup.sh /app/startup.sh
COPY configuredb.sh /app/configuredb.sh

# Ensure the script is executable
RUN chmod +x /app/startup.sh
RUN chmod +x /app/configuredb.sh

# Use the startup script as the default command
CMD ["/app/startup.sh"]

