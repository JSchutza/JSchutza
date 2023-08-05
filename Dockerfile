
# Use an official Python runtime as the base image
FROM python:3.8-slim

EXPOSE 5000:5000
# Set environment variables
ENV FLASK_APP app.py
ENV FLASK_RUN_HOST 0.0.0.0
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

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



# Install Python dependencies
COPY requirements.txt requirements.txt
RUN pip install --upgrade pip && \
    pip install -r requirements.txt

RUN pip install psycopg2

# Copy the current directory contents into the container at /app
COPY . .

# Run the command to start uWSGI
CMD ["flask", "run"]

