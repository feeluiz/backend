const { Router } = require("express")
const usersController = require("./controllers/usersController")
const detailsController = require("./controllers/detailsController")

var routes = Router

routes.get("/" , (req,res)=> res.json({'message':'Bem Vindo'}))
            
routes.post("/users" , usersController.search)
routes.post("/details" , detailsController.getDetails)


module.exports = routes
