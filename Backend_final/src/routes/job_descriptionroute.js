const express = require("express");
const router = express.Router();
const controljob_description = require("../controllers/controljob_description");

router.get("/",function (req, res) {
  controljob_description.get(req, res);
});

module.exports = router;
