const express = require("express");
const bodyparser = require("body-parser");
const path = require("path")
const hbs = require("hbs")
const validator = require("validator");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const methodoverride = require("method-override");
const crypto = require("crypto");
const collection = require("./mongodb")
const nodemailer  =require("nodemailer")



const app = express();
app.use(express.json());
app.set("view engine", "hbs");
app.use(express.static(__dirname));
app.use(express.urlencoded({extended:true}));

app.use(bodyparser.json());
app.use(methodoverride('_method'));



app.get("/error", (req, res) => {
    res.render("Errors")
})
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
         
        const check = await collection.findOne({email:req.body.Email});
        const match = await bcrypt.compare(req.body.Password,check.password);

        if(match){
            res.render("Home Page");
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

            throw new Error("Enter adreess is alredy Registerd");

            // document.getElementById('emailerror').innerHTML="*** Invalied email address ***";

        }
        
        // if(validator.isEmpty(req.body.Mobileno(req.body.Mobileno)));

        
        // const HashPassword  = await bcrypt.hash(req.body.Password , 10);


        const data = req.body;

        delete data.whatsupdate;

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

    async function main(){
        // const transporter = await nodemailer.createTransport({

        // // host: 'mail.gmail.com',
        // port: 465,
        // secure: true,
        // auth: {
        //             user:'dabhidipak35938@gmail.com',
        //             pass:'Dip@8140'
        //      }

        // });

        const transporter = await nodemailer.createTransport({
            host: 'smtp.gmail.email',
            port: 587,
            secure:false,
            auth: {
                user: 'dabhidipak35938@gmail.com',
                pass: mypass,
            }
        });

        const info = await transporter.sendMail({

            from:'dabhidipak35938@gmail.com',
            to:'dipakdabhi8140@gmail.com',
            subject:'OTP',
            text:'Hellow world',
            html:"<h3> OTP = \"1234\" </h3>",

        });

        res.render("forgotpass2");

    }
    main().catch((err)=>{
        res.send(`${err}` + +"<a href =\"/forgotpass\"> <br> click here to go back to FOrgotpassword Page <br></a>");
    });


    console.log(req.body);
    res.render("forgotpass2");

})

app.post("/forgotpass2", async (req,res)=>{

    console.log(req.body);
    res.render("forgotpass3");

})

app.post("/forgotpass3", async (req,res)=>{

    console.log(req.body);
    res.send("Home");

})


app.listen(3000, () => {
    console.log("port connected");
})