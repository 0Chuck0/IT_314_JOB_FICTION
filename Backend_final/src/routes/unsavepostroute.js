const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controlunsavejobpost = require("../controllers/controlunsavepost");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.post("/",[loggedinonly], function (req, res) {
    controlunsavejobpost.post(req,res);
});

module.exports = router;