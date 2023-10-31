const express = require("express")
const path = require("path")
const app = express()
// const hbs = require("hbs")
//const LogInCollection = require("./mongo")
const port = process.env.PORT || 3000
app.use(express.json())
const hbs=require("hbs");
app.set("view engine","hbs");
const collection = require("./db/mongodb");
const Job = require('./schemas/jobschema');
const savedPost = require('./schemas/savePostSchema');
const registerData = require('./schemas/login_schema');
const { log } = require("console")

const tempelatePath = path.join(__dirname, '../templates/views')
const publicPath = path.join(__dirname, '../Public')
const partialspath=path.join(__dirname,"../templates/partials")
hbs.registerPartials(partialspath);
app.use(express.static(publicPath));
app.use(express.urlencoded({extended:false}))
app.use(express.static(tempelatePath));
app.use("/jobsmain" ,(express.static(publicPath)));


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

app.get("/jobs_main",(req,res)=>{
    res.render("jobs_main")
})

    app.get('/jobsmain/:title',async (req, res) => {
        
        const requestedTitle = req.params.title;
        
        // Fetch job data based on the requested title using await
        const jobsData = await Job.find({ title: requestedTitle }).exec();
        
        res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
    });
  

app.post("/jobs_main",async (req,res)=>{


    const requestedTitle = req.body.search;
        
    // Fetch job data based on the requested title using await
    const jobsData = await Job.find({ job_title : requestedTitle }).exec();
    //console.log(jobsData);
    res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
            

});

app.post("/saveData",async(req,res)=>{
    
    try{
        console.log(req.body.id);
        const check = await Job.findOne({job_id:req.body.id})

        const myData = new savedPost({
            job_id : check.job_id,
            job_seekerid: 202101227
        })
       
        await savedPost.insertMany([myData])
        console.log("Added to save list !")
    }
    catch(err)
    {
        res.send(err)
    }
})

app.post("/unsaveData", async(req,res)=>{
    
    try{
        const check2 = await savedPost.findOne({id:req.body.id})
        await savedPost.deleteOne(check2);
        console.log("Delete from save list !")
    }
    catch(err)
    {
        res.send(err)
    }
})

app.post("/register",async(req,res)=>{

    try{
     
        const data = new registerData({
           name:req.body.name,
           email:req.body.email,
           password:req.body.password,
           mobileNumber:req.body.mobileNumber,
        })
        
        const result = await data.save();
        res.redirect("/"); //you will be directed to home page
        }
        catch(err){
            console.log(err);
            res.send("<h1>unable to add data</h1>");
        }


})

app.get("/forgotpassword",async(req,res)=>{

    res.render("forgotpassword");


})



app.post("/login",async(req,res)=>{

    try{

        const check = await registerData.findOne({email:req.body.email_db})
        
        if(check.password===req.body.password_db)
        {
            res.redirect("/"); //you will be directed to home page
        }
        else
        {
            res.send("<h1>Please enter valid password</h1>")
        }
    }
    catch(err)
    {
        console.log(err);
        res.send("<h1>Please enter valid email addresss</h1>")
    }

})

app.listen(port, () => {
    console.log('port connected');
}) 