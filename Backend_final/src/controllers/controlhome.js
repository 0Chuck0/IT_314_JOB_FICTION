const jobs = require("../models/jobs");

module.exports = {

    get:async (req,res)=>{
        const data = await jobs.find();
        const defaultJobTitles = await jobs.distinct('job_title');
        const  defaultWorkModes = await jobs.distinct('work_mode');
        const defaultLocations = await jobs.distinct('location');

        if(req.cookies.jwt){
            res.render("home.hbs",{data:data , logged:true,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }
        else{
        res.render("home.hbs",{data:data,defaultJobTitles:defaultJobTitles , defaultLocations:defaultLocations , defaultWorkModes:defaultWorkModes});
        }

    },

}