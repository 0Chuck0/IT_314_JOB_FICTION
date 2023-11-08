const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
//const LogInCollection = require("./mongo")
const port = process.env.PORT || 4000
app.use(express.json())
const hbs=require("hbs");
app.set("view engine","hbs");
const collection=require("./db/mongodb");
const Job = require('./schemas/jobschema');
const jwt=require("jsonwebtoken");

const tempelatePath = path.join(__dirname, '../templates/views')
const publicPath = path.join(__dirname, '../Public')
const partialspath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialspath);
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}))
app.use(express.static(tempelatePath));
app.use("/jobsmain1" ,(express.static(publicPath)));


app.set("views",tempelatePath);
app.get("/",(req,res)=>{
    res.render("home")
})



app.get("/login",(req,res)=>{
    res.render("login")
})

app.get("/register",(req,res)=>{
    res.render("register")
})

app.get("/jobs",(req,res)=>{
    res.render("jobs")
})

app.get("/jobs_main1",(req,res)=>{
    res.render("jobs_main1")
})

    app.get('/jobsmain1/:title',async (req, res) => {
        
        const requestedTitle = req.params.title;
        
        // Fetch job data based on the requested title using await
        const jobsData = await Job.find({ title: requestedTitle }).exec();
        
        res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
            
        
       
    });
  

app.post("/jobs_main1",async (req,res)=>{


    const requestedTitle = req.body.search;
        
        // Fetch job data based on the requested title using await
        const jobsData = await Job.find({ title: requestedTitle }).exec();
        console.log(jobsData);
        res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
            

});
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