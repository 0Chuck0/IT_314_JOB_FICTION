const express = require("express");
const app = express()
const Register = require("../models/registers")
const jwt = require("jsonwebtoken");
//const express = require("express");
///const app = express()
const cookieParser=require("cookie-parser");
const jobs = require("../models/jobs");
app.use(cookieParser());
require("dotenv").config();

module.exports = {

    get:async (req,res)=>{
        
        const job_title = await jobs.distinct('job_title');
        const location=await jobs.distinct('location');
        const data = await Register.findOne({email:req.body.email})
        const a_technical_skills = ["c++", "python", "java", "AD", "WD", "javascript", "R", "Typescript","HTML","CSS"];
        const technical_skills = data.technical_skills;
        
        const r_technical_skills = a_technical_skills.filter(skill => !technical_skills.includes(skill));
        const resume_link=data.resume_link;
     
        
        res.render("edit_profile.hbs",{job_title , logged:true,location,technical_skills,r_technical_skills,data});
    },

    post:async(req,res)=>{
        try { 
  

                jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
                    if(err)
                    {
                    return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
                    }
                    else
                    {
                         const check = await Register.findOne({_id:decoded._id});
                         //console.log(check);

                        const userId = decoded._id;

                        const updateData = {
                            language_skills: req.body.language_skills,
                            technical_skills: req.body.technical_skills,
                            resume_link: req.body.resume_link,
                            experience: req.body.experience,
                            project: req.body.project,
                            class12: req.body.class12,
                            class10: req.body.class10,
                            college: req.body.college,
                            highest_edu: req.body.highest_edu,
                            field: req.body.field
                          };
                        //console.log(updateData);
                          await Register.findOneAndUpdate({ _id: userId }, updateData);
    
                    }
                    });
                res.render("home.hbs");




            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    }
}