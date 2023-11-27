const path = require("path");
const jobs = require("../models/jobs");
const jwt = require("jsonwebtoken");
const Register = require("../models/registers");
module.exports = {

    get:async (req,res)=>{
        const data = await jobs.find();
        const defaultJobTitles = await jobs.distinct('job_title');
        const  defaultWorkModes = await jobs.distinct('work_mode');
        const defaultLocations = await jobs.distinct('location');
        var obj = {};
        if(req.cookies.jwt){
            jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
                if(err)
                {
                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
                }
                else
                {
                    const check = await Register.findOne({_id:decoded._id});
                    const profile=check.profile;
                    const name=check.name
                    res.render("jobs_1.ejs",{profile:profile,name:name,data:data , logged:true,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});

                }
            });
            //res.render("jobs_1.ejs",{data:data , logged:true,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }else{
            res.render("jobs_1.ejs",{data:data , logged:false,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }

    },




}