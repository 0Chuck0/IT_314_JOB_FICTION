const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    name: String,
    title: String,
    location: String,
    salary: String,
  
   
    roletype: String,
    time : String ,
    domain : String,
});

const Job = mongoose.model("jobs", jobSchema);

module.exports = Job;

