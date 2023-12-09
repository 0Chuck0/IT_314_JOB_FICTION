const express = require("express");
const router = express.Router();
const app = express()
// const {Emailauth, companyEmailauth} = require("../middlewares/auth");
// const controlforgotpass = require("../controllers/controlforgotpass");
// const changepassword = require("../controllers/changepassword");
// const controlcompanyforgotpass = require("../controllers/controlcompanyforgotpass");
// const companychangepassword = require("../controllers/companychangepassword");
const  change_current_password = require("../controllers/change_current_password");
const Register = require("../models/jobseekers");
const jwt = require("jsonwebtoken");
const cookieParser=require("cookie-parser");
app.use(cookieParser());
require("dotenv").config();
const Companyregister = require("../models/companyregisterschema");



router.get("/", function (req, res) {


    if (req.cookies.company) {
        jwt.verify(req.cookies.company, process.env.SECRET_KEY, async (err, decoded) => {
            if (err) {

                return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/companylogin";</script>');

            }
            else {
                if(decoded.flag === false){
                    return res.status(400).send('<script>alert("You have to login first."); window.location = "/companylogin";</script>');
                }else{
                const check = await Companyregister.findOne({ _id: decoded._id });

                req.body.email = check.email;
                req.body.company_name=check.companyname;
                req.body.profile = check.profile;
                req.who=1;
                req.id=decoded._id
                if(check.email && check.companyname && check.companyname)
                change_current_password.get(req, res);
                }
            }
        });
    }
    else if(req.cookies.jwt){
        jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
        if(err)
        {
        return res.status(400).send('<script>alert("Cookies decoding Error."); window.location = "/login";</script>');
        }
        else
        {
            if(decoded.flag === true){
                res.status(400).send('<script> alert("You have to login first."); window.location = "/login";</script>');
            }
            else{
            const check = await Register.findOne({_id:decoded._id});
            req.body.email = check.email;
            req.who=2
            req.body.profile=check.profile
            req.body.name=check.name
            req.id=decoded._id
            if(check.email)
            change_current_password.get(req, res);
            }
        }
        });
} 
    else {

        return res.status(400).send('<script>alert("You have to login first."); window.location = "/";</script>');

    }
    
  });
  
// router.get("/:token", function (req, res) {
//   changepassword.get(req, res);
// });

// router.post("/:token", function (req, res) {
//   changepassword.post(req, res);
// });
// router.get("/", function (req, res) {
//   controlforgotpass.get(req, res);
// });

router.post("/:who/:id", function (req, res) {
    change_current_password.post(req, res);
});

module.exports = router;
