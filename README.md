# User API Service

This project is built using the NestJS framework and provides a simple user API service.

## Run in Local Environment

### Step 1: Clone the Repository
Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/abinash-thakur/user-api-service.git
```

### Step 2: 
please follow the .env.example file and create .env file

### Step 3:
I am using the node version 20 build this project, so for switch the version used bellow command
#### nvm use 20

### Step 3:
run the migration file to create the tables inside the db use below command
#### npm run migration:run

### Step 4:
run the project use below command
#### npm run start:dev

### Step 5:
now you can visit the swagger docs to check the api by the below given route
#### http://localhost:8082/api/docs

### Step 6:
this is my base route
#### http://localhost:8082/api/



## Run using docker Environment
### Step - 1:
Run the below given command
#### sudo docker-compose --env-file .env up --build

### Step - 2:
After stop the service run the below command
#### sudo docker compose down --volumes --remove-orphans