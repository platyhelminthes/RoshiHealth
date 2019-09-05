// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema


const Products = new Schema({
    Name: {
        type: String,
        require: true
},
    Type: {
        type: String,
        require: true
},
    Price : {
        type: Number,
        require: true
},
    Stock: {
        type: String,
        default: "0"
}});




module.exports = mongoose.model("products", Products);