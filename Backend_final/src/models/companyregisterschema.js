const mongoose=require("mongoose");

const CompanySchema=new mongoose.Schema({
    employee_name: {
        type:String,
        required:true
    },
    number: {
        type: Number,
        required:true,
<<<<<<< HEAD
        unique:true
=======
       
>>>>>>> 45fd5cce5fc383fda10cec767b41e9242799a242
    },
    companyname: {
        type:String,
        required:true
    },
    industrytype: {
        type:String,
        required:true
    },
    companylocation: {
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
        //required:true,
    },
    company_description:{
        type:String,
        
    },
   

    employee_designation:{
        type:String,
    }

    
}) 



const Companyregister= mongoose.model("Companyregister",CompanySchema) ;
module.exports=Companyregister;

