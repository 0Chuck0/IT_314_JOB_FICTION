const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobs");
const { companyloggedinonly } = require("../middlewares/auth");
const Appliedjobs = require("../models/appliedjob");
const Register=require("../models/registers")

router.get("/:jobid",[companyloggedinonly],async function (req, res) {
    const id = req.params.jobid;
    Appliedjobs.find({ job_id: id }, 'email', async (err, emails) => {
        if (err) {
            console.error(err);
            // Handle error
        } else {
            // Extract unique emails from the result
            const uniqueEmails = [...new Set(emails.map(emailObj => emailObj.email))];
    
            // Step 2: Retrieve registers with these emails
            const registers = await Register.find({ email: { $in: uniqueEmails } });
            console.log(registers);
            res.render("candidateslist.hbs", {registers});
            // This will contain all the Register documents with emails found in the AppliedJobs schema for the specified job_id
        }
    });
    //const data = await Appliedjobs.find({job_id:id});
    
});

// router.post("/",[registerauth], function (req, res) {
//   controllogin.post(req, res);
// });

module.exports = router;
