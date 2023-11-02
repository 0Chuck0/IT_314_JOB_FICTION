const OTPdata  = require("../models/OTPdata");
const bcrypt  = require("bcryptjs");
const Register = require("../models/registers");


module.exports = {
    
    get:async (req,res)=>{

        
        const {id} = req.params;
        
       // console.log(id);


        res.render("forgotpass2",{id:id});


    },

    post:async (req,res)=>{

        try{
                const {id} = req.params;

                await OTPdata.findOneAndDelete({email:id});
                const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);
                await Register.findOneAndUpdate({email:id},{password:HashPassword});

                res.status(400).send('<script>alert("Password updated successfully."); window.location = "/login";</script>');
    
        }
    
        catch(err){
    
            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");
    
        }
    
    }

}