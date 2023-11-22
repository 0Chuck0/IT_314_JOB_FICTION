const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const ApplyScema=new mongoose.Schema({
   
    applied_jobs_id:{
        type: Number,
        unique: true, 
        required: true,
    },
   
    email: {
        type:String,
       
        required:true
    },
    job_id: {
        type:Number,
        
        required:true
    },
}) 


// now we need to create Collection
const Appliedjobs= mongoose.model("Appliedjob",ApplyScema) ;
module.exports=Appliedjobs;

