const express = require("express");
const app = express();
const path = require("path");
const teemplatePath = path.join(__dirname, '../templates');
const port = process.env.PORT || 3000
app.use(express.json())

app.set("view engine", "hbs");
app.set("views", teemplatePath)

app.get("/", (req,res) => {
    res.render("login");
})

app.use(express.urlencoded({extended:false}))

app.get("/signup", (req,res) => {
    res.render("login");
})

app.post("/signup", async(req,res) => {

    const data = {
         email:req.body.email_db,
         password:req.body.password_db
    }

await collection.insertMany([data]);

res.render("home")

})

app.get("/forgotPass",async(req,res)=>{
    res.render("forgotPass");
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

app.listen(3000, () => {
    console.log("port connected");
})
