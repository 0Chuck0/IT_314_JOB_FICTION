const Register  = require("../models/registers");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
const { sendEmail } = require("../services/mailer");
const { RegisterVerify } = require("../services/mailtemplates");
require('dotenv').config()

module.exports = {

    get:async (req,res)=>{

        res.render("register.hbs");

    },
    post:async(req,res)=>{
        try { 

                // if(req.file === undefined) return res.send("you must select a file");

                const imgUrl = `http://localhost:3000/file/`;

                const data = Object.create(Object.prototype, Object.getOwnPropertyDescriptors(req.body));

                console.log(data)

                if(req.body.password===req.body.cpassword){

                const HashPassword  = await bcrypt.hash(req.body.password , 10);
                
                delete data.cpassword;
       
                data.password = HashPassword;

                data.token = 'dummy';

                data.verified = false;

                data.profile = imgUrl ;

                await Register.insertMany([data]);
        
                const checking = await Register.findOne({email:req.body.email});
        
                const id = checking._id;
        
                const token = jwt.sign({_id:id , flag:false },'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');
        
                await Register.updateOne({_id:id},{$set:{token:token}});

                const url =`http://localhost:3000/register/${token}`;

                const firstname  = data.name;

                sendEmail(req.body.email , "Registration-Verication" , RegisterVerify(url,firstname));

                res.status(400).send('<script>alert("Verification link is sent to your mail please verify and after that do a login."); window.location = "/login";</script>');
                
                //res.render("Login")

                }else{

                res.status(400).send('<script>alert("password and confrim password is not matching."); window.location = "/register";</script>');

                 }

            }
            
            catch (error) {
            res.status(400).send(`${error}`);
        }
    
    },









    
    create: async(req,res) =>{

        try{

        const {token} = req.params;

        let id = "";

        jwt.verify(token,'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa',async(err,decoded)=>{
            if(err)
            {

            res.status(400).send('<script>alert("You have not registred first register."); window.location = "/register";</script>');

            }
            else
            {
                id = decoded._id;
            }
        });

        await Register.findOneAndUpdate({_id:id},{verified:true});

        res.status(400).send('<script>alert("Verified succesfully now you can login."); window.location = "/login";</script>');

    }

    catch(err){

        console.log(err);

        res.status(400).send('<script>alert("fatal error."); window.location = "/login";</script>');
        
    }

    }
}