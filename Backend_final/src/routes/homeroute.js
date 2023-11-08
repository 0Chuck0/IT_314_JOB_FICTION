const express = require("express");
const router = express.Router();
const controlhome = require("../controllers/controlhome");
const {registerauth,loggedinonly} = require("../middlewares/auth");


router.get("/",loggedinonly,function (req, res) {
  controlhome.get(req, res);
});

router.post("/",[registerauth], function (req, res) {
    controlhome.post(req, res);
});

module.exports = router;
