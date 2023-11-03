const express = require('express')
const path = require('path')
const app = express()
const cookieParser=require("cookie-parser");
app.use(cookieParser());

const { json } = require('express')
const {conectMongodb} = require("./db/conection");

const bcrypt = require("bcryptjs")


conectMongodb("mongodb://127.0.0.1:27017/Randome").then(()=>{
    console.log(`Connection Successfully....`)
}).catch((e)=>{
    console.log(`No Connection`)
}) 
const Register = require("./models/registers")
const {Emailauth}  = require("./middlewares/auth");
const Jobpost = require("./models/postschema")
// const Job = require('./models/postschema');
const Savedpost = require('./models/savePostSchema');
const OTPdata = require('./models/OTPdata');
const {sendotp,verifyotp}  = require("./services/OTPsevices")

const hbs = require('hbs')
const { error } = require('console');
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const port = process.env.PORT || 3000;
app.set("view engine", "hbs") 

const static_path = path.join(__dirname,"../public")
app.use(express.static(static_path))
                                    
const template_path = path.join(__dirname,"../templates/views")
app.set("views",template_path)



const forgotpassroute = require("./routes/forgotpassroute");
const loginroute = require("./routes/loginroute");
const registerroute = require("./routes/registerroute");
const homeroute = require("./routes/homeroute");


app.use("/forgotpass",forgotpassroute);
app.use("/login",loginroute);
app.use("/register",registerroute);
app.use("/home",homeroute);

app.get("/",(req,res)=>{
    res.render("landingpage")
})


app.get("/companyhomepage",(req,res)=>{
    res.render("companyhomepage")
})

app.get("/companyprofile",(req,res)=>{
    res.render("companyprofile")
})

app.get("/newpost",(req,res)=>{
    res.render("newpost")
})

app.get("/jobpostlist",(req,res)=>{
    res.render("jobpostlist")
})


app.post('/newpost', async(req,res)=>{
    try { 
        const lastJob = await Jobpost.findOne().sort('-job_id'); 
        let newJobId = 1; 

        if (lastJob) {
          newJobId = lastJob.job_id + 1;
        }
            const data=new Jobpost({
                job_id : newJobId, 
                job_title : req.body.job_title,
                company_name : req.body.company_name,
                salary : req.body.salary,
                location : req.body.location,
                work_mode : req.body.work_mode,
                education : req.body.education,
                experience : req.body.experience,
                skills : req.body.skills,
            })
            const registered = await data.save();
            // res.status(201)
            // console.log(registered) 
            res.render("home")
        
    } catch (error) {
        res.status(400).send(error);
    }

})

app.get("/landingpage",async(req,res)=>{
    res.render("landingpage");
})


app.get("/jobs_main",(req,res)=>{
    res.render("jobs_main")
})

app.get('/jobsmain/:title',async (req, res) => {
        
    const requestedTitle = req.params.title;
        
    // Fetch job data based on the requested title using await
    const jobsData = await Jobpost.find({ title: requestedTitle }).exec();
        
    res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
});
  

app.post("/jobs_main",async (req,res)=>{
    const requestedTitle = req.body.search;
    // Fetch job data based on the requested title using await
    const jobsData = await Jobpost.find({ job_title : requestedTitle }).exec();
    //console.log(jobsData);
    res.render("jobs_main", { jobsData }); // Pass the fetched data to the 'jobs.hbs' template
            

});



app.post("/saveData",async(req,res)=>{
    
    try{
        console.log(req.body.id);
        const check = await Jobpost.findOne({job_id:req.body.id})

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


app.listen(port,()=>{
    console.log(`Server is running in port no ${port}`);
})

