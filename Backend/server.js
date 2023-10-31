const express = require("express");
const bodyparser = require("body-parser");
const path = require("path")
const hbs = require("hbs")
const cors = require("cors");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodoverride = require("method-override");
const crypto = require("crypto");
const {collection,collection2,Job} = require("./mongodb")
const nodemailer  =require("nodemailer")

const Handlebars = require("handlebars");
const jwt =        require("jsonwebtoken");
const cookieParser=require("cookie-parser");
require('dotenv').config()

const partialpath = path.join(__dirname,"/partials");
hbs.registerPartials(partialpath);

const errorredirect = "<a href =\"/Register\"> <br> click here to go to Registration Page <br></a>\
<a href =\"/Login\"> <br> click here to go back to Login Page <br></a>\
<a href =\"/forgotpass\"> <br> click here to go back to FOrgotpassword Page <br></a>\
";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.set("view engine", "hbs");
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));

app.use(bodyparser.json());
app.use(methodoverride('_method'));


async function main(toemail,sub,messsage){

    const transporter = await nodemailer.createTransport({
        host: 'smtp.gmail.email',
        port: 587,
        secure:false,
        service: 'Gmail',
        auth: {
            user: process.env.user,
            pass: process.env.pass,
        }
    });

    const info = await transporter.sendMail({

        from:process.env.user,
        to:toemail,
        subject:sub,
        html:messsage,

    });
}
app.get("/exp",(req,res)=>{
    
    var tdata = [
        {
        hewllow: "how are you",
        check1: "on"
    },
    {
        hewllow: "how",
        check1: "off"
    }
]
    
    // res.send("views/exp.html");
    res.sendFile(path.join(__dirname+'/views/exp.html'));
})

app.get("/", (req, res) => {
    
        if(req.cookies.jwt){
        jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
        if(err)
        {  
          console.log(err)
          return res.json({Status: "You have to login first"})
        }
        else
        {
                        console.log(decoded);
                        res.render("home")
        }
    });
}else{
    return res.json({Status: "You have to login first"})
}
})

app.get("/Login", (req, res) => {
    res.render("Login")
})
app.get("/Register", (req, res) => {
    res.render("Register")
})

app.get("/jobs_main", (req, res) => {

    // if(req.cookies.jwt){
    // jwt.verify(req.cookies.jwt,process.env.SECRET_KEY,async(err,decoded)=>{
    //     if(err)
    //     {  
    //       console.log(err)
    //       return res.json({Status: "You have to login first"})
    //     }
    //     else
    //     {
        res.sendFile(path.join(__dirname+'/views/jobs_main.html'));
            // res.render("jobs_main")

        // }
    // });
// }else res.send("error");
}
)

app.get("/forgotpass", (req, res) => {
    res.render("forgotpass")
})
app.get("/forgotpass2", (req, res) => {
    res.render("forgotpass2")
})


app.post("/jobs_main",async (req,res)=>{


    try{


                        const requestedTitle = req.body.search;

                            //console.log(req.body);
                            var data1="x"
                            var data2="y"
                            var data3="z"
                            if(req.body.Location1==undefined && req.body.Location2==undefined && req.body.Location3==undefined){

                                data1 = "Pune"
                                data2 = "Hyderabad"
                                data3 = "Bangalore"

                            }else{

                                if(req.body.Location1 != undefined) data1 = req.body.Location1
                                if(req.body.Location2 != undefined) data2 = req.body.Location2
                                if(req.body.Location3 != undefined) data3 = req.body.Location3
                            }
                            var workmode=[]
                            if(req.body.work_mode == undefined){

                                workmode=['Office','Remote','Hybrid']

                            }else{

                                workmode=[req.body.work_mode]
                            }
                            const filter = {
                                $and: [
                                { work_mode:{$in:workmode}},
                                { experience: { $lte: req.body.expyear}},
                                { location:{$in:[data1,data2,data3]}},
                                ],
                                }


                            const data = await Job.find(filter).exec();

                            

                            res.json(data);
                            // res.send(data);
                            // Fetch job data based on the requested title using await
                            //const jobsData = await Job.find({ title: requestedTitle }).exec();
                        // res.json(jobsData); // Pass the fetched data to the 'jobs.hbs' template

        }
        catch(err){
            res.send(err);
        }
            

});

