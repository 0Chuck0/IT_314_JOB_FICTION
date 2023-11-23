
const {sendEmail} = require("../services/mailer");
const Register = require("../models/registers");

module.exports = {

    get:async (req,res)=>{

        res.render("forgotpass.hbs");

    },
    post:async (req,res)=>{

        try{

            const check = await Register.findOne({email:req.body.email});
            
            const token = check.token;
    
            const message =`<h1> http://localhost:3000/forgotpass/${token} <h1>`;

            sendEmail(req.body.email,"Set up new password",message);
    
            res.status(400).send('<script>alert("Set up newpassword link sent ,setup and after that do a login."); window.location = "/login";</script>');
    
        }
    
        catch(err){
    
            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");
    
        }
    
    }

}