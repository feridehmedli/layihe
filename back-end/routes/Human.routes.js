const {HumanController} = require('../controller/Human.controller')
const express = require("express")
const router = express.Router()

router.get("/",HumanController.getAll)
router.post("/login",HumanController.login)
router.post("/register",HumanController.register)
router.delete("/:id",HumanController.delete)

module.exports = router