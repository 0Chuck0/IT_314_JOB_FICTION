const { verify } = require("jsonwebtoken");
const Adminschema = require("../models/adminschema");
const { sendEmail } = require("../services/mailer");
const Companyregister = require("../models/companyregisterschema");
const { CompanyLoginSuccessfull } = require("../services/mailtemplates");

module.exports = {

    get:async (req,res)=>{

        const verified = await Companyregister.find({permission:true});
        const Unverified = await Companyregister.find({permission:false});
        const num1= verified.length;
        const num2 = Unverified.length;
        const total = num1 + num2;
        const name = req.body.name;
        res.render("admin_dashboard.hbs",{name,verified:verified,Unverified:Unverified,num1:num1,num2:num2,total:total});

    },
    post: async(req,res)=>{
        try{

            const email = req.params.email;
            
            const check = await Companyregister.updateOne({email:email}, { $set: {permission: true } });

            const url = `${process.env.Base_Url}/companylogin`;

            sendEmail(email,"Registration is verified Succesfully now you are able to login",CompanyLoginSuccessfull(check.employee_name,url));

            res.status(200.).send('<script>alert("status Updated succesfully"); window.location = "/Admin/home";</script>');

        }
        catch (error)
        {
            res.status(400).send('<script>alert("Fatal Error."); window.location = "/Admin/home";</script>');
        }
    },
    create:async (req,res)=>{
        try{

            const email = req.params.email;

            await Companyregister.deleteOne({email:email});

            res.status(200).send('<script>alert("company deleted succes fully"); window.location = "/Admin/home";</script>');

        }
        catch (error)
        {
            res.status(400).send('<script>alert("Fatal Error."); window.location = "/Admin/home";</script>');
        }
    }
}