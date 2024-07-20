const Sequelize = require("sequelize");

const sequelize = require("../util/database.js");

const Tasks = sequelize.define("tasks", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dueDate: {
        type: Sequelize.DATEONLY,    //returns only the date in (YYYY-MM-DD) format

    }
});

module.exports = Tasks;