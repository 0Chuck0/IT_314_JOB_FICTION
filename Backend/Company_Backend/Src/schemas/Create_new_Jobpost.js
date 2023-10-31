const mongoose = require('mongoose');

const JobPostSchema=new mongoose.Schema({
    job_id: String,
    job_title: String,
    company_name: String,
    salary: Number,
    location: String,
    work_mode: String,
    education: String,
    experience: String,
    skills: String
});

const collection=new mongoose.model('collection',JobPostSchema)

module.exports=collection;