const jwt = require("jsonwebtoken");
const Adminschema = require("../models/adminschema");

async function isAdmin(req,res,next){
        if(req.cookies.Admin){
            jwt.verify(req.cookies.Admin,process.env.SECRET_KEY,async(err,decoded)=>{
            if(err)
            {
            return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/Admin/login";</script>');
            }
            else
            {
                const check = await Adminschema.findOne({_id:decoded._id});
                req.body.email = check.email;
                
                if(check.email)
                next();
            }
            });
    }else{
    res.status(400).send('<script> alert("You have to login As a Admin first."); window.location = "/Admin/login";</script>');
    }
}

module.exports = {isAdmin};