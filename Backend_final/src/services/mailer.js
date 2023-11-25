const nodemailer  =require("nodemailer")
require('dotenv').config()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.email',
    port: 587,
    secure:false,
    service: 'Gmail',
    auth: {
        user: 'dabhidipak6412@gmail.com',
        pass: 'acwgdbjohgfmvlca',
    }
});

async function sendEmail(toemail,sub,messsage){


    const info = await transporter.sendMail({

        from:'dabhidipak6412@gmail.com',
        to:toemail,
        subject:sub,
        html:messsage,

    });
}

module.exports = {sendEmail};