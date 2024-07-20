const express = require("express");
const router = express.Router();

const userAuthentication = require("../middleware/auth.js");
const taskController = require("../controllers/tasks.js");
const { route } = require("./user.js");


router.post('/tasks/addTask', userAuthentication.authenticate, taskController.postAddTask);

router.get('/tasks/getAllTasks', userAuthentication.authenticate, taskController.getAllTasks);

router.get('/tasks/getTask/:id', userAuthentication.authenticate, taskController.getSpecificTask);

router.put('/tasks/updateTask/:id', userAuthentication.authenticate, taskController.updateTask);

router.delete('/tasks/deleteTask/:id', userAuthentication.authenticate, taskController.deleteTask);



module.exports = router;