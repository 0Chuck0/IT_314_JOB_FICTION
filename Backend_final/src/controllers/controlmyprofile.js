const express = require("express");
const app = express()
const Register = require("../models/registers")


module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        res.render("myprofile",{
            profilename : data.name,
            profileEmail : data.email,
            profilenumber : data.number,
            profilegender : data.gender,
            profileDOB : data.DOB
        });
    }
}