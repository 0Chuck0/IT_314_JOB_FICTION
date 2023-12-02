const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');
const jobs = require('../models/jobs');
const apply = require("../models/appliedjob");
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
              logged:true
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
              logged:true

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
              logged:true
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
              logged:true
          });
          }
        }
        }

      });
    }
    else {
      const jobData = await jobs.findOne({ id: req.params.id });
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
      })
    }
  }
}