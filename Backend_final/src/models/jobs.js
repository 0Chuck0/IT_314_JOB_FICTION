const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const UserScema=new mongoose.Schema({
    id: {
        type:Number,
        unique:true,
        required:true
    },
    job_title: {
        type:String,
        
        required:true
    },
    company : {
        type:String,
        required:true
    },
    salary: {
        type:Number,
        required:true
    },
    location: {
        type: String,
        required:true,
       
    },

    work_mode:{
        type: String,
        required:true,
    },

    education:{
        type: String,
        required:true,
    },

    experience:{
        type: Number,
        required:true
    },

    skills: [{
        type: String

      }]
}) 


// now we need to create Collection
const jobs= mongoose.model("jobs",UserScema) ;
module.exports=jobs;