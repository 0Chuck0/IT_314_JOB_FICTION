const express = require("express");
const router = express.Router();
const {loggedinonly} = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const apply = require("../models/appliedjob.js");
const Register=require("../models/registers.js");
router.post("/", [loggedinonly] , async(req, res) => {

    console.log("apply running");
    const body  = req.body;
    let payload = jwt.verify(req.cookies.jwt, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa' );
    console.log(payload);
    
    const check1 = await Register.findOne({_id:payload._id});
    console.log(check1);
    
    let check = await apply.findOne({job_id: body.id ,email: check1.email});


    if ( check ) {
        console.log("hello")
        return res.json({
            'x':1
        });
    }
    else
    {
        const lastapplyJob = await apply.findOne().sort('-applied_jobs_id');
        let newJobId = 1;
        
        if (lastapplyJob) {
            newJobId = lastapplyJob.applied_jobs_id+ 1;
         
        }
        const myData = new apply({
            job_id: parseInt( body.id ),
            email: check1.email,
            applied_jobs_id:newJobId 
        });

        const job_app = await myData.save();
        console.log("hello1")
    return res.json({
        'x':0
    });
    }

        
})

module.exports = router;