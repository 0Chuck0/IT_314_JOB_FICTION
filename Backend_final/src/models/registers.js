const mongoose=require("mongoose");
// const Schema = mongoose.Schema;
const UserScema=new mongoose.Schema({
    name: {
        type:String,
        required:true
    },

    experience:
    {
        type: Number,
    },

    email: {
        type:String,
        unique:true,
        required:true
    },
    password: {
        type:String,
        required:true
    },
    number: {
        type: Number,
        required:true,
        
    },
    gender:{
        type:String,
        required:true,
    },
    DOB:{
        type: Date,
        required:true,
    },
    token:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        required:true,
    },

    resume_link:
    {
        type:String
    },
    
   
    project:
    {
        type:String
    },

    class12:
    {
        type:String
    },

    class10:
    {
        type:String

    },

    college:
    {
        type:String
    },

    highest_edu:
    {
        type:String
    },

    field:
    {
        type:String
    },

    language_skills:   [{
        type: String

      }],
    technical_skills:
        [{
            type: String
    
          }],

    profile:{
        type:String,
        required:true,
    }

 
}) ;


// now we need to create Collection
const Register= mongoose.model("Register",UserScema) ;
module.exports=Register;

