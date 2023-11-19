const express = require("express");
const app = express()
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');
const jobs = require('../models/jobs');

module.exports = {
    
    get:async (req,res)=>{
        
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
             
                if(await Savedpost.findOne({job_id:req.params.id, email:data.email}).count() == 1)
                {
                  if ( 0 === req.params.id.lenght ) {
                    res.send('error');
                  }
                  const job = await jobs.findOne( { id: parseInt(req.params.id) } );
        
                  if ( job ) {
                    res.render("job_description", {job,how: "fa-regular"} )
                  } else {
                    res.send('error');
                  }
                }
                else
                {
                  if ( 0 === req.params.id.lenght ) {
                    res.send('error');
                  }
                  const job = await jobs.findOne( { id: parseInt(req.params.id) } );
        
                  if ( job ) {
                    res.render("job_description", {job,how: "fa-regular"} )
                  } else {
                    res.send('error');
                  }
                }
            }
            });
        }
        else
        {
          if ( 0 === req.params.id.lenght ) {
            res.send('error');
          }
          const job = await jobs.findOne( { id: parseInt(req.params.id) } );

          if ( job ) {
            res.render("job_description", {job,how: "fa-regular"} )
          } else {
            res.send('error');
          }
        }
    }
}