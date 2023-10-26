const mongoose=require("mongoose");+

mongoose.connect("mongodb://127.0.0.1:27017/Data",{UseNewUrlParser:true,UseUnifiedTopology:true})
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
        required:true,
    },
    Resume:{
        type:String,
        required:true,
    },
    Emailupdation:{
        type:String,
    }
})


const Verificationschema = new mongoose.Schema({
    Email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
        required:true,
    }
});

const collection = new mongoose.model("Collection",Loginschema);4
const collection2 = new mongoose.model("Collection2",Verificationschema);

module.exports = {collection , collection2}