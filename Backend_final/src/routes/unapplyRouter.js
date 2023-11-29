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
            //console.log("hello")
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

})

module.exports = router;