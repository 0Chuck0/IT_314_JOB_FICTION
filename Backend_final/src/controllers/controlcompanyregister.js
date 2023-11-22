const Companyregister = require("../models/companyregisterschema")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config()
const { sendEmail } = require("../services/mailer");


module.exports = {

    get: async (req, res) => {

        res.render("companyregister.hbs");

    },
    

    post: async (req, res) => {
        try {

            if(req.file === undefined) return res.send("you must select a file");

            const imgUrl = `http://localhost:3000/file/${req.file.filename}`;

            const data = req.body;
            if (req.body.password === req.body.cpassword) {
                const HashPassword = await bcrypt.hash(req.body.password, 10);
                delete data.cpassword;
                data.password = HashPassword;
                data.token = 'dummy';
                data.verified = false;
                data.profile = imgUrl ;
                await Companyregister.insertMany([data]);
                const checking = await Companyregister.findOne({ email: req.body.email });
                const id = checking._id;
                const token = jwt.sign({ _id: id ,flag:true}, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');
                await Companyregister.updateOne({ _id: id }, { $set: { token: token } });
                const message = `<h1> http://localhost:3000/companyregister/${token} <h1>`;
                sendEmail(req.body.email, "Registration Verification", message);
                res.status(400).send('<script>alert("Verification link is sent to your mail please verify and after that do a login."); window.location = "/companylogin";</script>');
                //res.render("Login")
            }
            else {

                res.status(400).send('<script>alert("password and confrim password is not matching."); window.location = "/companyregister";</script>');

            }

        }

        catch (error) {
            res.status(400).send(`${error}`);
        }

    },
    
    create: async (req, res) => {
        try {
            const { token } = req.params;
            let id = "";
            jwt.verify(token, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa', async (err, decoded) => {
                if (err) {

                    res.status(400).send('<script>alert("You have not registred first register."); window.location = "/companyregister";</script>');

                }
                else {
                    id = decoded._id;
                }
            });

            await Companyregister.findOneAndUpdate({ _id: id }, { verified: true });

            res.status(400).send('<script>alert("Verified succesfully now you can login."); window.location = "/companylogin";</script>');

        }

        catch (err) {

            console.log(err);

            res.status(400).send('<script>alert("fatal error."); window.location = "/companylogin";</script>');

        }

    }


}
