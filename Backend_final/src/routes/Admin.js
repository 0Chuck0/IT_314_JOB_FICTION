const express = require("express");
const Adminschema = require("../models/adminschema");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const { isAdmin, Adminexists } = require("../middlewares/Adminauth");
const controlAdmin = require("../controllers/controlAdmin");
const Companyregister = require("../models/companyregisterschema");
const router = express.Router();

router.get("/register",[isAdmin],async (req, res) =>{
    res.render("Adminregister.hbs");
  });

router.post("/register",[isAdmin],async (req, res) =>{
    const HashPassword = await bcrypt.hash(req.body.password, 10);
    const data = {
        email:req.body.newemail,
        name:req.body.newname,
        password:HashPassword,
        token:"xyz",
    }
    await Adminschema.insertMany([data]);
    res.send("<script> alert('New Admin Added Succesfully'); window.location = '/Admin/home' </script>")
  });  

router.get("/login",async (req, res) =>{
    if(req.cookies.Admin) res.redirect("/Admin/home")
    else  res.render("Adminlogin.hbs");
});

router.get("/logout",async (req,res)=>{
    try {
        if(req.cookies.Admin){

         res.clearCookie("Admin");
         res.send("<script> alert('logged out succesfully'); window.location = '/Admin/login' </script>")

        }else{

        res.send("<script> alert('You are no longer logged in'); window.location = '/Admin/login' </script>")

        }
        //  res.render('login.hbs');
    } catch (error) {
         res.status(500).send(error);
    }
});

router.post("/login", [Adminexists], async (req, res) =>{
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

                res.redirect("/Admin/home");

            }
            else
            {
                res.status(400).send('<script>alert("Incorrect Password or Email."); window.location = "/Admin/login";</script>');
            }
});

router.get("/home",[isAdmin],function (req, res) {
    controlAdmin.get(req,res);
  });
  
router.post("/accept/:email",[isAdmin], function (req, res) {
    controlAdmin.post(req,res);
});

router.post("/delete/:email",[isAdmin], function (req, res) {
    controlAdmin.create(req,res);
});

router.get("/company_description/:email",async (req,res)=>{

    const email = req.body.params;

    const check = await Companyregister.findOne({email:email});

    res.send(check);

});

router.get("/changepassword",[isAdmin],async (req,res)=>{
    
    res.render("change_password_Admin.hbs")
})

router.post("/changepassword",[isAdmin],async (req,res)=>{
    

    
    const check = await Adminschema.findOne({ _id: req.id });
    const isMatch = await bcrypt.compare(req.body.currentpassword, check.password);
        

    
        if (!isMatch) {

            
            return res.status(400).send('<script>alert("current password and your password is not matching "); window.location = "/Admin/changepassword";</script>');

            
        } 

        
        if(req.body.Newpassword === req.body.currentpassword) 
        {
            return res.status(400).send('<script>alert("New password and current password are same enter new password"); window.location = "/Admin/changepassword";</script>');

        }

        if(req.body.Newpassword !== req.body.conforimpassword) 
        {
            return res.status(400).send('<script>alert("new password and confirm password is not matching"); window.location = "/Admin/changepassword";</script>');

        }


            
        const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);

        await Adminschema.findOneAndUpdate({_id:req.id},{password:HashPassword});
        res.status(200).send('<script>alert("Password updated successfully."); window.location = "/Admin/home";</script>');

})

module.exports = router;