app.post("/Login", async (req,res)=>{

    try{

        if(await collection.find({Email:req.body.Email}).count() == 0){

            throw new Error("Email Adress is Not registered <br> <a href =\"/Login\"> <br> click here to go back to Login Page <br></a>");

            // document.getElementById('emailerror').innerHTML="*** Invalied email address ***";

        }
         
        const check = await collection.findOne({Email:req.body.Email});
        const match = await bcrypt.compare(req.body.Password,check.Password);

        if(match){
            res.cookie("jwt",check.token,{
                maxAge:300000,
                httpOnly:true,
            });
            res.render("Home");
        }else{
            throw new Error("incorrect Password <br> <a href =\"/Login\"> <br> click here to go back to Login Page <br></a>");
        }
    }
    catch(err){
        res.send(`${err}`+"<a href =\"/Register\"> <br> click here to go back to Registration Page <br></a>");
    }
    })

app.post("/Register", async (req,res)=>{

    try{

            if(await collection.find({Email:req.body.Email}).count()){

            throw new Error("Enter Email Adreess is alredy Registerd");

            // document.getElementById('emailerror').innerHTML="*** Invalied email address ***";

             }
        
        // if(validator.isEmpty(req.body.Mobileno(req.body.Mobileno)));

        
        // const HashPassword  = await bcrypt.hash(req.body.Password , 10);


        const data = req.body;

         const HashPassword  = await bcrypt.hash(req.body.Password , 10);

         data.Password = HashPassword;
         data.token = 'dummy';

        await collection.insertMany([data])

        const checking = await collection.findOne({Email:req.body.Email});

        const id = checking._id.toString();

        const token = jwt.sign({_id:id},process.env.SECRET_KEY);

        await collection.updateOne({_id:id},{$set:{token:token}});

        res.render("Login");

    }
    catch(err){


        res.send(`${err}`+"<a href =\"/Register\"> <br> click here to go back to Registaration Page <br></a>");

    }

})



app.post("/forgotpass", async (req,res)=>{


        try{

            if(await collection.find({Email:req.body.Email}).count()==0){

            throw new Error("Entered Email Adreess is Not Registerd");

            }

            if(await collection2.find({Email:req.body.Email}).count()){

                await collection2.findOneAndDelete({Email:req.body.Email});

                
        
            }

            const otp = Math.floor(Math.random()*1000000 + 100000);

            if(otp > 999999) opt -= 100000;

            const Hashotp  = await bcrypt.hash(otp.toString(), 10);

            const data  = {

                Email:req.body.Email,
                otp:Hashotp
            };
   
            await collection2.insertMany([data])

            let htmlmessage = '<h2> Your OTP For verificatoin is ';

            htmlmessage += otp.toString();

            htmlmessage +=' . </h2>';

            main(req.body.Email,'OTP for varificaton',htmlmessage).then(()=>{
                res.render('forgotpass2',{id:req.body.Email});

            })
        }

        catch(err){

            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");

        }

})

app.post("/forgotpass2/:id", async (req,res)=>{

    const {id} = req.params;
    console.log(req.params);

    try{

        if(await collection2.find({Email:id}).count() == 0){

        throw new Error("Entered Email Adress is Not Same as Before Entered Email Adress");

        }
        
        const check = await collection2.findOne({Email:id});
        const match = await bcrypt.compare(req.body.receivedotp,check.otp);

        if(match){

            console.log(req.body);

            if(req.body.Newpassword != req.body.conforimpassword) throw new Error("New password and confrim Password Is Not matching");
            await collection2.findOneAndDelete({Email:id});
            const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);
            await collection.findOneAndUpdate({Email:id},{Password:HashPassword});

            res.status(400).send('<script>alert("Password updated successfully."); window.location = "/login";</script>');

        }else{

            throw new Error("OTP is Not Matched verfication failed");

        }
    }

    catch(err){

        res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");

    }



})

app.post("/exp",async (req,res)=>{
    console.log(req.body);
})


app.listen(5000, () => {
    console.log("port connected");
})