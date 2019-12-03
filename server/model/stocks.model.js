const mongoose = require('mongoose')
const stocksSchema = new mongoose.Schema({
    title: { type: String ,required: true},
    price: {type: Number ,required:true},
     },{timestamps: true});
     
let stocks = mongoose.model("stocks", stocksSchema);
module.exports = stocks