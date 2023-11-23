const express = require("express");
<<<<<<< HEAD
const router = express.Router();
const controlregister= require("../controllers/controlregister");
const {alredyregisterauth} = require("../middlewares/auth");

=======
const {alredyregisterauth} = require("../middlewares/auth");
const router = express.Router();
const controlregister= require("../controllers/controlregister");
const upload  = require("../middlewares/upload");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

router.get("/",function (req, res) {
  controlregister.get(req, res);
});

<<<<<<< HEAD
router.post("/",[alredyregisterauth], function (req, res) {
=======
router.post("/",[alredyregisterauth , upload.single('file')], function (req, res) {
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
    controlregister.post(req, res);
});

router.get("/:token", function (req, res) {
  controlregister.create(req, res);
});


module.exports = router;


