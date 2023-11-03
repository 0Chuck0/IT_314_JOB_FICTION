
const {sendotp} = require("../services/OTPsevices");

module.exports = {

    get:async (req,res)=>{

        res.render("forgotpass");

    },
    post:async (req,res)=>{

        try{
    
            sendotp(req.body.email);
    
            res.render("forgotpass2",{id:req.body.email});
    
        }
    
        catch(err){
    
            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");
    
        }
    
    }

}