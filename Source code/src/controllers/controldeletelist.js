const express = require("express");
const app = express()
const Register = require("../models/registers")
const Savedpost = require("../models/savePostSchema")
const jobs=require("../models/jobs")

module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        //console.log(data);

       
        const deletedPost = await Savedpost.findOneAndDelete({ "email":data.email, "job_id":req.body.job_id });
       // console.log(listdata);
       if (!deletedPost) {
        res.status(400).send('<script>alert("Already deleted job post"); window.location = "/saved_jobs";</script>');
    }
    else{
        res.status(400).send('<script>alert(" deleted job post"); window.location = "/saved_jobs";</script>');
    }




       

     
    }
}
