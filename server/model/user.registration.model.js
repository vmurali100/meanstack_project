const mongoose = require('mongoose')
const usersSchema = new mongoose.Schema({
    
    userName: { type: String ,required: true},
    mobile: { type: Number, required: true },
    password: { type: String ,required: true},
   
  },{timestamps: true});
     
let users = mongoose.model("users", usersSchema);
module.exports = users