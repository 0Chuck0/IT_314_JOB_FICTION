const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controldeletelist = require("../controllers/controldeletelist");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.get("/:job_id",[loggedinonly],function (req, res) {
    req.body.job_id=req.params.job_id;
    controldeletelist.get(req,res);
});

module.exports = router;