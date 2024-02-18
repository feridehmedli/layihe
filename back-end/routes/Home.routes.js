const {HomeController} = require("../controller/HomeCategory.controller.js")
const express = require("express")
const homeRouter = express.Router()

homeRouter.get("/",HomeController.getAll)
homeRouter.get("/:id",HomeController.getById)
homeRouter.post("/",HomeController.add)
homeRouter.delete("/:id",HomeController.delete)

module.exports = homeRouter