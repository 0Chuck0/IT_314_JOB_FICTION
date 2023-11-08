const express = require("express");
const router = express.Router();
const controlcompanylogin = require("../controllers/controlcompanylogin");
const {companyregisterauth , companyverifyauth} = require("../middlewares/auth");


router.get("/",function (req, res) {
    controlcompanylogin.get(req, res)
});


router.post("/",[companyregisterauth, companyverifyauth], function (req, res) {
    controlcompanylogin.post(req, res);
});

// router.post("/",[registerauth], function (req, res) {
//   controllogin.post(req, res);
// });

module.exports = router;
