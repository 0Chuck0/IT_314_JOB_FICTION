const {Register} = require("../models/registers");

async function registerauth(req , res , next){

    //console.log(req.body);

    if(await Register.find({email:req.body.Email}).count()==0){

       return  res.status(400).send('<script>alert("You are not Registed first you have to registered."); window.location="/register"  </script>');

        }


    next ();

}

module.exports = {registerauth};