const express = require("express");
const router = express.Router();
const controlregister= require("../controllers/controlregister");
const {alredyregisterauth} = require("../middlewares/auth");


router.get("/",function (req, res) {
  controlregister.get(req, res);
});

router.post("/",[alredyregisterauth], function (req, res) {
    controlregister.post(req, res);
});

router.get("/:token", function (req, res) {
  controlregister.create(req, res);
});


module.exports = router;

