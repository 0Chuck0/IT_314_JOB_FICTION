const bcrypt  = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Companyregister = require("../models/companyregisterschema");

module.exports = {

    get:async (req,res)=>{

        const {token} = req.params;

        res.render("companyforgotpass2.hbs",{token:token});

    },
    post:async (req,res)=>{

        try{

                                if(req.body.Newpassword !== req.body.conforimpassword) throw new Error("new password and confirm password is not matching");

                                const {token} = req.params;

                                let id = "";

                                jwt.verify(token,process.env.SECRET_KEY,async(err,decoded)=>{
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

                                await Companyregister.findOneAndUpdate({_id:id},{password:HashPassword});


                                res.status(400).send('<script>alert("Password updated successfully."); window.location = "/companylogin";</script>');
    
        }
    
        catch(err){

            res.status(400).send(`<script>alert("${err}."); window.location = "/login";</script>`);
    
        }
    
    }

}