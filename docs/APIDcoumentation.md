API Documentation - (POSTMAN)

1. Authentication

    This API uses JWT (  Web Tokens) for authentication. Include the JWT token in the Authorization header of the requests:
    headers: {"Authorization": <token>};

2. Endpoints - User Management

Sign up - 

URL: {base_url}/user/signup
Method: POST
Request Body: {
  "name": "Subhankar Sharma",
  "email": "sharma@example.com",
  "password": "securepassword"
}
Success Response:
Code: 200 OK
Content: {
  "message": "Signed up successfully",
  "success": true
}


Login - 

URL: {base_url}/user/login
Method: POST
Request Body: {
  "email": "sharma@example.com",
  "password": "securepassword"
}
Success Response:
Code: 200 OK
Content: {
  "message": "Logged in successfully",
  "success": true,
  "token": "<JWT_TOKEN>"
}



3. Endpoints - Task management


Add a new task - 

URL:{base_url}/tasks
Method: POST
Authentication: Required
Request Body: {
  "title": "Complete project",
  "description": "Finish the RESTful API project",
  "status": "pending",
  "dueDate": "2024-08-01"
}
Success Response:
Code: 201
Content: {
  "newTask": {
    "id": "1234567890",
    "title": "Complete project",
    "description": "Finish the RESTful API project",
    "status": "pending",
    "dueDate": "2024-08-01",
    "userId": "user_id"
  },
  "message": "Task added successfully",
  "success": true
}


Get All tasks - 

URL: {base_url}/tasks/getAllTasks
Method: GET
Authentication: Required
Query Parameters:
page (optional): Page number for pagination
limit (optional): Number of items per page
title (optional): Filter tasks by title
status (optional): Filter tasks by status
dueDate (optional): Filter tasks by due date
Success Response:
Code: 200 OK
Content: {
  "totalItems": 100,
  "totalPages": 10,
  "currentPage": 1,
  "tasks": [
    {
      "id": "1234567890",
      "title": "Complete project",
      "description": "Finish the RESTful API project",
      "status": "pending",
      "dueDate": "2024-08-01",
      "userId": "user_id"
    },
    // ... more tasks
  ],
  "message": "Tasks fetched successfully",
  "success": true
}


Get a specific task - 

URL: {base_url}/tasks/getTask/:id
Method: GET
Authentication: Required
Success Response:
Code: 200 OK
Content: {
  "task": {
    "id": "1234567890",
    "title": "Complete project",
    "description": "Finish the RESTful API project",
    "status": "pending",
    "dueDate": "2024-08-01",
    "userId": "user_id"
  },
  "message": "Task fetched successfully",
  "success": true
}


Update a task - 

URL: {base_url}/tasks/updateTask/:id
Method: PUT
Authentication: Required
Request Body: {
  "title": "Updated project",
  "description": "Updated description",
  "status": "inProgress",
  "dueDate": "2024-09-01"
}
Success Response:
Code: 200 OK
Content: {
  "task": {
    "id": "1234567890",
    "title": "Updated project",
    "description": "Updated description",
    "status": "inProgress",
    "dueDate": "2024-09-01",
    "userId": "user_id"
  },
  "message": "Task updated successfully",
  "success": true
}


Delete a task - 

URL: {base_url}/tasks/deleteTask/:id
Method: DELETE
Authentication: Required
Success Response:
Code: 200 OK
Content: {
  "message": "Task deleted successfully",
  "success": true
}




4. Error Responses - 


Sign Up (POST /signup) :

400 Bad Request
When: User already exists
Response:
  {
  "message": "User already exists.",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs during sign up
Response:
  {
  "message": "Something went wrong",
  "success": false
}




Login (POST /login)

400 Bad Request
When: User does not exist
Response:
  {
  "message": "User does not exist.",
  "success": false
}

400 Bad Request
When: Incorrect password
Response:
  {
  "message": "Wrong Password",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs during login
Response:
  {
  "message": "Something went wrong",
  "success": false
}



Create Task (POST /tasks)

400 Bad Request
When: Invalid status provided
Response:
  {
  "message": "Invalid status, Status must be 'pending', 'inProgress' or 'completed'",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs while creating task
Response:
  {
  "Error": "Something went wrong",
  "success": false
}



Get All Tasks (GET /tasks)

400 Bad Request
When: No tasks found
Response:
  {
  "Message": "No data found",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs while fetching tasks
Response:
  {
  "Error": "Something went wrong",
  "success": false
}



Get Specific Task (GET /tasks/:id)

404 Not Found
When: Task not found
Response:
  {
  "message": "Task not found",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs while fetching the task
Response:
  {
  "Error": "Something went wrong",
  "success": false
}




Update Task (PUT /tasks/:id)

404 Not Found
When: Task not found
Response:
  {
  "message": "Task not found",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs while updating the task
Response:
  {
  "Error": "Something went wrong",
  "success": false
}




Delete Task (DELETE /tasks/:id)

404 Not Found
When: Task not found
Response:
  {
  "message": "Task not found",
  "success": false
}

500 Internal Server Error
When: Unexpected error occurs while deleting the task
Response:
  {
  "Error": "Something went wrong"
}



Note: The status field must be one of: "pending", "inProgress", or "completed"
      The dueDate should be in the format "YYYY-MM-DD"
      Use JWT Authentication token received in login response for all the task management API calls.






