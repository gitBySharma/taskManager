const { json } = require("body-parser");
const express = require("express");
const path = require("path");
const cors = require("cors");
const router = require("router");
const helmet = require("helmet");

require("dotenv").config();

const Users = require("./models/users.js");
const Tasks = require("./models/tasks.js");

const sequelize = require("./util/database.js");
const userRoutes = require("./routes/user.js");
const taskRoutes = require("./routes/tasks.js");


const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));


app.use(userRoutes);
app.use(taskRoutes);


Users.hasMany(Tasks);
Tasks.belongsTo(Users);


sequelize.sync()
    .then((result) => {
        app.listen(process.env.PORT);
        console.log(`Server is live on port ${process.env.PORT}`);
    }).catch((err) => {
        console.log("Unable to start server ", err);
    });
