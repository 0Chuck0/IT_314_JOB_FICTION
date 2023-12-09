const express = require("express");
const app = express()
const Register = require("../models/jobseekers")
const applied_jobs = require("../models/appliedjob")
const jobs=require("../models/jobs")

module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        //console.log(data);

        const listdata = await applied_jobs.distinct("job_id", {"email": data.email});
        console.log(listdata)
       // console.log(listdata);
        var profile=data.profile;
        const jobsdata=await jobs.find({"id": {"$in": listdata}});
        //console.log(jobsdata);
        console.log(jobsdata)
        res.render("applied_jobs.hbs",{jobsdata,profile,logged:true,name:data.name});
    }
}
