const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
require("./db/conn");

const Register = require("./models/register");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public" );
const template_path = path.join(__dirname, "../templates/views" );

app.use(express.static(static_path));
app.use(express.static(template_path));

app.set("view engine", "hbs");

app.set("views" , template_path);

app.get("/", (req,res) => {
    res.render("index");
});

app.get("/register" , (req ,res) => {
    res.render("register");
});

app.post("/register" , async (req ,res) => {
    try{

            const rg = new Register({
                name : req.body.name,
                email : req.body.email,
                mobileNumber : req.body.mobileNumber,
                password : req.body.password,
                
            })

           const registered = await rg.save();
           console.log(registered);
           res.redirect("index");
        
    } catch (error){
        res.status(400).send(error);
        console.log(error);
    }
});


app.get("/login" , (req,res) => {
    res.render("login");
});

 

app.listen(port , () => {
    console.log(`server is  running at port no ${port}`);
});