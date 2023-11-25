
const {sendEmail} = require("../services/mailer");
const { resetPassword } = require("../services/mailtemplates");
const Companyregister = require("../models/companyregisterschema");

module.exports = {

    get:async (req,res)=>{

        res.render("companyforgotpass.hbs");

    },
    post:async (req,res)=>{

        try{

            const check = await Companyregister.findOne({email:req.body.email});
            
            const token = check.token;
    
            const url =`http://localhost:3000/forgotpass/company/${token}`;

            const firstname = check.employee_name;

            sendEmail(req.body.email,"Set up new password",resetPassword(url,firstname));
    
            res.status(400).send('<script>alert("Set up newpassword link sent ,setup and after that do a login."); window.location = "/companylogin";</script>');
    
        }
    
        catch(err){
    
            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");
    
        }
    
    }

}