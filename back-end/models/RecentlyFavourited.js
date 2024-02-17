const mongoose = require("mongoose")

const RecentlyFavourited = mongoose.model("RecentlyFavourited",new mongoose.Schema({
    name:String,
    image :String,
    desc:String,
    price:String,
}))

module.exports = {RecentlyFavourited}