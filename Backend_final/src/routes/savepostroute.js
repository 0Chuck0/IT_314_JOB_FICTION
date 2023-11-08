const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controlsavejobpost = require("../controllers/controlsavejobpost");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.post("/",[loggedinonly],function (req, res) {
    controlsavejobpost.post(req,res);
});

module.exports = router;