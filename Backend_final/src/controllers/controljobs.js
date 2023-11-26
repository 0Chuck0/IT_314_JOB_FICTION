const path = require("path");
const jobs = require("../models/jobs");
module.exports = {

    get:async (req,res)=>{
        const data = await jobs.find();
        const defaultJobTitles = await jobs.distinct('job_title');
        const  defaultWorkModes = await jobs.distinct('work_mode');
        const defaultLocations = await jobs.distinct('location');
        var obj = {};
        if(req.cookies.jwt){
            res.render("jobs_1.ejs",{data:data , logged:true,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }else{
            res.render("jobs_1.ejs",{data:data , logged:false,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }

    },




}