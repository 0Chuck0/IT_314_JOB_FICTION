const mongoose=require("mongoose");
const { v4: uuidv4 } = require('uuid');
const Postschema=new mongoose.Schema({
    job_id: { 
        // type: Number, 
        // default: uuidv4, 
        type: Number,
        unique: true, 
        required: true,
    }, 
    job_title: {
        type: "string",
        required: true,
    },
    company_name: {
        type: "string",
        required: true,
    },
    salary: {
        type: Number,
        required: true,
    },
    location: {
        type: "string",
        required: true,
    },
    work_mode: {
        type: "string",
        required: true,
    },
    education: {
        type: "string",
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    skills: {
        type: Array,
        required: true,
    },
}) 


// // now we need to create Collection
const Jobpost = mongoose.model("Jobpost",Postschema) ;
module.exports=Jobpost;

