// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema


const Products = new Schema({
    Name: {
        type: String,
        require: true
},
    Description: {
        type: String
},
    DocType: {
        type: String
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
        default: "NA"
}});




module.exports = mongoose.model("products", Products);