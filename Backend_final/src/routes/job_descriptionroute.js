const express = require("express");
const router = express.Router();
const controljob_description = require("../controllers/controljob_description");

router.post("/",function (req, res) {
  controljob_description.post(req, res);
});

module.exports = router;
