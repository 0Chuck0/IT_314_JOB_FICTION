const express = require("express");
const router = express.Router();
const {Emailauth} = require("../middlewares/auth");
const controlforgotpass = require("../controllers/controlforgotpass");
const changepassword = require("../controllers/changepassword");

router.get("/:token", function (req, res) {
  changepassword.get(req, res);
});

router.post("/:token", function (req, res) {
  changepassword.post(req, res);
});

router.get("/", function (req, res) {
  controlforgotpass.get(req, res);
});

router.post("/", Emailauth, function (req, res) {
  controlforgotpass.post(req, res);
});

module.exports = router;
