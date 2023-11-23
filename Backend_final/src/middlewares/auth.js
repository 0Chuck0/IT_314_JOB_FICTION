const Register = require("../models/registers");
<<<<<<< HEAD
const jwt =        require("jsonwebtoken");
=======
const jwt = require("jsonwebtoken");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();
<<<<<<< HEAD
=======
const Companyregister = require("../models/companyregisterschema");

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

async function alredyregisterauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length){

        return res.status(400).send('<script>alert("You have already registered."); window.location ="/login" </script>');

        }

<<<<<<< HEAD

    next ();

=======
    else{


    next ();



    }

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
}

async function Emailauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("Entered Email id is not registed Enter a registered Email id."); window.location ="/forgotpass" </script>');

        }

<<<<<<< HEAD

    next ();

=======
    else{


    next ();

    }

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
}

async function loggedinonly(req , res , next){

<<<<<<< HEAD
    if(req.cookies.jwt){
                jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
                if(err)
                {

                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');

=======
    
    if(req.cookies.jwt){
                jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
                if(err)
                {
                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
                }
                else
                {
                    const check = await Register.findOne({_id:decoded._id});
<<<<<<< HEAD

                    req.body.email = check.email;
                }
                });
    }else{

    return res.status(400).send('<script>alert("You have to login first."); window.location = "/login";</script>');

    }


next ();

=======
                    req.body.email = check.email;
                    
                    if(check.email)
                       next();

                }
                });
    }else{
        res.status(400).send('<script> alert("You have to login first."); window.location = "/login";</script>');
    }

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
}

async function registerauth(req , res , next){

   // console.log(req.body.Email);

    const v = await Register.find({email:req.body.email});

    if(v.length==0){

        return res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location ="/register" </script>');

        }

<<<<<<< HEAD

    next ();

=======
    else{


    next ();

    }

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
}

async function verifyauth(req , res , next){

    // console.log(req.body.Email);
 
     const v = await Register.findOne({email:req.body.email});
 
     if(v.verified===false){
 
         return res.status(400).send('<script>alert("You have not Verified go to email and first verify after that do a login."); window.location ="/login" </script>');
 
         }
<<<<<<< HEAD
 
 
     next ();
 
 }

module.exports = {registerauth ,loggedinonly , Emailauth , alredyregisterauth , verifyauth};
=======

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
    
    if (req.cookies.jwt) {
        jwt.verify(req.cookies.jwt, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa', async (err, decoded) => {
            if (err) {

                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/companylogin";</script>');

            }
            else {
                const check = await Companyregister.findOne({ _id: decoded._id });

                req.body.email = check.email;
                req.body.company_name=check.companyname;

                if(check.email) next();
            }
        });
    } else {

        return res.status(400).send('<script>alert("You have to login first."); window.location = "/companylogin";</script>');

    }


   
}

module.exports = {registerauth ,
    loggedinonly ,
    Emailauth ,
    alredyregisterauth ,
    verifyauth,
    companyalredyregisterauth,
    companyregisterauth , 
    companyverifyauth,
    companyloggedinonly
    };
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
