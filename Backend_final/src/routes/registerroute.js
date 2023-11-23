const express = require("express");
const {alredyregisterauth} = require("../middlewares/auth");
const router = express.Router();
const controlregister= require("../controllers/controlregister");
const upload  = require("../middlewares/upload");
const Register = require("../models/registers");

router.get("/",function (req, res) {
  controlregister.get(req, res);
});

router.post("/",[upload.single('file')], async function (req, res) {

  const v = await Register.find({email:req.body.email})

  if(v.length){

      res.status(400).send('<script>alert("You have already registered."); window.location ="/login" </script>');

      }

  else{


  controlregister.post(req, res);

  }
});

router.get("/:token", function (req, res) {
  controlregister.create(req, res);
});


module.exports = router;


