const express = require("express");
const {loggedinonly} = require("../middlewares/auth");
const router = express.Router();
const controlmyprofile = require("../controllers/controlmyprofile");
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const app = express()
app.use(cookieParser());
require("dotenv").config();

router.get("/",[loggedinonly],function (req, res) {
  controlmyprofile.get(req, res);
});

module.exports = router;
