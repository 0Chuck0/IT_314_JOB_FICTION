const express = require("express");
const router = express.Router();
const { loggedinonly } = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const apply = require("../models/appliedjob.js");
const jobs = require('../models/jobs');
const Register = require("../models/registers.js");
router.post("/", [loggedinonly], async (req, res) => {
    
    const body = req.body;
    
    let payload = jwt.verify(req.cookies.jwt, process.env.SECRET_KEY);
    
    const check1 = await Register.findOne({ _id: payload._id });

    const jobData = await jobs.findOne({ id: body.id });

    const s1 = check1.technical_skills;
    const s2 = jobData.skills;

    // console.log(s1)
    // console.log(s2)

    const length1 = s1.length ;
    const length2 = s2.length ;

    // console.log(length1)
    // console.log(length2)
    var skill_check = 0;

    for(let i = 0 ; i < length2 ;i++){
        for(let j = 0 ; j < length1 ; j++){
            if(s2[i].toLowercase  == s1[j].toLowercase){
                skill_check = 1;
            }
        }
    }
    
    // let check = await apply.findOne({ job_id: body.id, email: check1.email });

    var currDate = new Date();

    if (currDate > jobData.last_date) {
        return res.json({
            'y' : 1
        });
    }

    else if(check1.college == null){
        return res.json({
            'b' : 1
        })
    }

    else if (check1.experience < jobData.experience){
        return res.json({
            'z' : 1
        })
    }

    else if(skill_check == 0){
        return res.json({
            'a' : 1
        })
    }

    else {
        // if (check) {
        //     console.log("hello")
        //     return res.json({
        //         'x': 1
        //     });
        // }
        // else {
            const lastapplyJob = await apply.findOne().sort('-applied_jobs_id');
            let newJobId = 1;

            if (lastapplyJob) {
                newJobId = lastapplyJob.applied_jobs_id + 1;

            }
            const myData = new apply({
                job_id: parseInt(body.id),
                email: check1.email,
                applied_jobs_id: newJobId
            });

            const job_app = await myData.save();
            //console.log("hello1")
            return res.json({
                'x': 1
            });
        //}
    }
})

module.exports = router;