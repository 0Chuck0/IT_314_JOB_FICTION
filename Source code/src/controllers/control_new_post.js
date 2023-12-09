const jobs=require('../models/jobs');
const companyregister = require("../models/companyregisterschema");
const Register = require('../models/jobseekers');
const { sendEmail } = require('../services/mailer');
const { Newjobposted } = require('../services/mailtemplates');


module.exports = {

    get:async (req,res)=>{

        res.render("newpost.hbs");

    },
    post: async(req,res)=>{
        try{
            
            const {job_title,Responsibilities,exp,salary,location,Perks,last_date} = req.body;

            // const jobTitlePattern = /^[a-zA-Z]+$/;
            const responsibilitiesPattern = /^.{0,100}$/;
            const locationPattern = /^.{0,500}$/;
            const perksPattern = /^.{0,500}$/;
            const [year, month, day] = last_date.split('-');
            var currentDate = new Date();

            if (!job_title) {
                return res.status(400).json({ error: 'job_title is required' });
            }
            if (!Responsibilities) {
                return res.status(400).json({ error: 'Responsibilities is required' });
            }
            if (!exp) {
                return res.status(400).json({ error: 'exp is required' });
            }
            if (!salary) {
                return res.status(400).json({ error: 'salary name is required' });
            }
            if (!location) {
                return res.status(400).json({ error: 'location is required' });
            }
            if (!Perks) {
                return res.status(400).json({ error: 'Perks is required' });
            }
            if (job_title.length < 3 || job_title.length > 50) {
                return res.status(400).json({ error: 'Project name must be between 3 and 50 characters.' });
            }
            if (exp < 0 || exp > 25) {
                return res.status(400).json({ error: 'experience must be between 0 and 25 years.' });
            }
            if (salary < 5000 || exp > 500000) {
                return res.status(400).json({ error: 'salary must be between 5000 and 500000 Rupees.' });
            }
            // if (!jobTitlePattern.test(job_title)) {
            //     return res.status(400).json({
            //         error: 'Invalid job title. Please ensure it includes only characters (a-z, A-Z).'
            //     });
            // }
            if (!responsibilitiesPattern.test(Responsibilities)) {
                return res.status(400).json({
                    error: 'Invalid responsibilities. Please ensure it contains 0 to 100 letters.'
                });
            }
            if (!locationPattern.test(location)) {
                return res.status(400).json({
                    error: 'Invalid responsibilities. Please ensure it contains 0 to 100 letters.'
                });
            }
            if (!perksPattern.test(Perks)) {
                return res.status(400).json({
                    error: 'Invalid responsibilities. Please ensure it contains 0 to 100 letters.'
                });
            }
            if (!last_date || !(/^\d{1,4}-\d{1,2}-\d{1,2}$/).test(last_date)) {
                return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
            }
            if (!(parseInt(year, 10) >= 0 && parseInt(year, 10) <= 2025)) {
                return res.status(400).json({ error: 'Invalid year. Should be between 0 and 2025' });
            }
            if (!(parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12)) {
                return res.status(400).json({ error: 'Invalid month. Should be between 1 and 12' });
            }
            if (!(parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31)) {
                return res.status(400).json({ error: 'Invalid day. Should be between 1 and 31' });
            }
            if(last_date < currentDate)
            {
                return res.status(400).json({ error: 'Invalid date. Date Should be today onwards.' });
            }

            const companyemail=req.body.email;
           const company_name=req.body.company_name;
           const profile = req.body.profile;
          
            const lastJob = await jobs.findOne().sort('-id');
            let newJobId = 1;
            
            if (lastJob) {
                newJobId = lastJob.id + 1;
             
            }
            const data = {
                id: newJobId,
                company_email: companyemail,
                job_title: req.body.job_title,
                role: req.body.Responsibilities,
                experience: req.body.exp,
                skills: req.body.skills,
                industry_type: req.body.industry_type,
                employment_type: req.body.employment_type,
                work_mode: req.body.work_mode,
                salary: req.body.salary,
                location: req.body.location,
                last_date: req.body.last_date,
                degree: req.body.degree,
               company:company_name,
                perk: req.body.Perks,
                profile:profile,
            }
    
            // const registered = await data.save();
            // console.log(registered),
            // Jobpost.insertOne(data)
            
            await jobs.insertMany([data]);

            const jobseekers = await Register.find({verified:true}).exec();

            if(Array.isArray(data.skills))
            data.skills = data.skills.join();
            
            for(let i in jobseekers){
                console.log(jobseekers[i].email);
                if(jobseekers[i].email != undefined)
                sendEmail(jobseekers[i].email ,"New Opportunity at Job Fiction",Newjobposted(data));
            }
           
            res.render("companyhomepage.hbs")
        }
        catch (error)
        {
            console.log(error)
            res.status(400).send('<script>alert("Fatal Error."); window.location = "/companylogin";</script>');
        }
    }
}