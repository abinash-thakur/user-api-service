# User API Service

This project is built using the NestJS framework and provides a simple user API service.

## Run in Local Environment

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/abinash-thakur/user-api-service.git
```

### Step 2: setup environment variable
please follow the .env.example file and create .env file

### Step 3: setup the database
I am using the node version 20 build this project, so for switch the version
#### nvm use 20

### Step 3:
Ensure you have PostgreSQL set up and running. Then, run the migration to create the necessary tables inside the database:
#### npm run migration:run

### Step 4:
Start the development server using the following command:
#### npm run start:dev

### Step 5:
Once the server is running, you can visit the Swagger API documentation at:
#### http://localhost:8082/api/docs

### Step 6:
This is the base route for your API:
#### http://localhost:8082/api/



## Run in Docker Environment
### Step 1: Stop Local PostgreSQL and Redis Servers
Before running the Docker commands, make sure to stop any locally running PostgreSQL and Redis servers to avoid conflicts with the Docker containers.

### Step - 2:
To run the service in a Docker environment, use the following command:
#### sudo docker-compose --env-file .env up --build

### Step - 3:
To stop the service and remove volumes and orphan containers, run:
#### sudo docker compose down --volumes --remove-orphans