const express = require("express");
const router = express.Router();
const {Emailauth, companyEmailauth} = require("../middlewares/auth");
const controlforgotpass = require("../controllers/controlforgotpass");
const changepassword = require("../controllers/changepassword");
const controlcompanyforgotpass = require("../controllers/controlcompanyforgotpass");
const companychangepassword = require("../controllers/companychangepassword");
const  change_current_password = require("../controllers/change_current_password");

// router.get("/company/:token", function (req, res) {
//   companychangepassword.get(req, res);
// });

// router.get("/company", function (req, res) {
//   controlcompanyforgotpass.get(req, res);
// });
// router.post("/company",companyEmailauth, function (req, res) {
//   controlcompanyforgotpass.post(req, res);
// });
// router.post("/company/:token", function (req, res) {
//   companychangepassword.post(req, res);
// });

router.get("/", function (req, res) {
    change_current_password.get(req, res);
  });
  
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
