const Register = require("../models/jobseekers");
const jwt = require("jsonwebtoken");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();
const Companyregister = require("../models/companyregisterschema");


async function alredyregisterauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length){

        return res.status(400).send('<script>alert("You have already registered."); window.location ="/login" </script>');

        }

    else{


    next ();



    }

}

async function Emailauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("Entered Email id is not registed Enter a registered Email id."); window.location ="/forgotpass" </script>');

        }

    else{


    next ();

    }

}

async function companyEmailauth(req , res , next){

    // console.log(req.body.Email);
 
     const v = await Companyregister.find({email:req.body.email});
 
     if(v.length==0){
 
         return res.status(400).send('<script>alert("Entered Email id is not registed Enter a registered Email id."); window.location ="/forgotpass/company" </script>');
 
         }
 
     else{
 
 
     next ();
 
     }
 
 }

async function loggedinonly(req , res , next){

    
    if(req.cookies.jwt){
                jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
                if(err)
                {
                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
                }
                else
                {
                    if(decoded.flag === true){
                        res.status(400).send('<script> alert("You have to login first."); window.location = "/login";</script>');
                    }
                    else{
                    const check = await Register.findOne({_id:decoded._id});
                    req.body.email = check.email;
                    
                    if(check.email)
                       next();
                    }
                }
                });
    }else{
        res.status(400).send('<script> alert("You have to login first."); window.location = "/login";</script>');
    }

}

async function registerauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location ="/register" </script>');

        }

    else{


    next ();

    }

}

async function verifyauth(req , res , next){

    // console.log(req.body.Email);
 
     const v = await Register.findOne({email:req.body.email});
 
     if(v.verified===false){
 
         return res.status(400).send('<script>alert("You have not Verified go to email and first verify after that do a login."); window.location ="/login" </script>');
 
         }

    else{
 
 
     next ();

    }
 
 }


 async function companyalredyregisterauth(req, res, next) {

   

    const v = await Companyregister.find({ email: req.body.email });
    if (v.length) {
        return res.status(400).send('<script>alert("You have already registered."); window.location ="/companylogin" </script>');
    }
    else{

        next();
    }

}

async function companyverifyauth(req, res, next) {

    // console.log(req.body.Email);

    const v = await Companyregister.findOne({ email: req.body.email });

    if (v.verified === false) {

        return res.status(400).send('<script>alert("You have not Verified go to email and first verify after that do a login."); window.location ="/companylogin" </script>');

    }

    else{

        next();

    }

}

async function companyregisterauth(req, res, next) {

    // console.log(req.body.Email);

    const v = await Companyregister.find({ email: req.body.email });

    if (v.length == 0) {

        return res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location ="/companyregister" </script>');

    }
    else{

        next();

    }

}

async function companyloggedinonly(req, res, next) {
    
    if (req.cookies.company) {
        jwt.verify(req.cookies.company, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {

                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/companylogin";</script>');

            }
            else {
                if(decoded.flag === false){
                    return res.status(400).send('<script>alert("You have to login first."); window.location = "/companylogin";</script>');
                }else{
                const check = await Companyregister.findOne({ _id: decoded._id });

                req.body.email = check.email;
                req.body.company_name=check.companyname;
                req.body.profile = check.profile;

                if(check.email && check.companyname && check.companyname) next();
                }
            }
        });
    } else {

        return res.status(400).send('<script>alert("You have to login first."); window.location = "/companylogin";</script>');

    }


   
}

async function Adminpermission(req,res,next){

    const check = await Companyregister.findOne({email:req.body.email});

    if(check.permission === true){

        next();

    }else{

    return res.status(400).send('<script>alert("wait some time after verification complete you got a mail after you are able to login."); window.location = "/companylogin";</script>');

    }
}

module.exports = {registerauth ,
    loggedinonly ,
    Emailauth ,
    alredyregisterauth ,
    verifyauth,
    companyEmailauth,
    companyalredyregisterauth,
    companyregisterauth , 
    companyverifyauth,
    companyloggedinonly,
    Adminpermission,
    };