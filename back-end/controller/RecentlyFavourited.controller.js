const { RecentlyFavourited } = require('../models/RecentlyFavourited')

const FavouritedController = {
    getAll: async (req, res) => {
        try {
            const menu = await RecentlyFavourited.find()
            res.status(200).send(menu)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params
            const target = await RecentlyFavourited.findById(id)
            res.status(200).send(target)
        } catch (error) {
            res.status(404).send("Can not get")
        }
    },
    add: async (req, res) => {
        try {
            const { image,name, desc, price } = req.body
            const newMenu = new RecentlyFavourited({ image,name, desc, price })
            await newMenu.save()
            res.status(200).send("RecentlyFavourited created")
        } catch (error) {
            res.status(404).send("Can not post")
        }
    },
    edit: async (req, res) => {

        try {
            const { id } = req.params
            const { image,name, desc, price ,adBy } = req.body
            await RecentlyFavourited.findByIdAndUpdate(id, { image,name, desc, price ,adBy })
            res.status(200).send("item updated")
        } catch (error) {
            res.status(500).send("an error occured while editing item")
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            await RecentlyFavourited.findByIdAndDelete(id)
            res.status(200).send("Item deleted")
        } catch (error) {
            res.status(404).send("Can not delete")
        }
    },
}

module.exports = { FavouritedController }