const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');
const jobs = require('../models/jobs');
const apply = require("../models/appliedjob");
const company=require("../models/companyregisterschema")
module.exports = {

  get: async (req, res) => {

    if (req.cookies.jwt) {
      jwt.verify(req.cookies.jwt, process.env.SECRET_KEY, async (err, decoded) => {
        if (err) {
          res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
        }
        else {
          const check = await Register.findOne({ _id: decoded._id });
          req.body.email = check.email;

          const data = await Register.findOne({ email: req.body.email });
          const jobData = await jobs.findOne({ id: req.params.id });
          var job_status = await apply.findOne({ job_id: req.params.id, email: check.email });
          const company_email=jobData.company_email
         
          const company_data=await company.findOne({email:company_email})
          //console.log(company_data)
          if (await Savedpost.findOne({ job_id: req.params.id, email: data.email }).count() == 1) {
            if(job_status){
            res.render("job_description.hbs", {
              jobid: req.params.id,
              how: "fa-solid",
              savestatus: "Saved",
              jobTitle: jobData.job_title,
              companyName: jobData.company,
              companyLocation: jobData.location,
              comExperience: jobData.experience,
              giveSalary: jobData.salary,
              empType: jobData.employment_type,
              wrkMode: jobData.work_mode,
              empDegree: jobData.degree,
              lstDate: jobData.last_date,
              giveperk: jobData.perk,
              reqskills: jobData.skills,
              industry_type: jobData.industry_type,
              role: jobData.role,
              job_status: job_status,
              name:data.name,
              profile:data.profile,
              logged:true,
              company_description:company_data.company_description,
            })
          }else{
            res.render("job_description.hbs", {
              jobid: req.params.id,
              how: "fa-solid",
              savestatus: "Saved",
              jobTitle: jobData.job_title,
              companyName: jobData.company,
              companyLocation: jobData.location,
              comExperience: jobData.experience,
              giveSalary: jobData.salary,
              empType: jobData.employment_type,
              wrkMode: jobData.work_mode,
              empDegree: jobData.degree,
              lstDate: jobData.last_date,
              giveperk: jobData.perk,
              reqskills: jobData.skills,
              industry_type: jobData.industry_type,
              role: jobData.role,
              name:data.name,
              profile:data.profile,
              logged:true,
              company_description:company_data.company_description,


          });
        }
          }
          else {
            if(job_status){
            res.render("job_description.hbs", {
              jobid: req.params.id,
              how: "fa-regular",
              savestatus: "Save",
              jobTitle: jobData.job_title,
              companyName: jobData.company,
              companyLocation: jobData.location,
              comExperience: jobData.experience,
              giveSalary: jobData.salary,
              empType: jobData.employment_type,
              wrkMode: jobData.work_mode,
              empDegree: jobData.degree,
              lstDate: jobData.last_date,
              giveperk: jobData.perk,
              reqskills: jobData.skills,
              industry_type: jobData.industry_type,
              role: jobData.role,
              job_status: job_status,
              name:data.name,
              profile:data.profile,
              logged:true,
              company_description:company_data.company_description,

            })
          }else{
            res.render("job_description.hbs", {
              jobid: req.params.id,
              how: "fa-regular",
              savestatus: "Save",
              jobTitle: jobData.job_title,
              companyName: jobData.company,
              companyLocation: jobData.location,
              comExperience: jobData.experience,
              giveSalary: jobData.salary,
              empType: jobData.employment_type,
              wrkMode: jobData.work_mode,
              empDegree: jobData.degree,
              lstDate: jobData.last_date,
              giveperk: jobData.perk,
              reqskills: jobData.skills,
              industry_type: jobData.industry_type,
              role: jobData.role,
              name:data.name,
              profile:data.profile,
              logged:true,
              company_description:company_data.company_description,

          });
          }
        }
        }

      });
    }
    else {
      const jobData = await jobs.findOne({ id: req.params.id });
      const company_email=jobData.company_email
         
      const company_data=await company.findOne({email:company_email})
      res.render("job_description.hbs", {
        jobid: req.params.id,
        how: "fa-regular",
        savestatus: "Save",
        jobTitle: jobData.job_title,
        companyName: jobData.company,
        companyLocation: jobData.location,
        comExperience: jobData.experience,
        giveSalary: jobData.salary,
        empType: jobData.employment_type,
        wrkMode: jobData.work_mode,
        empDegree: jobData.degree,
        lstDate: jobData.last_date,
        giveperk: jobData.perk,
        reqskills: jobData.skills,
        industry_type: jobData.industry_type,
        role: jobData.role,
        company_description:company_data.company_description,

      })
    }
  }
}