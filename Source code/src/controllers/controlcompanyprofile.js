const express = require("express");
const app = express()
const Companyregister = require("../models/companyregisterschema")


module.exports = {

    get:async (req,res)=>{
        const data = await Companyregister.findOne({email:req.body.email})
        console.log(data);
        res.render("companyprofile.hbs",data);
    }
}


