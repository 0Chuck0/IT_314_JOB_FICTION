const express = require('express')
const path = require('path')
const app = express()
const { json } = require('express')

require("./db/conn")
const Register = require("./models/registers")
const Jobpost = require("./models/postschema")
// const Job = require('./models/postschema');
const savedPost = require('./models/savePostSchema');

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



app.get('/home', (req,res)=>{
    // res.send("You are in main page")
    res.render("home")
})

app.get('/register', (req,res)=>{
    res.render("register")
})

app.get("/login",(req,res)=>{
    res.render("login")
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
            res.render("home"); //you will be directed to home page
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

app.get("/forgotpassword",async(req,res)=>{
    res.render("forgotpassword");
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

