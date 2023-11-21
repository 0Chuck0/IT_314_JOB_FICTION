const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const Postschema=new mongoose.Schema({
    id: { 
        type: Number,
        unique: true, 
        required: true,
    }, 
    company:{
        type: String,
        required :true
    },
    job_title: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        required: true,
    },
    experience:{
        type: Number,
        required:true
    },
    skills: [{
        type: String

    }],
    industry_type: {
        type:String,
       
    },
    employment_type: {
        type:String

    },
    perk: [{
        type:String

    }],
    salary: {
        type: Number,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    last_date: {
        type: Date,
        require:true,
    },
    degree: {
        type: String
    },
   
    work_mode: {
        type: String,
    },
   

    company_email:{
        type: String
    }


}) 



// now we need to create Collection
const jobs= mongoose.model("jobs",Postschema) ;
module.exports=jobs;