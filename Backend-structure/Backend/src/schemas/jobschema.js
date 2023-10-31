const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    
    job_title: String,
    company_name: String,
    salary: String,
    location: String,
    work_mode: String,
    education: String,
    experience: Number,
    skills: Array,
    job_id : Number

});

const Job = mongoose.model("jobcollection", jobSchema);

module.exports = Job;

