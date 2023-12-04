const express = require("express");
const app = express()
const Register = require("../models/registers")
const Savedpost = require("../models/savePostSchema")
const jobs=require("../models/jobs")

module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        //console.log(data);

        const listdata = await Savedpost.distinct("job_id", {"email": data.email});
       // console.log(listdata);

        const jobsdata=await jobs.find({"id": {"$in": listdata}});
        //console.log(jobsdata);
        res.render("saved_jobs.hbs",{jobsdata,logged:true,profile:data.profile,name:data.name});
    }
}

