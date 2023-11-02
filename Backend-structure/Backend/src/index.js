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
const bodyparser = require("body-parser");
app.use(bodyparser.json());
const jwt = require("jsonwebtoken");
const cookieparser = require("cookie-parser");
app.use(cookieparser());

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


app.get("/", async (req,res)=>{

    if(req.cookies.jwt)
    {
        const verfiy = jwt.verify(req.cookies.jwt,"iamnotinterstinginthissofwareprojectandidontwantotdothisanymore");
        console.log(verfiy);
        const data = await registerData.findOne({_id:verfiy._id});
        res.render("home",{ userName : data.name})
    }
    res.render("home",{ userName : "Log In"})
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

const middleware = (req,res,next) => {
      
    if(req.cookies && req.cookies.jwt)
    {
        //console.log("Before");
        next()
       // console.log("After");
        return
    }
    else
    {
        res.render("login")
    }
}

app.post("/saveData",middleware, async (req,res)=>{
    
    try{
     
    // if(req.cookies.jwt){
    // console.log("I am here");
     const verify = jwt.verify(req.cookies.jwt,"iamnotinterstinginthissofwareprojectandidontwantotdothisanymore");
   //  console.log(verify); 
   //console.log(await savedPost.find({job_id:req.body.id}).count());
     if(await savedPost.find({job_id:req.body.id}).count() == 0)
     {
        const check = await Job.findOne({job_id:req.body.id})
      //const data = await registerData.findOne({_id:verify._id});
      //console.log(`Jobseeker name ${data.name} and Job id is ${check.job_id} ${verify._id}`);
        
        const myData = new savedPost({
           job_id : check.job_id,
           job_seekerid : verify._id,
        })
       
        await savedPost.insertMany([myData])
        console.log("Added to the save list !")
     }
     else
     {
       console.log("already Added into the save list !")  
     }
    }
    //}
    catch(err)
    {
        res.send(err)
    }
})

app.post("/unsaveData",middleware,async(req,res)=>{
    
    try{

   // if(req.cookies.jwt){
   // console.log("I am here delete"); 
      const verify = jwt.verify(req.cookies.jwt,"iamnotinterstinginthissofwareprojectandidontwantotdothisanymore");
   // console.log(verify);
      if(await savedPost.find({job_id:req.body.id}).count() == 1)
      {
        const check2 = await savedPost.findOne({job_id:req.body.id})
      //const data = await registerData.findOne({_id:verify._id});
            
      // console.log(`Jobseeker name ${data.name} and Job id is ${check2.job_id}`);
        await savedPost.deleteOne(check2);
        console.log("Delete from save list !")
      }
      else
      {
        console.log("Not into the saved list !")   
      }
    }
    //}
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
           token:'token'
        })
        
        const result = await data.save();
        // console.log(result);
        const id = result._id.toString();
        // console.log(id);
        const token = jwt.sign({_id:id},"iamnotinterstinginthissofwareprojectandidontwantotdothisanymore")
        
        await registerData.updateOne({_id:id},{$set:{token:token}})

        res.cookie("jwt",token,{
            maxAge : 3000000,
            httpOnly : true
        })
       
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
        
        if(check.password === req.body.password_db)
        {
            res.cookie("jwt",check.token,{
                maxAge : 3000000,
                httpOnly : true
            })
            res.render("home",{
                userName : check.name,
            });
             //you will be directed to home page
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