const mongoose = require('mongoose');
const {Schema} = mongoose;

const CompaniesSchema = new Schema({
    nit:Number,
    company_name:String,
    //logo_file:String,
    sector:String,
    employers_number:Number,
    webpage:String,
    country:String,
    department:String,
    city:String,
    //rut_file:String,
    email:String,
    //agreement_file:String
})
//Convert Model
module.exports= mongoose.model('companies',CompaniesSchema) 