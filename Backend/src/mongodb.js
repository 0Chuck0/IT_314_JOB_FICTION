const mongoose=require("mongoose");


// *********below for connecting node with mongodb *******//
mongoose.connect("mongodb://localhost:27017/login_db_project")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const loginschema=new mongoose.Schema({
   email:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    }

})

// Schema 
// A mongoose schema defines the structure of the document,
// default values, validators, etc.
const collection=new mongoose.model("user_information",loginschema);
module.exports=collection;

// A mongoose model is a wrapper on the mongoose schema.
// A mongoose schema defines the structure of the document,
// default values,validators, etc .,whereas a mongoose model 
// provides an interface to the database for creating ,
// querying ,updating ,deleting records ,etc.
