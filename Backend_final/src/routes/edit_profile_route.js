const express = require("express");
const {loggedinonly} = require("../middlewares/auth");
const router = express.Router();
const control_edit_profile = require("../controllers/control_edit_profile");
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
const upload = require("../middlewares/upload");
const app = express()
app.use(cookieParser());
require("dotenv").config();

router.get("/",[loggedinonly],function (req, res) {
  control_edit_profile.get(req, res);
});


router.post("/",[upload.single('file'),loggedinonly], function (req, res) {
  control_edit_profile.post(req, res);
});
module.exports = router;
