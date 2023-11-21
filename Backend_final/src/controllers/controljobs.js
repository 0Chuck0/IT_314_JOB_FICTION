const path = require("path");
const jobs = require("../models/jobs");
module.exports = {

    get:async (req,res)=>{
        const data = await jobs.find();
        res.send("jobs_1.ejs",{data:data , logged:true});

    },




}