const bcrypt  = require("bcryptjs");
const Register = require("../models/registers");
const jwt = require("jsonwebtoken");

module.exports = {

    get:async (req,res)=>{

        const {token} = req.params;

<<<<<<< HEAD
        res.render("forgotpass2",{token:token});
=======
        res.render("forgotpass2.hbs",{token:token});
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

    },
    post:async (req,res)=>{

        try{

                                if(req.body.Newpassword !== req.body.conforimpassword) throw new Error("new password and confirm password is not matching");

                                const {token} = req.params;

                                let id = "";

<<<<<<< HEAD
                                jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
=======
                                jwt.verify(token,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
                                    if(err)
                                    {

                                    res.status(400).send('<script>alert("You have not registred first register."); window.location = "/register";</script>');

                                    }
                                    else
                                    {
                                        id = decoded._id;
                                    }
                                });

                                
                                const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);

                                await Register.findOneAndUpdate({_id:id},{password:HashPassword});


                                res.status(400).send('<script>alert("Password updated successfully."); window.location = "/login";</script>');
    
        }
    
        catch(err){

            res.status(400).send(`<script>alert("${err}."); window.location = "/login";</script>`);
    
        }
    
    }

}