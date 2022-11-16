const mongoose = require('mongoose');
const {Schema} = mongoose;

const StudentsSchema = new Schema({
    doctype:Number,
    document:Number,
    name:String,
    first_lastname:String,
    second_lastname:String,
    program:String,
    average:Number,
    age: Number,
    semester: Number,
    phone: Number,
    email:String,
    hv:String,
    Status:Boolean
})
//Convert Model
module.exports= mongoose.model('students',StudentsSchema)      