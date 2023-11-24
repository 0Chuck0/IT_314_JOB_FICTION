const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const ApplyScema=new mongoose.Schema({
   
    applied_jobs_id:{
        type: Number
    },
   
    email: {
        type:String
         
    },
    job_id: {
        type:Number
        
    }
}) 

ApplyScema.index({ job_id: 1 , email: 1 }, { unique: true });

// now we need to create Collection
const Appliedjobs= mongoose.model("Appliedjob",ApplyScema) ;
module.exports=Appliedjobs;

