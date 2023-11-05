const Register = require("../models/registers");
const {verifyotp} = require("../services/OTPsevices");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

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
                jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
                if(err)
                {

                return res.status(400).send('<script>alert("You have to login first."); window.location = "/login";</script>');

                }
                else
                {   
                    req.body.email = decoded;
                }
                        });
    }else{

     return res.status(400).send('<script>alert("You have to login first."); window.location = "/login";</script>');

    }

next ();

}

async function otpauth(req , res , next){

    const {id} = req.params;

    if(!verifyotp(id ,req.body.receivedotp)){

        return res.status(400).send('<script>alert("you have entered wrong otp."); window.location ="/forgotpass" </script>');

        }

        if(req.body.Newpassword != req.body.conforimpassword)
        {

            return res.status(400).send('<script>alert("New password and confrim Password Is Not matching."); window.location ="/forgotpass" </script>');

        }


    next ();

}

async function registerauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location ="/register" </script>');

        }


    next ();

}

module.exports = {registerauth , otpauth , loggedinonly , Emailauth , alredyregisterauth};