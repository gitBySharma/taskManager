require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/users.js");


exports.authenticate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');

        const decodedUser = jwt.verify(token, process.env.JWT_SECRET);
        if (decodedUser) {
            const user = await User.findByPk(decodedUser.userId);
            if (user) {
                req.user = user;
                next();

            } else {
                res.status(401).send({ error: "Invalid Token, Authentication failed" });
            }

        } else {
            res.status(401).json({ error: "Invalid Token, Authentication failed" });
        }

    } catch (error) {
        console.log("Authentication error - ", error);
    }
};