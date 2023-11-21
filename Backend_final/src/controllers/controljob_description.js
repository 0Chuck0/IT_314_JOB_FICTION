const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');
const jobs = require('../models/jobs');

module.exports = {
    
    get:async (req,res)=>{
        
        if(req.cookies.jwt){
            jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
            if(err)
            {
              res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
            }
            else
            {
                const check = await Register.findOne({_id:decoded._id});
                req.body.email = check.email;
                
                const data = await Register.findOne({email:req.body.email});
                const jobData = await jobs.findOne({id:req.params.id});
                
             
                if(await Savedpost.findOne({job_id:req.params.id, email:data.email}).count() == 1)
                {
                   res.render("job_description",{
                             jobid : req.params.id,
                             how: "fa-solid",
                             jobTitle : jobData.job_title,
                             companyName: jobData.company,
                             companyLocation: jobData.location,
                             comExperience: jobData.experience,
                             giveSalary: jobData.salary,
                             empType: jobData.employment_type,
                             wrkMode : jobData.work_mode,
                             empDegree : jobData.degree,
                             lstDate : jobData.last_date,
                             giveperk : jobData.perk,
                             reqskills : jobData.skills,
                             industry_type:jobData.industry_type,
                             role: jobData.role
                            })
                }
                else
                {
                  res.render("job_description",{
                             jobid : req.params.id,
                             how: "fa-regular",
                             jobTitle : jobData.job_title,
                             companyName: jobData.company,
                             companyLocation: jobData.location,
                             comExperience: jobData.experience,
                             giveSalary: jobData.salary,
                             empType: jobData.employment_type,
                             wrkMode : jobData.work_mode,
                             empDegree : jobData.degree,
                             lstDate : jobData.last_date,
                             giveperk : jobData.perk,
                             reqskills : jobData.skills,
                             industry_type:jobData.industry_type,
                             role: jobData.role
                            })
                }
            }
            
            });
        }
        else
        {  
          const jobData = await jobs.findOne({id:req.params.id});
           res.render("job_description",{
                      jobid : req.params.id,
                      how: "fa-regular",
                      jobTitle : jobData.job_title,
                      companyName: jobData.company,
                      companyLocation: jobData.location,
                      comExperience: jobData.experience,
                      giveSalary: jobData.salary,
                      empType: jobData.employment_type,
                      wrkMode : jobData.work_mode,
                      empDegree : jobData.degree,
                      lstDate : jobData.last_date,
                      giveperk : jobData.perk,
                      reqskills : jobData.skills,
                      industry_type:jobData.industry_type,
                      role: jobData.role

                    })
        }
    }
}