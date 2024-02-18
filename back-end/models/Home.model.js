const mongoose = require("mongoose")

const Home = mongoose.model("Home",new mongoose.Schema({
    image :String,
    name:String,
    desc:String,
    price:String,
    adBy:String
}))

module.exports = {Home}