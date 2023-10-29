const express = require('express')
const path = require('path')
const app = express()
const { json } = require('express')

require("./db/conn")
const Register = require("./models/registers")
const hbs = require('hbs')
const { error } = require('console')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

const port = process.env.PORT || 3000;
app.set("view engine", "hbs") 

const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path)) //first find index.html in static_path folder. 
                                    // if not available then ignore this line 
        
                                    
const template_path = path.join(__dirname,"../templates/views")
app.set("views",template_path)



app.get('/', (req,res)=>{
    // res.send("You are in main page")
    res.render("home")
})

app.get('/register', (req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
})



// create a new user in our database
app.post('/register', async(req,res)=>{
    try { 
        
        const password = req.body.password;
        const cpassword = req.body.cpassword; 
        if(cpassword===password)
        {
            const data=new Register({           
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                cpassword : req.body.cpassword,
                number : req.body.number,
    
            })

            // console.log("password are matching")
            const registered = await data.save();
            // res.status(201)
            // console.log(registered) 
            res.render("home")
        }
        else
        {
            res.send("Passwords are not matching")
            res.render("home")
        }
    } catch (error) {
        res.status(400).send(error);
    }

})


app.post("/login",async(req,res)=>{
    try{

        const check = await Register.findOne({email:req.body.email})
        if(check.password===req.body.password)
        {
            // console.log("pass matching")
            res.redirect("home"); //you will be directed to home page
        }
        else
        {
            res.send("<h1>Please enter valid password</h1>")
        }
    }
    catch (error)
    {
        console.log(error)
        res.send("<h1>Please enter valid email addresss</h1>")
    }
})

app.get("/forgotpassword",async(req,res)=>{
    res.render("forgotpassword");
})

app.listen(port,()=>{
    console.log(`Server is running in port no ${port}`);
})

