const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
//const LogInCollection = require("./mongo")
const port = process.env.PORT || 4000
app.use(express.json())
const hbs=require("hbs");
app.set("view engine","hbs");
const collection=require("./mongodb");



const tempelatePath = path.join(__dirname, '../templates')
const publicPath = path.join(__dirname, '../../Frontend')


app.use(express.static(tempelatePath));
app.set("views",tempelatePath);
app.get("/",(req,res)=>{
    res.render("login")
})

app.use(express.urlencoded({extended:false}))

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register",async(req,res)=>{

    const data={
    email:req.body.email_db,
    password:req.body.password_db

    }

    await collection.insertMany([data])
    res.render("home") //you will be directed to home page


})

app.get("/forgotpassword",async(req,res)=>{

    res.render("forgotpassword");


})



app.post("/login",async(req,res)=>{

    try{
        const check=await collection.findOne({email:req.body.email_db})
        if(check.password===req.body.password_db)
        {
            res.render("home")
        }
        else
        {
            res.send("wrong password")
        }
    }

    catch
    {
        res.send("wrong details")
    }


})

app.listen(port, () => {
    console.log('port connected');
}) 