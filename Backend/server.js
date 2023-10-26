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
const {collection,collection2} = require("./mongodb")
const nodemailer  =require("nodemailer")

const mypass='acwgdbjohgfmvlca';

const errorredirect = "<a href =\"/Register\"> <br> click here to go to Registration Page <br></a>\
<a href =\"/Login\"> <br> click here to go back to Login Page <br></a>\
<a href =\"/forgotpass\"> <br> click here to go back to FOrgotpassword Page <br></a>\
";

const app = express();
app.use(express.json());
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
            user: 'dabhidipak6412@gmail.com',
            pass: mypass,
        }
    });

    const info = await transporter.sendMail({

        from:'<dabhidipak6412@gmail.com>',
        to:toemail,
        subject:sub,
        html:messsage,

    });
}

app.get("/Login", (req, res) => {
    res.render("Login")
})
app.get("/Register", (req, res) => {
    res.render("Register")
})

app.get("/", (req, res) => {
    res.send("welcome to my homepage")
})
app.get("/signup", (req, res) => {
    res.render("signup")
})
app.get("/forgotpass", (req, res) => {
    res.render("forgotpass")
})


{/* <button onclick=POST(http://www.example.com/?test=test1&test2=test2)>hello</button> */}

// $("login-button").click(function(){
//     $.post("/Login", function(req, res){
//         console.log(req.body.Email);
//     });
// });


// for redirect using button with js

// let button = document.getElementById('submit-form');

// button.onclick = function(e) {
// 	e.preventDefault();

// 	// Replace localhost and the folder name
// 	// based on your setup
// 	location.href = 'http://localhost/jsredirect/home.html';
// }


app.post("/Login", async (req,res)=>{

    try{

        if(await collection.find({Email:req.body.Email}).count() == 0){

            throw new Error("Email Adress is Not registered <br> <a href =\"/Login\"> <br> click here to go back to Login Page <br></a>");

            // document.getElementById('emailerror').innerHTML="*** Invalied email address ***";

        }
         
        const check = await collection.findOne({Email:req.body.Email});
        const match = await bcrypt.compare(req.body.Password,check.Password);

        if(match){
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

         req.body.Password = HashPassword;

        await collection.insertMany([data])

        res.send("Home Page");

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

                res.render("forgotpass2");

            })
        }

        catch(err){

            res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");

        }

})

app.post("/forgotpass2", async (req,res)=>{


    try{

        if(await collection2.find({Email:req.body.Email}).count() == 0){

        throw new Error("Entered Email Adress is Not Same as Before Entered Email Adress");

        }
        
        const check = await collection2.findOne({Email:req.body.Email});
        const match = await bcrypt.compare(req.body.receivedotp,check.otp);

        if(match){

            if(req.body.Newpassword != req.body.conforimpassword) throw new Error("New password and confrim Password Is Not matching");
            await collection2.findOneAndDelete({Email:req.body.Email});
            const HashPassword  = await bcrypt.hash(req.body.Newpassword, 10);
            await collection.findOneAndUpdate({Email:req.body.Email},{Password:HashPassword});

            res.render("Login");

        }else{

            throw new Error("OTP is Not Matched verfication failed");

        }
    }

    catch(err){

        res.send(`${err}` + "<a href =\"/forgotpass\"> <br> click here to go back to Forgotpassword Page <br></a>");

    }



})


app.listen(3000, () => {
    console.log("port connected");
})