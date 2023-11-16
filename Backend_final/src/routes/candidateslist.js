const express = require("express");
const router = express.Router();
const Jobs = require("../models/jobs");
const { companyloggedinonly } = require("../middlewares/auth");
const Appliedjobs = require("../models/appliedjob");


router.get("/:jobid",[companyloggedinonly],async function (req, res) {
    const id = req.params.jobid;
    const data = await Appliedjobs.find({id:id});
    res.render("candidateslist", {data});
});

// router.post("/",[registerauth], function (req, res) {
//   controllogin.post(req, res);
// });

module.exports = router;
