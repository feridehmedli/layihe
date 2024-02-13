const mongoose = require("mongoose")

const Human = mongoose.model("Human",new mongoose.Schema({
    name:String,
    surname:String,
    password:String,
    email:{
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        require :true,
    }
},{timestamps : true}))

module.exports = {Human}