const express = require("express");
const {loggedinonly}  = require("../middlewares/auth");
const router = express.Router();
const controlsavelist = require("../controllers/controlsavelist");
const jwt = require("jsonwebtoken");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

router.get("/",[loggedinonly],function (req, res) {
    controlsavelist.get(req,res);
});

module.exports = router;