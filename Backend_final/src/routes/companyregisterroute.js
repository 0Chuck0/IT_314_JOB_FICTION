const express = require("express");
const router = express.Router();
const controlcompanyregister = require("../controllers/controlcompanyregister");
const { companyalredyregisterauth } = require("../middlewares/auth");
const upload  = require("../middlewares/upload");
const Companyregister = require("../models/companyregisterschema");

router.get("/", function (req, res) {
    controlcompanyregister.get(req, res)
});


router.post("/", [upload.single('file')], async function (req, res) {
    const v = await Companyregister.find({ email: req.body.email });
    if (v.length) {
        res.status(400).send('<script>alert("You have already registered."); window.location ="/companylogin" </script>');
    }
    else{
        controlcompanyregister.post(req, res);
    }
});

router.get("/:token", function (req, res) {
    controlcompanyregister.create(req, res);
});


// router.post("/", function (req, res) {
//     controlcompanyregister.post(req, res)
// });


module.exports = router;