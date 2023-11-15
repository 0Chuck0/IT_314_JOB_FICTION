const express = require("express");
const router = express.Router();
const controlcompanyregister = require("../controllers/controlcompanyregister");
const { companyalredyregisterauth } = require("../middlewares/auth");
const upload  = require("../middlewares/upload");

router.get("/", function (req, res) {
    controlcompanyregister.get(req, res)
});


router.post("/", [companyalredyregisterauth , upload.single('file')], function (req, res) {
    controlcompanyregister.post(req, res);
});

router.get("/:token", function (req, res) {
    controlcompanyregister.create(req, res);
});


// router.post("/", function (req, res) {
//     controlcompanyregister.post(req, res)
// });


module.exports = router;