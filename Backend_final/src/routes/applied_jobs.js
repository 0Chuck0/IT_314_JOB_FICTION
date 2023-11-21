const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controlapplied_jobs = require("../controllers/controlapplied_jobs");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.get("/",[loggedinonly],function (req, res) {
    controlapplied_jobs.get(req,res);
});

module.exports = router;