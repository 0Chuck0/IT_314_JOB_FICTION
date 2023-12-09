const express = require("express");
const app = express()
const Register = require("../models/jobseekers")
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
        var work_mode=[]
        const data = await Register.findOne({email:req.body.email})
        const a_technical_skills = ["c++", "python", "java", "AD", "WD", "javascript", "R", "Typescript","HTML","CSS"];
        const a_languages = ["English", "Spanish", "Mandarin Chinese", "Hindi", "Arabic", "Bengali", "Russian", "Portuguese", "Japanese", "German", "French", "Urdu", "Korean", "Italian", "Turkish"];
        const languages=data.language_skills;
      const recommendation_data= await recommendation.findOne({email:req.body.email});
        //console.log(recommendation_data)
        const technical_skills = data.technical_skills;
        var r_technical_skills=[]
        var r_languages=[]
        var r_work_modeR=undefined
        var r_work_modeA=true
        var r_work_modeH=undefined
        var r_work_modeO=undefined
        var r_employmentA=true
        var r_employmentP=undefined
        var r_employmentI=undefined
        var r_employmentF=undefined
        
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

        if(recommendation_data)
        {
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

            if(recommendation_data.r_work_mode)
            {
                if(recommendation_data.r_work_mode==="Office")
                {
                    r_work_modeO=true
                }
                else if(recommendation_data.r_work_mode==="Hybrid")
                {
                    r_work_modeH=true
                }
                else if(recommendation_data.r_work_mode==="Remote")
                {
                    r_work_modeR=true
                }
                r_work_modeA=false
            }
            else
            {
                r_work_modeA=true
            }

            if(recommendation_data.r_employment)
            {
                if(recommendation_data.r_employment==="intern")
                {
                    r_employmentI=true
                }
                else if(recommendation_data.r_employment==="part time")
                {
                    r_employmentP=true
                }
                else if(recommendation_data.r_employment==="full time")
                {
                    r_employmentF=true
                }
                r_employmentA=false
            }
            else
            {
                r_employmentA=true
            }

           

            
        }
       var profile=data.profile
        const resume_link=data.resume_link;
        
        
        res.render("edit_profile.hbs",{profile,job_title , logged:true,location,technical_skills,r_technical_skills,data,languages,r_languages,resume_link,recommendation_data,name:data.name,r_work_modeR,r_work_modeO,r_work_modeA,r_work_modeH,r_employmentA,r_employmentP,r_employmentF,r_employmentI});
    },

    post:async(req,res)=>{
        try { 
  
            const {resume_link,experience,project,college,class12,class10} = req.body;

            const driveLinkRegex = /^https?:\/\/drive\.google\.com\/(?:file\/d\/|open\?id=)([a-zA-Z0-9_-]+)(?:\/.*)?$/;
            const projectNamePattern = /^[a-zA-Z][a-zA-Z0-9@#$&_,.\s-]*$/;
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
                return res.status(400).json({ error: 'college name is required' });
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
            // if (!driveLinkRegex.test(resume_link)) {
            //     return  res.status(400).send('<script>alert("invalid drive link "); window.location = "/edit_profile";</script>');


            //     };
            
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
            //console.log(req.body)

                jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
                    if(err)
                    {
                        throw new Error(err);
                    }
                    else
                    {
                         const check = await Register.findOne({_id:decoded._id});
                         //console.log(check);
                        const useremail=check.email;
                        const userId = decoded._id;
                        
                        var imgUrl ='';
                        if (req.file === undefined)  imgUrl = check.profile;
                        else                         imgUrl = `${process.env.Base_Url}/file/${req.file.filename}`;
                        
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
                            field: req.body.field,
                            profile:imgUrl
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