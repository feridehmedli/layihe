const { Jewellery } = require('../models/Jewellery.model')

const JewelleryController = {
    getAll: async (req, res) => {
        try {
            const menu = await Jewellery.find()
            res.status(200).send(menu)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Jewellery.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    add: async (req, res) => {
        try {
            const { image,name, desc, price ,adBy } = req.body
            const newMenu = new Jewellery({ image,name, desc, price ,adBy })
            await newMenu.save()
            res.status(200).send("Jewellery created")
        } catch (error) {
            res.status(404).send("Can not post")
        }
    },
    edit: async (req, res) => {

        try {
            const { id } = req.params
            const { image,name, desc, price ,adBy } = req.body
            await Jewellery.findByIdAndUpdate(id, { image,name, desc, price ,adBy })
            res.status(200).send("item updated")
        } catch (error) {
            res.status(500).send("an error occured while editing item")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Jewellery.findByIdAndDelete(id)
            res.status(200).send("Item deleted")
        } catch (error) {
            res.status(404).send("Can not delete")
        }
    },
}

module.exports = { JewelleryController }