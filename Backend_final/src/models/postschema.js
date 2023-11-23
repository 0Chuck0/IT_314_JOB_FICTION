const { text } = require("express");
const mongoose=require("mongoose");
const Postschema=new mongoose.Schema({
    id: { 
        type: Number,
        unique: true, 
        required: true,
    }, 
    job_title: {
        type: String,
        required: true,
    },
    role:{
        type: String,
        require: true,
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
}) 


const Jobpost = mongoose.model("Jobpost",Postschema) ;
module.exports=Jobpost;

