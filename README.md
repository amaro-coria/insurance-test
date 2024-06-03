# Insurance Policy Management System

This project consists of a backend service built with Nest.js and a frontend application built with Next.js. The system allows users to manage insurance policies including creating, reading, updating, and deleting policies. The backend service uses PostgreSQL as the database, and both applications are containerized using Docker and orchestrated with Docker Compose.

## Prerequisites

- Docker
- Docker Compose

## Project Structure


```
├── backend
│ ├── src
│ ├── test
│ ├── Dockerfile
│ ├── package.json
│ ├── tsconfig.json
│ └── ...
├── frontend
│ ├── components
│ ├── pages
│ ├── public
│ ├── styles
│ ├── Dockerfile
│ ├── package.json
│ ├── .env.local
│ └── ...
├── docker-compose.yml
└── README.md

```
## Getting Started

### 1. Clone the Repository

``` 
git clone <repository-url>
cd <repository-directory>
```
### Build and Run the Containers
Ensure Docker and Docker Compose are installed on your machine, then run:
    
``` bash
docker-compose up --build
   ```
### Access the Applications
Frontend: Open your browser and navigate to http://localhost:3000.

Backend: The backend API can be accessed at http://localhost:3001.

### Backend Service
The backend service is built with Nest.js and uses PostgreSQL as the database. 

The service provides endpoints to manage insurance policies.

Endpoints

* GET /policies: Retrieve all policies
* GET /policies/:id: Retrieve a single policy by ID
* POST /policies: Create a new policy
* PUT /policies/:id: Update an existing policy
* DELETE /policies/:id: Delete a policy

### Frontend Application
The frontend application is built with Next.js and provides a user interface to manage insurance policies.

Pages

* /policies: List all policies
* /policies/create: Create a new policy
* /policies/[id]/edit: Edit an existing policy


Sequence diagram

[README.md](README.md)

Architecture justification

[justification.pdf](justification.pdf)