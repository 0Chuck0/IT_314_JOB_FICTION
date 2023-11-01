const {sendEmail}  = require("./mailer");
const OTPdata = require("../models/OTPdata")
const bcrypt = require("bcryptjs");

async function sendotp(to){


    const otp = Math.floor(Math.random()*1000000 + 100000);

    if(otp > 999999) opt -= 100000;

    const Hashotp  = await bcrypt.hash(otp.toString(), 10);

    const data  = {

        Email:req.body.Email,
        otp:Hashotp
    };

    await OTPdata.insertMany([data])

    let htmlmessage = '<h2> Your OTP For verificatoin is ';

    htmlmessage += otp.toString();

    htmlmessage +=' . </h2>';

    sendEmail(req.body.Email,'OTP for varificaton',htmlmessage).then(()=>{

        return 1;

    }).catch(()=>{
        return 0;
    })

}


async function verifyotp(id , receivedotp){

    const check = await collection2.findOne({Email:id});
    const match = await bcrypt.compare(receivedotp,check.otp);

    return match;

}

module.exports  = {sendotp,verifyotp};