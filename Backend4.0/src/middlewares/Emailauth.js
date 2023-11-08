const {Register} = require("../models/registers");

async function Emailauth(req , res , next){

    //console.log(req.body);

    if(await Register.find({email:req.body.Email}).count()==0){

       return  res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location="/forgotpass"  </script>');

        }

        if(await OTPdata.find({Email:req.body.Email}).count()){

            await OTPdata.findOneAndDelete({Email:req.body.Email});

            
    
        }


    next ();

}

module.exports = {Emailauth};