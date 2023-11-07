const Register = require("../models/registers");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

async function alredyregisterauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length){

        return res.status(400).send('<script>alert("You have already registered."); window.location ="/login" </script>');

        }


    next ();

}

async function Emailauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("Entered Email id is not registed Enter a registered Email id."); window.location ="/forgotpass" </script>');

        }


    next ();

}

async function loggedinonly(req , res , next){

    if(req.cookies.jwt){
                jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
                if(err)
                {
                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
                }
                else
                {
                    const check = await Register.findOne({_id:decoded._id});
                    req.body.email = check.email;
                    
                    if(check.email)
                       next();

                }
                });
    }else{
       return res.status(400).send('<script> alert("You have to login first."); window.location = "/login";</script>');
    }

}

async function registerauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location ="/register" </script>');

        }


    next ();

}

async function verifyauth(req , res , next){

    // console.log(req.body.Email);
 
     const v = await Register.findOne({email:req.body.email});
 
     if(v.verified===false){
 
         return res.status(400).send('<script>alert("You have not Verified go to email and first verify after that do a login."); window.location ="/login" </script>');
 
         }
 
 
     next ();
 
 }

module.exports = {registerauth ,loggedinonly , Emailauth , alredyregisterauth , verifyauth};