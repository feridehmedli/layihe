const {AccesoriesController} = require("../controller/Accesories.controller")
const express = require("express")
const accesoriesRouter = express.Router()

accesoriesRouter.get("/",AccesoriesController.getAll)
accesoriesRouter.get("/:id",AccesoriesController.getById)
accesoriesRouter.post("/",AccesoriesController.add)
accesoriesRouter.delete("/:id",AccesoriesController.delete)

module.exports = accesoriesRouter