# Nodejs 

## Getting Started

This repository is the assignment submission of Backend assignement which is to create a “Node.js” Application using Express Framework and MongoDB Database.

Since this project will hold the server application there will be node modules. First run `npm install` from the root. 

## Tech Used

### Backend

-> Node and Express. \
 -> Mongoose for mongoDB. \

## Installation

### MongoDB Atlas

To connect to mongodb atlas you will need a `.env` file which is shared via email which contains the mongo uri which is needed for the connection to database. Place the `.env` file in the root folder of the project (i.e. Nodejs task) and then follow the next steps.

### Backend

Install dependencies for the backend with npm in the root folder

```bash
  cd Backend-Task
  npm install
```

Start the development server for the backend

```bash
  npm start
```

The server will listen to `http://localhost:3000/`

## API Reference

Use postman or thunderclient (vscode extension) to check all the apis.

#### Get all student

URL : http://localhost:3000/students

```http
  GET /students
```

Gets all the data from the database mongodb atlas.

#### Create Student

URL : http://localhost:3000/students

```http
  POST /students
```

#### Get A particular student by ID


URL : http://localhost:3000/students/:id

```http
  GET /students/:id
```

#### Update a particular student

Requires student ID for that particular student 

URL : http://localhost:3000/students/:id

```http
  PUT /students/:id
```

#### Delete a particular student

Requires student ID for that particular student 

URL : http://localhost:3000/students/:id

```http
  DELETE /students/:id
```

## 🔗 Links

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/pratish-ninawe-6199b2220/)