const express = require("express")
const path = require("path")
const app = express()
app.use(express.json())

const hbs=require("hbs");
app.set("view engine","hbs");

const tempelatePath = path.join(__dirname, '../templates')
app.use(express.static(tempelatePath));
const collection = require("./mongodb");
const { register } = require("module");
app.set("views",tempelatePath);
app.use(express.urlencoded({extended:false}))

app.get("/",(req,res)=>{
    res.render("home",{ name : "Jinal"})
})

app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.post("/register", async(req,res)=>{
    
    try{
     
    const data = new collection({
       name:req.body.name,
       email:req.body.email,
       password:req.body.password,
       mobileNumber:req.body.mobileNumber,
    })
    
    const result = await data.save();
    console.log(result);
    res.redirect("/"); //you will be directed to home page
    }
    catch(err){
        console.log(err);
        res.send("<h1>unable to add data</h1>");
    }
});

app.post("/login",async(req,res)=>{

    try{

        const check = await collection.findOne({email:req.body.email_db})
        if(check.password===req.body.password_db)
        {
            res.redirect("/"); //you will be directed to home page
        }
        else
        {
            res.send("<h1>Please enter valid password</h1>")
        }
    }
    catch
    {
        res.send("<h1>Please enter valid email addresss</h1>")
    }
})

app.get("/forgotpassword",async(req,res)=>{
    res.render("forgotpassword");
})

app.listen(3000, () => {
    console.log('Listening port no 3000....');
}) 