const express = require("express");
const app = express()
const Savedpost = require('../models/savePostSchema');
const Register = require('../models/registers');

module.exports = {

    post:async(req,res)=>{
        try{
            // if(req.cookies.jwt){
            // console.log("I am here delete"); 
          //  const verify = jwt.verify(req.cookies.jwt,process.env.SECRET_KEY);
            // console.log(verify);
               const data = await Register.findOne({email:req.body.email});
               const check2 = await Savedpost.findOne({job_id:req.body.id, job_seekerid:data._id})
              
               if(await Savedpost.findOne({job_id:req.body.id, job_seekerid:data._id}).count() == 1)
               {
               //const data = await registerData.findOne({_id:verify._id});    
               // console.log(`Jobseeker name ${data.name} and Job id is ${check2.job_id}`);
                 await Savedpost.deleteOne(check2);
                 console.log("Delete from save list !")
               }
               else
               {
                 console.log("Not into the saved list !")   
               }
          }
          catch(err)
          {
              res.send(err)
          }
    },
   
}