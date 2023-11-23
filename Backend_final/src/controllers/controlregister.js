const Register  = require("../models/registers");
<<<<<<< HEAD
const bcrypt    = require("bcryptjs");
const jwt =        require("jsonwebtoken"); 
=======
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken"); 
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
require('dotenv').config()

const {sendEmail} = require("../services/mailer");

module.exports = {

    get:async (req,res)=>{

<<<<<<< HEAD
        res.render("register");
=======
        res.render("register.hbs");
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40

    },
    post:async(req,res)=>{
        try { 

<<<<<<< HEAD
=======
                if(req.file === undefined) return res.send("you must select a file");

                const imgUrl = `http://localhost:3000/file/${req.file.filename}`;

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
                const data = req.body;

                if(req.body.password===req.body.cpassword){

                const HashPassword  = await bcrypt.hash(req.body.password , 10);
                
                delete data.cpassword;
       
                data.password = HashPassword;

                data.token = 'dummy';

                data.verified = false;

<<<<<<< HEAD
=======
                data.profile = imgUrl ;

>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
                await Register.insertMany([data]);
        
                const checking = await Register.findOne({email:req.body.email});
        
                const id = checking._id;
        
<<<<<<< HEAD
                const token = jwt.sign({_id:id},process.env.SECRET_KEY);
=======
                const token = jwt.sign({_id:id , flag:false },'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
        
                await Register.updateOne({_id:id},{$set:{token:token}});

                const message =`<h1> http://localhost:3000/register/${token} <h1>`;

                sendEmail(req.body.email,"Registration Verification",message);

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
<<<<<<< HEAD
=======









    
>>>>>>> 9c5b061c5b09c8be6ca4241e1cab9b354da5ca40
    create: async(req,res) =>{

        try{

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

        await Register.findOneAndUpdate({_id:id},{verified:true});

        res.status(400).send('<script>alert("Verified succesfully now you can login."); window.location = "/login";</script>');

    }

    catch(err){

        console.log(err);

        res.status(400).send('<script>alert("fatal error."); window.location = "/login";</script>');
        
    }

    }
}