const express = require("express");
const app = express()
const Register = require("../models/jobseekers")


module.exports = {

    get:async (req,res)=>{

        const email  = req.params.email;
        
        const data = await Register.findOne({email:email})
        res.render("candidateprofile.hbs",{
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
            profile:data.profile
        });
    }
}