const mongoose = require('mongoose');

const loginschema = new mongoose.Schema({
   
    name:{
       type:String,
       require:true
    },
    email:{
         type:String,
         required:true
     },
    password:{
         type:String,
         required:true
     },
    mobileNumber:{
        type:Number,
        required:true
    },
    token:{
        type:String,
        required:true
    }
 })
 
 
   
 // Schema 
 // A mongoose schema defines the structure of the document,
 // default values, validators, etc.
 const registerData = mongoose.model("user_information",loginschema);
 module.exports = registerData;
 
 // A mongoose model is a wrapper on the mongoose schema.
 // A mongoose schema defines the structure of the document,
 // default values,validators, etc .,whereas a mongoose model 
 // provides an interface to the database for creating ,
 // querying ,updating ,deleting records ,etc.