const {sendEmail}  = require("./mailer");
const OTPdata = require("../models/OTPdata")
const bcrypt = require("bcryptjs");

async function sendotp(to){


    if(await OTPdata.find({email:to}).count()){

        await OTPdata.findOneAndDelete({email:to});

        

    }


    let otp = Math.floor(Math.random()*1000000 + 100000);

    if(otp > 999999) otp -= 100000;

    const Hashotp  = await bcrypt.hash(otp.toString(), 10);

    const data  = {

        email:to,
        otp:Hashotp
    };

    await OTPdata.insertMany([data])

    let htmlmessage = '<h2> Your OTP For verificatoin is ';

    htmlmessage += otp.toString();

    htmlmessage +=' . </h2>';

    sendEmail(to,'OTP for varificaton',htmlmessage).then(()=>{

        return 1;

    }).catch(()=>{
        return 0;
    })

}


async function verifyotp(id , receivedotp){

    const check = await OTPdata.findOne({email:id});
    const match = await bcrypt.compare(receivedotp,check.otp);

    return match;

}

module.exports  = {sendotp,verifyotp};