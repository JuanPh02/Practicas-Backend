const mongoose = require('mongoose');
const {Schema} = mongoose;

const EducationSchema = new Schema({
    document:Number,
    year:Number,
    program:String,
    type:String,
    duration:String,
    state:String
})
//Convert Model
module.exports= mongoose.model('education',EducationSchema)   