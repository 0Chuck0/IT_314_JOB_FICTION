const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controlrecommendation = require("../controllers/controlrecommendation");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.get("/",[loggedinonly],function (req, res) {
    controlrecommendation.get(req,res);
});

module.exports = router;