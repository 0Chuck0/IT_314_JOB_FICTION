const Companyregister  = require("../models/companyregisterschema");
const emailValidator = require('email-validator');
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

            // console.log(req.body)
            // const { password, email } = req.body;
            // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // const emailRegexNotupper = /^[^A-Z]+@[^\s@]+\.[^\s@]+$/;
            // const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,15}$/;
            // if (!emailRegexNotupper.test(email)) {
            //     return res.status(400).json({ error: 'Invalid email format. Uppercase letters are not allowed in the local part' });
            // }
            // if (!email) {
            //     return res.status(400).json({ error: 'Email is required' });
            // }
            // if (!password) {
            //     return res.status(400).json({ error: 'Password is required' });
            // }
            // if (!passwordPattern.test(password)) {
            //     return res.status(400).json({
            //         error: 'Invalid password. Please ensure it has at least 8 characters, at most 15 characters, at least one number, at least one uppercase letter, at least one lowercase letter, and at least one special character.'
            //     });
            // }
            // if (!emailValidator.validate(email)) {
            //     return res.status(400).json({ error: 'Invalid email format' });
            // }
            // if (!emailRegex.test(email)) {
            //     return res.status(400).json({ error: 'Invalid email format' });
            // }

            

    
            const check = await Companyregister.findOne({email:req.body.email})
            const match = await bcrypt.compare(req.body.password,check.password);
            
            if(match)
            {

                res.cookie("company",check.token,{
                    maxAge:1800000,
                    httpOnly:true,
                    secure:false,
                });


                // return res.status(200).json({ error: 'Valid All format' });

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


