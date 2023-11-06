const express = require("express");
const router = express.Router();
const controljobs = require("../controllers/controljobs");
const jobs  = require("../models/jobs");

router.get("/",function(req,res){

    controljobs.get(req,res);
});



router.post("/",async (req,res)=>{

    //console.log(req.body);


    try{

        
// 	// An array of keys
// var keys = ["job_title", "location", "work_mode","education","company","skills"];

// // An array of values
// var values = ["job_titles", "locations", "work_modes", "educations", "companies", "skills"];

// // Object created
// var obj = {};

// // Using loop to insert key
// // value in Object
// for(var i = 0; i < keys.length; i++){
//     obj[keys[i]] = { "$in": values[i] };
// }

// console.log(obj);


			 


        const { job_titles, locations, work_modes, educations, companies, skills } = req.body;
        
        const  defaultCompanies = await jobs.distinct('company');
        const defaultJobTitles = await jobs.distinct('job_title');
        const  defaultWorkModes = await jobs.distinct('work_mode');
        const defaultEducations = await jobs.distinct('education');
        const defaultLocations = await jobs.distinct('location');
        const  defaultSkills = await jobs.distinct('skills');

     
        const jobtitlesKey = "job_title";
        const locationsKey = "location";
        const  work_modesKey = "work_mode";
        const educationsKey = "education";
        const companiesKey = "company";
        const skillsKey="skills";
        
        const jobtitlesValue = { "$in": job_titles };
        const locationsValue = { "$in": locations };
        const  work_modesValue = { "$in": work_modes };
        const educationsValue = { "$in":  educations };
        const companiesValue = { "$in": companies };
        const skillsValue = { "$in": skills };

        
        const query=[];
        console.log(job_titles);
        if(job_titles!=undefined)
        {
                const obj={job_title:{ "$in": job_titles }};
                query.push(obj);
        }
      
        //console.log(locations!=undefined);
       
        if( locations!=undefined)
        {
            const obj={location:{ "$in": locations }};
            query.push(obj);
        }
        
        if(work_modes!=undefined)
        {
            const obj={work_mode:{ "$in": work_modes }};
            query.push(obj);
        }
        if(educations!=undefined)
        {
            const obj={education:{ "$in":  educations}};
            query.push(obj);
        }
        if(companies!=undefined)
        {
            const obj={company:{ "$in": companies }};
            query.push(obj);
        }
        if(skills!=undefined)
        {
            const obj={skills:{ "$in": skills }};
            query.push(obj);
        }

     
        
        const data = await jobs.find({"$and": query}).exec();
        //console.log(data);
        res.json(data);
       
                      

        }
        catch(err){
            res.send(err);
        }
            

});



module.exports = router;