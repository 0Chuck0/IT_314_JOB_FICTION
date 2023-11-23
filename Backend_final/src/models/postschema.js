<<<<<<< HEAD
const mongoose=require("mongoose");
const { v4: uuidv4 } = require('uuid');
const Postschema=new mongoose.Schema({
    job_id: { 
        // type: Number, 
        // default: uuidv4, 
=======
const { text } = require("express");
const mongoose=require("mongoose");
const Postschema=new mongoose.Schema({
    id: { 
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
        type: Number,
        unique: true, 
        required: true,
    }, 
    job_title: {
<<<<<<< HEAD
        type: "string",
        required: true,
    },
    company_name: {
        type: "string",
        required: true,
    },
=======
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
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
    salary: {
        type: Number,
        required: true,
    },
    location: {
<<<<<<< HEAD
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
=======
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
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
    },
}) 


<<<<<<< HEAD
// // now we need to create Collection
=======
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
const Jobpost = mongoose.model("Jobpost",Postschema) ;
module.exports=Jobpost;

