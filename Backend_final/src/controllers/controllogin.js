<<<<<<< HEAD
const Register  = require("../models/registers");
const bcrypt    = require("bcryptjs");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
=======
const Register = require("../models/registers");
const bcrypt = require("bcryptjs");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
const jobs = require("../models/jobs");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
app.use(cookieParser());

module.exports = {

    get:async (req,res)=>{

<<<<<<< HEAD
        res.render("login");
=======
        res.render("login.hbs");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

    },
    post: async(req,res)=>{
        try{
    
            const check = await Register.findOne({email:req.body.email})
            const match = await bcrypt.compare(req.body.password,check.password);
            
            if(match)
            {

                res.cookie("jwt",check.token,{
<<<<<<< HEAD
                    maxAge:300000,
=======
                    maxAge:1800000,
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
                    httpOnly:true,
                    secure:false,
                });

<<<<<<< HEAD
                res.render("home"); 
=======
                const data = await jobs.find();

                res.render("home.hbs",{data:data , logged:true}); 
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

            }
            else
            {
                 res.status(400).send('<script>alert("Incorrect Password or Email."); window.location = "/login";</script>');
            }
        }
        catch (error)
        {
            res.status(400).send('<script>alert("Fatal Error."); window.location = "/login";</script>');
        }
    }
}