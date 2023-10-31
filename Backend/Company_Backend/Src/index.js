const express = require("express");
const app = express();
const path = require("path");
const teemplatePath = path.join(__dirname, '../Templates');
const port = process.env.PORT || 3000
const collection = require("./db/mongoodb")
app.use(express.json())

app.set("view engine", "hbs");
app.set("views", teemplatePath)
app.use(express.urlencoded({extended:false}))


app.get("/", (req,res) => {
    res.render("company_homePage");
})


app.post("/Job_post", async(req,res) => {
    res.render("Job_post");
})

app.post("/Create_new_Jobpost", async (req, res) => {
   
    try {
        const data = {
            job_id: req.body.job_id,
            job_title: req.body.job_title,
            company_name: req.body.company_name,
            salary: req.body.salary,
            location: req.body.location,
            work_mode: req.body.work_mode,
            education: req.body.education,
            experience: req.body.experience,
            skills: req.body.skills
        }

        await collection.insertMany([data])
        res.render("company_homePage", { message: "Job posted successfully!" });
    } 
    catch (error) {
        console.error(error);
        res.status(500).render("Create_new_Jobpost", { error: "Error posting job." });
    }
    
})



app.post("/Profile", async(req,res) => {
    res.render("Profile");
})


app.listen(3000, () => {
    console.log("port connected");
})