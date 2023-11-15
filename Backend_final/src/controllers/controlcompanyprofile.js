const express = require("express");
const app = express()
const Companyregister = require("../models/companyregisterschema")


module.exports = {

    get:async (req,res)=>{
        
        const data = await Companyregister.findOne({email:req.body.email})
        res.render("companyprofile",{
            companyname : data.companyname,
            companytype : data.companytype,
            companyadd : data.companylocation,
            number : data.number,
            email: data.email,
            des: data.yourdestination,
            name: data.name
        });
    }
}


