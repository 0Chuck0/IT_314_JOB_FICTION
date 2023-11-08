const express = require("express");
const app = express()
const Register = require("../models/registers")
const jwt = require("jsonwebtoken");
//const express = require("express");
///const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();

module.exports = {

    get:async (req,res)=>{
        
        
        res.render("edit_profile");
    },

    post:async(req,res)=>{
        try { 
  
                // const data = req.body;

                // if(req.body.password===req.body.cpassword){

                // const HashPassword  = await bcrypt.hash(req.body.password , 10);
                
                // delete data.cpassword;
       
                // data.password = HashPassword;

                // data.token = 'dummy';

                // data.verified = false;

                // await Register.insertMany([data]);
        
                // const checking = await Register.findOne({email:req.body.email});
        
                // const id = checking._id;
        
                // const token = jwt.sign({_id:id},'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');
        
                // await Register.updateOne({_id:id},{$set:{token:token}});

                // const message =`<h1> http://localhost:3000/register/${token} <h1>`;

                // sendEmail(req.body.email,"Registration Verification",message);

                // res.status(400).send('<script>alert("Verification link is sent to your mail please verify and after that do a login."); window.location = "/login";</script>');
                
                // //res.render("Login")

                // }else{

                // res.status(400).send('<script>alert("password and confrim password is not matching."); window.location = "/register";</script>');

                //  }

                jwt.verify(req.cookies.jwt,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
                    if(err)
                    {
                    return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
                    }
                    else
                    {
                         const check = await Register.findOne({_id:decoded._id});
                         console.log(check);

                        const userId = decoded._id;

                        const updateData = {
                            language_skills: req.body.language_skills,
                            technical_skills: req.body.technical_skills,
                            resume_link: req.body.resume_link,
                            experience: req.body.experience,
                            project: req.body.project,
                            class12: req.body.class12,
                            class10: req.body.class10,
                            college: req.body.college,
                            highest_edu: req.body.highest_edu,
                            field: req.body.field
                          };
                        console.log(updateData);
                          await Register.findOneAndUpdate({ _id: userId }, updateData);
                        //   , (err, result) => {
                        //     if (err) {
                        //       console.error(err);
                        //       res.status(500).send('Error updating user');
                        //     } else {
                        //       res.send('User updated successfully');
                        //     }
                        //   });
                        
                        // if(check.email)
                        //    next();
    
                    }
                    });
                res.render("home");




            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    }
}