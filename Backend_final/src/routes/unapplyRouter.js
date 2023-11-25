const express = require("express");
const router = express.Router();
const { loggedinonly } = require("../middlewares/auth");
const jwt = require("jsonwebtoken");
const apply = require("../models/appliedjob.js");
<<<<<<< HEAD
const jobs = require('../models/jobs');
=======
>>>>>>> 45fd5cce5fc383fda10cec767b41e9242799a242
const Register = require("../models/registers.js");


router.post("/", [loggedinonly], async (req, res) => {

<<<<<<< HEAD
    const body = req.body;

=======
    console.log("unapply running");
    const body = req.body;
>>>>>>> 45fd5cce5fc383fda10cec767b41e9242799a242
    let payload = jwt.verify(req.cookies.jwt, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');

    const check1 = await Register.findOne({ _id: payload._id });

<<<<<<< HEAD
    let check = await apply.findOne({ job_id: body.id, email: check1.email });

    const jobData = await jobs.findOne({ id: body.id });

    var currDate = new Date();

    if (currDate > jobData.last_date) {
        return res.json({
            'y': 1
        });
    }

    else {
        if (check) {
            console.log("hello")
            await apply.deleteOne(check);
            return res.json({
                'x': 0
            });
        }
        else {
            console.log("hello1")
            return res.json({
                'x': 1
            });
        }
    }
=======
    let check = await apply.findOne({ job_id: body.id ,email: check1.email});

    if (check) {
        console.log("hello")
        await apply.deleteOne(check);
        return res.json({
            'x': 0
        });
    }
    else {
        // const lastapplyJob = await apply.findOne().sort('-applied_jobs_id');
        // let newJobId = 1;

        // if (lastapplyJob) {
        //     newJobId = lastapplyJob.applied_jobs_id+ 1;

        // }

        // const myData = new apply({
        //     job_id: parseInt( body.id ),
        //     email: check1.email,
        //     applied_jobs_id:newJobId 
        // });

        // const job_app = await myData.save();
        console.log("hello1")
        return res.json({
            'x': 1
        });
    }

>>>>>>> 45fd5cce5fc383fda10cec767b41e9242799a242

})

module.exports = router;