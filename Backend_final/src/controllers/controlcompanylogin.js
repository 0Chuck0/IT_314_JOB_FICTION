const Companyregister  = require("../models/companyregisterschema");
const bcrypt    = require("bcryptjs");
const express = require("express");
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

module.exports = {

    get:async (req,res)=>{

        if(req.cookies.company){
            res.redirect("/companyhomepage");
        }
        else
        res.render("companylogin.hbs");

    },
    post: async(req,res)=>{
        try{
    
            const check = await Companyregister.findOne({email:req.body.email})
            const match = await bcrypt.compare(req.body.password,check.password);
            
            if(match)
            {

                res.cookie("company",check.token,{
                    maxAge:1800000,
                    httpOnly:true,
                    secure:false,
                });

                res.redirect("/companyhomepage"); 

            }
            else
            {
                res.status(400).send('<script>alert("Incorrect Password or Email"); window.location = "/companylogin";</script>');
            }
        }
        catch (error)
        {
            res.status(400).send('<script>alert("Fatal Error."); window.location = "/companylogin";</script>');
        }
    }
}


