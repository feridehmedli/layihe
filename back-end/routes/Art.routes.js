const {ArtController} = require("../controller/Art.controller")
const express = require("express")
const artRouter = express.Router()

artRouter.get("/",ArtController.getAll)
artRouter.get("/:id",ArtController.getById)
artRouter.post("/",ArtController.add)
artRouter.delete("/:id",ArtController.delete)

module.exports = artRouter