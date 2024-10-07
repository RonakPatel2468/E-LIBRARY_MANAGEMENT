# E-Library Management API

This is an E-Library Management API built using Node.js, Express, and MongoDB. It provides features for user authentication, book management, and other related functionalities.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup](#setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features
- User authentication (signup, login, password reset)
- Book management (CRUD operations)
- Rate limiting for API requests
- Logging middleware for better debugging
- Helmet for security best practices

## Technologies Used
- **Node.js**: JavaScript runtime for building server-side applications
- **Express**: Web framework for Node.js
- **Mongoose**: MongoDB object modeling tool
- **MongoDB Atlas**: Cloud database service
- **Dotenv**: Module for loading environment variables
- **Helmet**: Security middleware for Express
- **Morgan**: HTTP request logger middleware for Node.js
- **CORS**: Middleware to enable Cross-Origin Resource Sharing
- **Rate Limiter**: Middleware to limit repeated requests to public APIs

## Installation

### Prerequisites
- Node.js (v14.x or higher)
- npm (Node Package Manager)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/e-library-management.git
   cd e-library-management
Install Dependencies

bash
Copy code
npm install
Set Up MongoDB Atlas

Create a MongoDB Atlas account if you don't have one.
Create a new cluster and set up a database.
Add your current IP address to the IP Whitelist under Network Access.
Create a .env File

In the root directory of your project, create a .env file and add the following environment variables:
Environment Variables
plaintext
Copy code
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority
PORT=9000
Replace <username>, <password>, and <dbname> with your actual MongoDB credentials and the name of the database you created.
Example .env File
plaintext
Copy code
MONGODB_URI=mongodb+srv://alice:password123@cluster0.mongodb.net/eLibraryDB?retryWrites=true&w=majority
PORT=9000
Setup
Connect to MongoDB

Ensure your MongoDB connection string is correctly configured in the .env file.
Verify that your database is accessible from your application.
Run the Application

bash
Copy code
npm start
The API will start on the port specified in the .env file (default is 9000).
Access the API

Open your browser or a tool like Postman to interact with the API:
plaintext
Copy code
http://localhost:9000
API Endpoints
Authentication

POST /api/auth/signup: Create a new user
POST /api/auth/login: Login an existing user
POST /api/auth/forgot-password: Send reset password link
POST /api/auth/reset-password: Reset user password
Books

GET /api/books: Retrieve all books
POST /api/books: Add a new book
GET /api/books/:id: Get a book by ID
PUT /api/books/:id: Update a book by ID
DELETE /api/books/:id: Delete a book by ID
