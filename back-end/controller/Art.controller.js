const { Art } = require('../models/Art.model')

const ArtController = {
    getAll: async (req, res) => {
        try {
            const menu = await Art.find()
            res.status(200).send(menu)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await Art.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    add: async (req, res) => {
        try {
            const { image,name, desc, price ,adBy } = req.body
            const newMenu = new Art({ image,name, desc, price ,adBy })
            await newMenu.save()
            res.status(200).send("Art created")
        } catch (error) {
            res.status(404).send("Can not post")
        }
    },
    edit: async (req, res) => {
        try {
            const { id } = req.params;
            const { image, name, desc, price, adBy } = req.body;
            if (!image || !name || !desc || !price || !adBy) {
                return res.status(400).send("All fields are required");
            }

            const updatedArt = await Art.findByIdAndUpdate(id, { image, name, desc, price, adBy }, { new: true });

            if (!updatedArt) {
                return res.status(404).send("Art not found");
            }

            res.status(200).send("Art updated");
        } catch (error) {
            console.error("Error updating art:", error);
            res.status(500).send("Internal Server Error");
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await Art.findByIdAndDelete(id)
            res.status(200).send("Item deleted")
        } catch (error) {
            res.status(404).send("Can not delete")
        }
    },
}

module.exports = { ArtController }