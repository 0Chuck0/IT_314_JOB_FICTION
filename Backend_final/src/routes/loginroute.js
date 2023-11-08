const express = require("express");
const {registerauth , verifyauth} = require("../middlewares/auth");
const router = express.Router();
const controllogin = require("../controllers/controllogin");


router.get("/",function (req, res) {
  controllogin.get(req, res);
});

router.post("/",[registerauth, verifyauth], function (req, res) {
    controllogin.post(req, res);
});

module.exports = router;
