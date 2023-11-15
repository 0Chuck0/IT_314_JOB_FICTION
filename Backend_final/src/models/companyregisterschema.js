const mongoose=require("mongoose");

const CompanySchema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    number: {
        type: Number,
        required:true,
        unique:true
    },
    companyname: {
        type:String,
        required:true
    },
    companytype: {
        type:String,
        required:true
    },
    companylocation: {
        type:String,
        required:true
    },
    yourdestination: {
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
    // cpassword: {
    //     type:String,
    //     required:true
    // },
    token:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        required:true,
    },
    profile:{
        type:String,
        required:true,
    },
    
}) 



const Companyregister= mongoose.model("Companyregister",CompanySchema) ;
module.exports=Companyregister;

