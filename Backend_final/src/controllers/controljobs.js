const path = require("path");
const jobs = require("../models/jobs");
module.exports = {

    get:async (req,res)=>{
        const data = await jobs.find();
        var obj = {};
        if(req.cookies.jwt){
            res.render("jobs_1.ejs",{data:data , logged:true});
        }else{
            res.render("jobs_1.ejs",{data:data , logged:false});
        }

    },




}