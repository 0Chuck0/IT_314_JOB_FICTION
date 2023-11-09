const express = require("express");
const {companyloggedinonly} = require("../middlewares/auth");
const router = express.Router();
const controlcompanyprofile = require("../controllers/controlcompanyprofile");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.get("/",[companyloggedinonly], function (req, res) {
    controlcompanyprofile.get(req,res)
});



module.exports = router;

