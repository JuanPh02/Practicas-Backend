const mongoose = require('mongoose');
const {Schema} = mongoose;

const ContactsSchema = new Schema({
    doctype:Number,
    document:Number,
    gender:String,
    name:String,
    first_lastname:String,
    second_lastname:String,
    company:Number,
    area:String,
    job:String,
    phone:Number,
    email:String
})
//Convert Model
module.exports= mongoose.model('contacts',ContactsSchema) 