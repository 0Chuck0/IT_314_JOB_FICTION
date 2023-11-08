const mongoose=require("mongoose");
const Verificationschema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
        required:true,
    }
});

const OTPdata= mongoose.model("Verificationschema",Verificationschema) ;
module.exports=OTPdata;


