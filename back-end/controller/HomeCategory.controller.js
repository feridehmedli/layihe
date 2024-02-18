const { Home } = require('../models/Home.model')

const HomeController = {
    getAll: async (req, res) => {
        try {
            const menu = await Home.find()
            res.status(200).send(menu)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Home.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    add: async (req, res) => {
        try {
            const { image,name, desc, price ,adBy } = req.body
            const newMenu = new Home({ image,name, desc, price ,adBy })
            await newMenu.save()
            res.status(200).send("Home created")
        } catch (error) {
            res.status(404).send("Can not post")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Home.findByIdAndDelete(id)
            res.status(200).send("Item deleted")
        } catch (error) {
            res.status(404).send("Can not delete")
        }
    },
}

module.exports = { HomeController }