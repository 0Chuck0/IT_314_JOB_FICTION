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
        
       var job_title = await jobs.distinct('job_title');
        var location=await jobs.distinct('location');
        const data = await Register.findOne({email:req.body.email})
        const a_technical_skills = ["c++", "python", "java", "AD", "WD", "javascript", "R", "Typescript","HTML","CSS"];
        const a_languages = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic", "Bengali", "Russian", "Portuguese", "Japanese", "German", "French", "Urdu", "Korean", "Italian", "Turkish"];
        const languages=data.language_skills;
      const recommendation_data= await recommendation.findOne({email:req.body.email});
        console.log(recommendation_data)
        const technical_skills = data.technical_skills;
        var r_technical_skills=[]
        var r_languages=[]
        if(technical_skills)
        {
            r_technical_skills = a_technical_skills.filter(skill => !technical_skills.includes(skill));
        }
        else 
        {
             r_technical_skills=a_technical_skills;
        }
        if(languages)
        {
             r_languages = a_languages.filter(skill => !languages.includes(skill));
        }
        else
        {
             r_languages=a_languages;
        }


        if(recommendation_data.r_job_title)
        {
             job_title = job_title.filter(skill => !recommendation_data.r_job_title.includes(skill));
        }
        else
        {
             r_languages=a_languages;
        }

        
        if(recommendation_data.r_location)
        {
             location = location.filter(skill => !recommendation_data.r_location.includes(skill));
        }
        else
        {
             r_languages=a_languages;
        }
        const resume_link=data.resume_link;
        
        
        res.render("edit_profile.hbs",{job_title , logged:true,location,technical_skills,r_technical_skills,data,languages,r_languages,resume_link,recommendation_data});
    },

    post:async(req,res)=>{
        try { 
  
            const {resume_link,experience,project,college,class12,class10} = req.body;

            const driveLinkRegex = /^https:\/\/drive\.google\.com\/(file\/d\/|open\?id=)([a-zA-Z0-9_-]+)\/?$/;
            const projectNamePattern = /^[a-zA-Z]([0-9A-Za-z@#$&_,.-])*$/;
            const collegeNamePattern = /^[a-zA-Z\s]+$/;

            if (!resume_link) {
                return res.status(400).json({ error: 'resume_link is required' });
            }
            if (!experience) {
                return res.status(400).json({ error: 'experience is required' });
            }
            if (!project) {
                return res.status(400).json({ error: 'project name is required' });
            }
            if (!college) {
                return res.status(400).json({ error: 'collage name is required' });
            }
            if (!class12) {
                return res.status(400).json({ error: 'class12 grade is required' });
            }
            if (!class10) {
                return res.status(400).json({ error: 'class10 grade is required' });
            }
            if (project.length < 3 || project.length > 50) {
                return res.status(400).json({ error: 'Project name must be between 3 and 50 characters.' });
            }
            if (experience < 0 || experience > 25) {
                return res.status(400).json({ error: 'experience must be between 0 and 25 years.' });
            }
            if (class12 < 0 || class12 > 100) {
                return res.status(400).json({ error: 'class12 grade must be between 0 and 100 percentage.' });
            }
            if (class10 < 0 || class10 > 100) {
                return res.status(400).json({ error: 'class10 grade must be between 0 and 100 percentage.' });
            }
            if (!driveLinkRegex.test(resume_link)) {
                 return res.status(400).json({ error: 'Invalid Google Drive link format' });
            }
            if (!projectNamePattern.test(project)) {
                return res.status(400).json({
                    error: 'Invalid project name. Please ensure it starts with a letter, and includes only characters A-Z, a-z, 0-9, and special characters like _, ,, ., -'
                });
            }
            if (!collegeNamePattern.test(college)) {
                return res.status(400).json({
                    error: 'Invalid college name. Please ensure it includes only characters from A-Z or a-z.'
                });
            }
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
                    res.status(200).send('<script>window.location = "/home";</script>');




            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    }
}