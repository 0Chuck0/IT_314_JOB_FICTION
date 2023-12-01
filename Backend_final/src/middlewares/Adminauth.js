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
                req.body.name = check.name;
                req.body.email = check.email;
                
                if(check.email)
                next();
            }
            });
    }else{
    return res.status(400).send('<script> alert("You have to login As a Admin first."); window.location = "/Admin/login";</script>');
    }
}

async function Adminexists(req,res,next){

    const check = await Adminschema.findOne({email:req.body.email});

    if(check === null){
        return res.status(400).send('<script> alert("Email is not Registered As Admin."); window.location = "/Admin/login";</script>');
    }else{
        next();
    }

}

module.exports = {isAdmin,Adminexists};