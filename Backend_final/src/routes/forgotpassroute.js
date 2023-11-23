const express = require("express");
const router = express.Router();
<<<<<<< HEAD
const controlforgotpass = require("../controllers/controlforgotpass");
const {Emailauth} = require("../middlewares/auth");
=======
const {Emailauth} = require("../middlewares/auth");
const controlforgotpass = require("../controllers/controlforgotpass");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
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
