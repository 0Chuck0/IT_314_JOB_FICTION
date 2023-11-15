const express = require("express");
const {companyloggedinonly} = require("../middlewares/auth");
const router = express.Router();
const controlcandidateprofile = require("../controllers/controlcandidateprofile");
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const app = express()
app.use(cookieParser());
require("dotenv").config();

router.get("/:email",[companyloggedinonly],function (req, res) {

  controlcandidateprofile.get(req, res);
});

module.exports = router;
