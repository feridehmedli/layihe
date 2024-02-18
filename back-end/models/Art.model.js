const mongoose = require("mongoose")

const Art = mongoose.model("Art",new mongoose.Schema({
    image :String,
    name:String,
    desc:String,
    price:String,
    adBy:String
}))

module.exports = {Art}