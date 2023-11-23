const express = require("express");
const router = express.Router();
const jobs = require("../models/jobs");
const { companyloggedinonly } = require("../middlewares/auth");
const Companyregister = require("../models/companyregisterschema");


router.get("/",[companyloggedinonly],async function (req, res){
   // const check = await Companyregister.findOne({email:req.body.email});
    const Jobs = await jobs.find({company_email:req.body.email});
    const company=await Companyregister.findOne({email:req.body.email})
   
    
    res.render("posted_jobs.hbs",{company,Jobs});
});

module.exports = router;
