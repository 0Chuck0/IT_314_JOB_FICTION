const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');

module.exports = {
    
    post:async (req,res)=>{
        
        if(req.cookies.jwt){
            jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
            if(err)
            {
              res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
            }
            else
            {
                const check = await Register.findOne({_id:decoded._id});
                req.body.email = check.email;
                
                const data = await Register.findOne({email:req.body.email});
             
                if(await Savedpost.findOne({job_id:req.body.id, job_seekerid:data._id}).count() == 1)
                {
                   res.render("job_description",{jobid : req.body.id,how: "fa-solid"})
                }
                else
                {
                  res.render("job_description",{jobid : req.body.id,how: "fa-regular"})
                }
            }
            });
        }
        else
        {
           res.render("job_description",{jobid : req.body.id,how: "fa-regular"})
        }
    }
}