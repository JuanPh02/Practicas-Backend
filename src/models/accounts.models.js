const mongoose = require('mongoose');
const {Schema} = mongoose;

const AccountsSchema = new Schema({
    document:Number,
    password:String,
    rol:String
})
//Convert Model
module.exports= mongoose.model('accounts',AccountsSchema)  