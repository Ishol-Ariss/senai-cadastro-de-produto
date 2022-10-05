const express = require("express")
const database = require("./db.js")
const products = require("./products.js")
const { Op } = require("sequelize");
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors({
    origin: "*",
}))

//rota para cadastrar um produto
app.post("/product", async (request, response) => {
    try{
        const { productName, stock, amount } = request.body
        await database.sync()
        await products.create(
            {
                productName,
                stock,
                amount,
                createdAt: new Date("2022-05-04 16:37:25"), 
                updatedAt: new Date() 
            }
        )
        return response.status(201).send()
    }
    catch(error){
        console.log(error)
    }
})

//rota get para dar select em todos os produtos
app.get("/product", async (request, response) => {
    try{
        await database.sync()
        const product = await products.findAll()
        return response.status(201).json(product)
    }
    catch(error){
        console.log(error)
    }
})

//rota get para dar select em um produto com id especifico
app.get("/product/id", async (request, response) => {
    try{
        const { id } = request.query
        await database.sync()
        const product = await products.findAll({
            where: {
                idProducts: id
            }
        })
        return response.status(201).json(product)
    }
    catch(error){
        console.log(error)
    }
})

//rota get para dar select em todos os produtos que contem um nome digitado usando like
app.get("/product/name", async (request, response) => {
    try{
        const { name } = request.body
        await database.sync()
        const product = await products.findAll({
            where: {
                productName: {
                    [Op.like]: `%${name}%`
                }
            }
        })
        return response.status(201).json(product)
    }
    catch(error){
        console.log(error)
    }
})

//rota para deletar todos os produtos
app.delete("/product", async (request, response) => {
    try{
        await database.sync()
        await products.destroy({
            truncate: true
        });
        return response.status(201).json({"message": "Todos os produtos foram deletados com sucesso!"})
    }
    catch(error){
        console.log(error)
    }
})

//rota para deletar produto atrves do id
app.delete("/product/id", async (request, response) => {
    try{
        const { id } = request.headers
        await database.sync()
        await products.destroy({
            where:{
                idProducts: id
            }
        });
        return response.status(201).json({message: "Produto deletado com sucesso!"})
    }
    catch(error){
        console.log(error)
    }
})

//rota para atualizar os dados do produto atraves do id
app.put("/product/id", async (request, response) => {
    try{
        const { id } = request.headers
        const { productName, stock, amount } = request.body
        await database.sync()
        await products.update({ 
                productName: productName,
                stock: stock,
                amount: amount
            }, 
            {
                where: {
                    idProducts: id
                }
            }
        );
        return response.status(201).json({message: `Produto atualizado com sucesso!`})
    }
    catch(error){
        console.log(error)
    }
})

app.listen(3333)