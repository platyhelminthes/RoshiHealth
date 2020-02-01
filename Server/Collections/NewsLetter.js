// /backend/data.js
const mongoose = require("mongoose");
Schema = mongoose.Schema


const NewsLetter = new Schema({
    name: {
        type: String,
        require: true
},
    email: {
        type: String
}
});




module.exports = mongoose.model("newsLetter", NewsLetter);