const express = require("express");
const app = express()
const Register = require("../models/registers")
const recommendation=require("../models/recommendation")
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
        const a_languages = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic", "Bengali", "Russian", "Portuguese", "Japanese", "German", "French", "Urdu", "Korean", "Italian", "Turkish"];
        const languages=data.language_skills;
        if(languages)
        var r_languages = a_languages.filter(skill => !languages.includes(skill));
        else
        var r_languages = a_languages;
        const technical_skills = data.technical_skills;
        if(technical_skills)
        var r_technical_skills = a_technical_skills.filter(skill => !technical_skills.includes(skill));
        else
        var r_technical_skills=a_technical_skills;
        const resume_link=data.resume_link;
     
        
        res.render("edit_profile.hbs",{job_title , logged:true,location,technical_skills,r_technical_skills,data,languages,r_languages});
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
                        const useremail=check.email;
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
                          const updaterecommendation={
                            r_employment:req.body.r_employment,
                            r_work_mode:req.body.r_work_mode,
                            r_location:req.body.r_location,
                            r_salary:req.body.r_salary,
                            r_job_title:req.body.r_job_title
                          }
                        //console.log(req.body.r_work_mode)
                            recommendation.findOneAndUpdate(
                                { email: useremail }, // Search for a document with the provided email
                                {
                                $set: {
                                    r_employment: req.body.r_employment,
                                    r_work_mode: req.body.r_work_mode,
                                    r_location: req.body.r_location,
                                    r_salary: req.body.r_salary,
                                    r_job_title: req.body.r_job_title
                                }
                                },
                                { upsert: true, new: true }, // Creates a new document if no match is found
                                (err, doc) => {
                                if (err) {
                                    console.error(err);
                                    // Handle the error
                                } else {
                                    //console.log('Updated/Inserted recommendation:',doc);
                                    // Document updated or inserted successfully
                                }
                                }
                            );
                        
    
                    }
                    });
                    res.status(200).send('<script>window.location = "/myprofile";</script>');




            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    }
}