const Companyregister = require("../models/companyregisterschema")
const emailValidator = require('email-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../services/mailer");
const { Regverification } = require("../services/mailtemplates");


module.exports = {

    get: async (req, res) => {

        res.render("companyregister.hbs");

    },


    post: async (req, res) => {
        try {
            const { companyname, industrytype, company_description, companylocation, employee_name, employee_designation, number, email, password, cpassword } = req.body;

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailRegexNotupper = /^[^A-Z]+@[^\s@]+\.[^\s@]+$/;
            const allowedFormats = /^(?:(?:\d{5}-\d{5})|(?:\d{10}))$/;
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,15}$/;
           
            if (!allowedFormats.test(number)) {
                return res.status(400).json({ error: 'Invalid phone number format.' });
            }
            if (!email) {
                return res.status(400).json({ error: 'Email is required' });
            }
            if (!companyname) {
                return res.status(400).json({ error: 'Company is required' });
            }
            if (!industrytype) {
                return res.status(400).json({ error: 'industrytype is required' });
            }
            if (!company_description) {
                return res.status(400).json({ error: 'company_description is required' });
            }
            if (!companylocation) {
                return res.status(400).json({ error: 'companylocation is required' });
            }
            if (!employee_name) {
                return res.status(400).json({ error: 'employee_name is required' });
            }         
            if (!employee_designation) {
                return res.status(400).json({ error: 'employee_designation is required' });
            }
            if (!number) {
                return res.status(400).json({ error: 'number is required' });
            }
            if (!cpassword) {
                return res.status(400).json({ error: 'cpassword is required' });
            }
            if (!password) {
                return res.status(400).json({ error: 'password is required' });
            }
            if (companyname.length < 3 || companyname.length > 50) {
                return res.status(400).json({ error: 'Company name must be between 3 and 50 characters.' });
            }
            if (employee_designation.length < 3 || employee_designation.length > 50) {
                return res.status(400).json({ error: 'Employee designation must be between 3 and 50 characters.' });
            }
            if (industrytype.length < 3 || industrytype.length > 40) {
                return res.status(400).json({ error: 'Industry type must be between 3 and 40 characters.' });
            }
            if (company_description.length > 500) {
                return res.status(400).json({ error: 'Company description must have less than 500 characters.' });
            }
            if (companylocation.length > 500) {
                return res.status(400).json({ error: 'Company Location must have less than 500 characters.' });
            }
            // if (!number || !/^\d{10}$/.test(number)) {
            //     return res.status(400).json({ error: 'Invalid phone number. It should be exactly 10 digits' });
            // }
            if (!emailValidator.validate(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }
            if (!emailRegexNotupper.test(email)) {
                return res.status(400).json({ error: 'Invalid email format. Uppercase letters are not allowed in the local part' });
            }
            if (password !== cpassword) {
                return res.status(400).json({ error: 'Passwords do not match' });
            }
            if (!passwordPattern.test(password)) {
                return res.status(400).json({
                    error: 'Invalid password. Please ensure it has at least 8 characters, at most 15 characters, at least one number, at least one uppercase letter, at least one lowercase letter, and at least one special character.'
                });
            }

            if (req.file === undefined) return res.send("you must select a file");

            const imgUrl = `http://localhost:3000/file/${req.file.filename}`;

            const data = Object.create(Object.prototype, Object.getOwnPropertyDescriptors(req.body));

            if (req.body.password === req.body.cpassword) {
                const HashPassword = await bcrypt.hash(req.body.password, 10);
                delete data.cpassword;
                data.password = HashPassword;
                data.token = 'dummy';
                data.verified = false;
                data.profile = imgUrl;
                await Companyregister.insertMany([data]);
                const checking = await Companyregister.findOne({ email: req.body.email });
                const id = checking._id;
                const token = jwt.sign({ _id: id, flag: true }, 'ehewlkjjfsafasjflkasfjjkfsjflkasjffjsjasfasffafa');
                await Companyregister.updateOne({ _id: id }, { $set: { token: token } });

                const url = `http://localhost:3000/companyregister/${token}`;

                const firstname = data.employee_name;

                sendEmail(req.body.email, "Registration Verification", Regverification(url, firstname));

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