const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const ApplyScema=new mongoose.Schema({
    email: {
        type:String,
        unique:true,
        required:true
    },
    id: {
        type:Number,
        unique:true,
        required:true
    },
}) 


// now we need to create Collection
const Appliedjobs= mongoose.model("Appliedjob",ApplyScema) ;
module.exports=Appliedjobs;