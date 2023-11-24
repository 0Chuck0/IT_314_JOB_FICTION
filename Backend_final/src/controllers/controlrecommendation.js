const express = require("express");
const app = express()
const Register = require("../models/registers")
const recommendation = require("../models/recommendation")
const jobs=require("../models/jobs")

module.exports = {

    get:async (req,res)=>{
        
        const r_data = await recommendation.findOne({email:req.body.email})
        const u_data = await Register.findOne({email:req.body.email})
        if(!r_data)
        {

          res.render("recommendation.hbs",{logged:true});
        }
        else
        {
             //console.log(data);
        const query=[];
        const query1=[];
        // console.log(r_data)
        // console.log(u_data)

        if(r_data.r_job_title!=undefined)
        {
            const obj={job_title:{ "$in": r_data.r_job_title }};
            query.push(obj);
        }

        if(u_data.technical_skills!=undefined)
        {
            const obj={skills:{ "$in": u_data.technical_skills }};
            query1.push(obj);
        }

        if( r_data.r_location!=undefined)
        {
            const obj={location:{ "$in":r_data.r_location }};
            query.push(obj);
        }
        if( u_data.experience!=undefined)
        {
            const obj={experience:{ "$lte":  u_data.experience }};
            query.push(obj);
        }

        if (r_data.r_work_mode !== undefined && r_data.r_work_mode.trim().length > 0) {
            const obj = { work_mode: r_data.r_work_mode };
            query.push(obj);
          }

          if (r_data.r_employment !== undefined && r_data.r_employment.trim().length > 0) {
            const obj = { employment_type: r_data.r_employment };
            query.push(obj);
          }



       // var query=[]
        //const listdata = await recommendation.distinct("job_id", {"email": data.email});
       // console.log(listdata);
       const finalQuery = {
        $and: [
          { $and: query },
          { $and: query1 }
        ]
      };
      
      // Example usage with jobs.find()
      const jobsdata = await jobs.find(finalQuery);
      console.log(jobsdata)
        //const jobsdata=await jobs.find({"id": {"$in": listdata}});
        //console.log(jobsdata);
        res.render("recommendation.hbs",{jobsdata,logged:true});
        }
       
    }
}
