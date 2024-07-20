const express = require("express");
const router = express.Router();

const userAuthentication = require("../middleware/auth.js");
const userController = require("../controllers/users.js");


router.post('/user/signup', userController.signup);

router.post('/user/login', userController.login);

module.exports = router;