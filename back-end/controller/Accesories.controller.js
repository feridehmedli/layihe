const { Accesories } = require('../models/Accesories.model')

const AccesoriesController = {
    getAll: async (req, res) => {
        try {
            const menu = await Accesories.find()
            res.status(200).send(menu)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Accesories.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    add: async (req, res) => {
        try {
            const { image,name, desc, price ,adBy } = req.body
            const newMenu = new Accesories({ image,name, desc, price ,adBy })
            await newMenu.save()
            res.status(200).send("Accesories created")
        } catch (error) {
            res.status(404).send("Can not post")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { image, name, desc, price, adBy } = req.body;
            await Accesories.findByIdAndUpdate(id, { image, name, desc, price, adBy });
            res.status(200).send("Item updated");
        } catch (error) {
            res.status(500).send("An error occurred while editing item");
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Accesories.findByIdAndDelete(id)
            res.status(200).send("Item deleted")
        } catch (error) {
            res.status(404).send("Can not delete")
        }
    },
}

module.exports = { AccesoriesController }