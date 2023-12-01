const express = require("express");
const Adminschema = require("../models/adminschema");
const { isAdmin } = require("../middlewares/Adminauth");
const controlAdmin = require("../controllers/controlAdmin");
const Companyregister = require("../models/companyregisterschema");
const router = express.Router();

router.get("/login",async (req, res) =>{
  res.send("Adminlogin");
});

router.post("/login", async (req, res) =>{
    
    const check = await Adminschema.findOne({email:req.body.email});
    const match = await bcrypt.compare(req.body.password,check.password);
            
    if(match)
    {

        const token = jwt.sign({ _id:check._id}, process.env.SECRET_KEY);

        await Adminschema.updateOne({ _id:check._id}, { $set: { token: token }});

        res.cookie("Admin",token,{
            maxAge:1800000,
            httpOnly:true,
            secure:false,
        });

        res.redirect("Adminhome");

    }
    else
    {
         res.status(400).send('<script>alert("Incorrect Password or Email."); window.location = "/login";</script>');
    }
});

router.get("/home",[],function (req, res) {
    controlAdmin.get(req,res);
  });
  
router.post("/home/accept/:email",[isAdmin], function (req, res) {
    controlAdmin.post(req,res);
});

router.post("/home/delete/:email",[isAdmin], function (req, res) {
    controlAdmin.create(req,res);
});

router.get("/company_description/:email",async (req,res)=>{

    const email = req.body.params;

    const check = await Companyregister.findOne({email:email});

    res.send("comapnys_discription");

});

module.exports = router;
