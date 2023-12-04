
const {sendEmail} = require("../services/mailer");
const Register = require("../models/registers");
const { resetPassword } = require("../services/mailtemplates");

module.exports = {

    get:async (req,res)=>{

        res.render("forgotpass.hbs");

    },
    post:async (req,res)=>{

        try{

            const check = await Register.findOne({email:req.body.email});
            
            const token = check.token;
    
            const url =`${process.env.Base_Url}/forgotpass/${token}`;

            const firstname = check.name;

            sendEmail(req.body.email,"Set up new password",resetPassword(url,firstname));
    
            res.status(400).send('<script>alert("Set up newpassword link sent ,setup and after that do a login."); window.location = "/login";</script>');
    
        }
    
        catch(err){
    
            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");
    
        }
    
    }

}