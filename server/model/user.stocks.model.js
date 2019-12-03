const mongoose = require('mongoose')
const userStocksSchema = new mongoose.Schema({
    userName:{type:String,require:true},
    title: { type: String ,required: true},
    price: {type: Number ,required:true},
   
  },{timestamps: true});
     
let userStocks = mongoose.model("userstocks", userStocksSchema);
module.exports = userStocks