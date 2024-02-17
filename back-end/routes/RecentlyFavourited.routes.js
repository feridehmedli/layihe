const {FavouritedController} = require("../controller/RecentlyFavourited.controller")
const express = require("express")
const router = express.Router()

router.get("/",FavouritedController.getAll)
router.get("/:id",FavouritedController.getById)
router.post("/",FavouritedController.add)
router.delete("/:id",FavouritedController.delete)

module.exports = router