const Register  = require("../models/registers");
const bcrypt    = require("bcryptjs");
const jwt =        require("jsonwebtoken"); 

module.exports = {

    get:async (req,res)=>{

        res.render("register");

    },
    post:async(req,res)=>{
        try { 

                const data = req.body;

                if(req.body.password===req.body.cpassword){

                const HashPassword  = await bcrypt.hash(req.body.password , 10);
       
                data.password = HashPassword;

                data.token = 'dummy';

                await Register.insertMany([data]);
        
                const checking = await Register.findOne({email:req.body.email});
        
                const id = checking._id.toString();
        
                const token = jwt.sign({_id:id},process.env.SECRET_KEY);
        
                await Register.updateOne({_id:id},{$set:{token:token}});
                
                res.render("Login")

                }else{
                        res.send("Passwords are not matching");
                 }

            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    }
}