const nodemailer  =require("nodemailer")
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.email',
    port: 587,
    secure:false,
    service: 'Gmail',
    auth: {
        user: process.env.user,
        pass: process.env.pass,
    }
});

async function sendEmail(toemail,sub,messsage){

    const info = await transporter.sendMail({

        from:process.env.user,
        to:toemail,
        subject:sub,
        html:`${messsage}`,

    });
}

module.exports = {sendEmail};