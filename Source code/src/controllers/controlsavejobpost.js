const express = require("express");
const app = express()
const Register = require("../models/registers");
const Jobpost = require("../models/postschema")
const Savedpost = require('../models/savePostSchema');

module.exports = {

    post:async (req,res)=>{

        try{
            // if(req.cookies.jwt){
            // console.log("I am here");
            //console.log(verify); 
            //console.log(await Savedpost.find({job_id:req.body.id}).count());
            // const check = await Jobpost.findOne({job_id:req.body.id})
            const data = await Register.findOne({email:req.body.email});

            if(await Savedpost.find({email:data.email,job_id:req.body.id}).count() == 0)
            {
             //console.log(`Jobseeker name ${data.name} and Job id is ${check.job_id} ${verify._id}`);
             //console.log(req.user_id);
             const myData = new Savedpost({
                  job_id : req.body.id,
                  email : data.email,
              })
                
              await Savedpost.insertMany([myData])
              console.log("Added to the save list !")
             }
             else
             {
              console.log("already Added into the save list !")  
             }
            }
            catch(err)
            {
                console.log(err);
            }
    
    },
   
}