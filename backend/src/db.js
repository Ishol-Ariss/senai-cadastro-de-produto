const Sequelize = require("sequelize")
const config = require("../config/database.js")
const sequelize = new Sequelize(config)

module.exports = sequelize