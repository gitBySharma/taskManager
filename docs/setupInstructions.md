Setup Instructions for Task Management API


1. Prerequisites

Node.js (v21.6.2)
npm (10.2.4)
MySQL (8.0.36)

Installation - 
Clone the repository:
git clone <your-repository-url>
cd <your-project-directory>

Install dependencies:
npm install

Set up environment variables:
Create a .env file in the root directory and add the following:
PORT=3000
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
JWT_SECRET=your_jwt_secret_here

Set up the database:

Create a new MySQL database with the name specified in your .env file.
The application will automatically create the necessary tables when it starts.



Running the Application

Start the server:
npm start


API Documentation
Refer to the API documentation provided in the repository for details on available endpoints and how to use them.