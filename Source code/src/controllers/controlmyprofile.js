const express = require("express");
const app = express()
const Register = require("../models/jobseekers")

const recommendation = require("../models/recommendation");

module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        const recommendation_data=await recommendation.findOne({email:req.body.email})
        //console.log(recommendation_data)
        res.render("myprofile.hbs",{
            name : data.name,
            email : data.email,
            number : data.number,
            gender : data.gender,
            DOB : data.DOB,
            language_skills: data.language_skills,
            technical_skills: data.technical_skills,
            resume_link: data.resume_link,
            experience: data.experience,
            project: data.project,
            class12: data.class12,
            class10: data.class10,
            college: data.college,
            highest_edu: data.highest_edu,
            field: data.field,
            logged:true,
            profile:data.profile,
            name:data.name,
        recommendation_data});
    }
}

