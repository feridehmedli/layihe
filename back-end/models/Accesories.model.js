const mongoose = require("mongoose")

const Accesories = mongoose.model("Accesories",new mongoose.Schema({
    image :String,
    name:String,
    desc:String,
    price:String,
    adBy:String
}))

module.exports = {Accesories}