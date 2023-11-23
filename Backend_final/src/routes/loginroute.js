const express = require("express");
<<<<<<< HEAD
const router = express.Router();
const controllogin = require("../controllers/controllogin");
const {registerauth , verifyauth} = require("../middlewares/auth");
=======
const {registerauth , verifyauth} = require("../middlewares/auth");
const router = express.Router();
const controllogin = require("../controllers/controllogin");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40


router.get("/",function (req, res) {
  controllogin.get(req, res);
});

router.post("/",[registerauth, verifyauth], function (req, res) {
    controllogin.post(req, res);
});

module.exports = router;
