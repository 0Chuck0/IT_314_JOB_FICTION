const express = require("express");
const router = express.Router();
const {companyloggedinonly}  = require("../middlewares/auth");
const control_new_post = require("../controllers/control_new_post");

router.get("/",function (req, res) {
    control_new_post.get(req,res);
});
router.post("/",[companyloggedinonly],function (req, res) {
    control_new_post.post(req,res);
});

module.exports = router;