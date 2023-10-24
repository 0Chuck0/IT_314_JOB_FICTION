const mongoose=require("mongoose");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/Registrationdata",{UseNewUrlParser:true,UseUnifiedTopology:true})
.then(()=>{
    console.log("mongodb contected");
})
.catch(()=>{
    console.log("failed to connect mongodb");
})


const Loginschema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    // Username:{
    //     type:String,
    //     required:true,
    //     unique:true,
    // },
    Email:{
        type:String,
        unique:true,
        required :true,
    },
    Password:{
        type:String,
        required:true,
    },
    Mobileno:{
        type:String,
        required:true,
    },
    Gender:{
        type:String,
        required:true,
    },
    Workstatus:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection",Loginschema);

module.exports = collection