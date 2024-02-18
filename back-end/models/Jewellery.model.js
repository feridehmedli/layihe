const mongoose = require("mongoose")

const Jewellery = mongoose.model("Jewellery",new mongoose.Schema({
    image :String,
    name:String,
    desc:String,
    price:String,
    adBy:String
}))

module.exports = {Jewellery}