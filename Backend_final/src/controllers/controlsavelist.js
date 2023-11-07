const express = require("express");
const app = express()
const Register = require("../models/registers")
const Savedpost = require("../models/savePostSchema")

module.exports = {

    get:async (req,res)=>{
        
        const data = await Register.findOne({email:req.body.email})
        const listdata = await Savedpost.find({job_seekerid:data._id});

        res.render("",{});
    }
}