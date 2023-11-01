const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const userScema=new mongoose.Schema({
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
    cpassword: {
        type:String,
        required:true
    },
    number: {
        type: Number,
        required:true,
        unique:true
    }

}) 


// now we need to create Collection
const Register = mongoose.model("Register",userScema) ;
module.exports=Register;

