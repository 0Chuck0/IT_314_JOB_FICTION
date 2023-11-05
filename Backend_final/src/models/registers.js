const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const UserScema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    number: {
        type: Number,
        required:true,
        unique:true
    },
    gender:{
        type:String,
        required:true,
    },
    DOB:{
        type: Date,
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        required:true,
    }

}) 


// now we need to create Collection
const Register= mongoose.model("Register",UserScema) ;
module.exports=Register;
