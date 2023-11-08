const express = require("express");
const router = express.Router();
const controljob_description = require("../controllers/controljob_description");


router.get("/:id",(req,res)=>{

  controljob_description.get(req, res);

})

router.post("/",function (req, res) {
  controljob_description.post(req, res);
});

module.exports = router;
