const {JewelleryController} = require("../controller/Jewellery.controller")
const express = require("express")
const jewelleryRouter = express.Router()

jewelleryRouter.get("/",JewelleryController.getAll)
jewelleryRouter.get("/:id",JewelleryController.getById)
jewelleryRouter.post("/",JewelleryController.add)
jewelleryRouter.delete("/:id",JewelleryController.delete)
jewelleryRouter.put("/:id",JewelleryController.edit)

module.exports = jewelleryRouter