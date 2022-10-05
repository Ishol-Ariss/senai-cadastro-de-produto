const Sequelize = require("sequelize")
const database = require("./db.js")

const Products = database.define("Products",
{
    idProducts:
    {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    productName:
    {
        type: Sequelize.STRING(150),
        allowNull: false
    },
    stock:
    {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    amount:
    {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    createdAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    }, 
    updatedAt:
    {
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Products