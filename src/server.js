const express = require("express")
const usersController = require("./controllers/usersController")
const detailsController = require("./controllers/detailsController")
const cors = require('cors')
//const routers = require('./routes')

const server = express()

server.use(cors())
server.use(express.json())

server.get("/" , (req,res)=> res.json({'message':'Bem Vindo'}))
            
server.post("/users" , usersController.search)
server.post("/details" , detailsController.getDetails)



server.listen(3333, () =>{console.log("server em execução.")})
