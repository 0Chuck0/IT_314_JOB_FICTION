const Register = require("../models/registers");
const emailValidator = require('email-validator');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../services/mailer");
const { RegisterVerify } = require("../services/mailtemplates");
require('dotenv').config()

module.exports = {

    get: async (req, res) => {

        res.render("register.hbs");

    },
    post: async (req, res) => {
        try {

            const { name, email, password, cpassword, number, DOB, gender } = req.body;
            const validGenders = ['male', 'female', 'other'];
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const emailRegexNotupper = /^[^A-Z]+@[^\s@]+\.[^\s@]+$/;
            const allowedFormats = /^(?:(?:\d{5}-\d{5})|(?:\d{10}))$/;
            const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?!.*\s).{8,15}$/;
            const [year, month, day] = DOB.split('-');

            if (!emailRegexNotupper.test(email)) {
                return res.status(400).json({ error: 'Invalid email format. Uppercase letters are not allowed in the local part' });
            }
            if (!allowedFormats.test(number)) {
                return res.status(400).json({ error: 'Invalid phone number format.' });
            }
            if (!name) {
                return res.status(400).json({ error: 'Name is required' });
            }
            if (!email) {
                return res.status(400).json({ error: 'Email is required' });
            }
            if (!password) {
                return res.status(400).json({ error: 'Password is required' });
            }
            if (!cpassword) {
                return res.status(400).json({ error: 'Confirm password is required' });
            }
            if (!number) {
                return res.status(400).json({ error: 'Number is required' });
            }
            if (!DOB) {
                return res.status(400).json({ error: 'DOB is required' });
            }
            if (!gender) {
                return res.status(400).json({ error: 'Gender is required' });
            }
            if (name.length < 3 || name.length > 50) {
                return res.status(400).json({ error: 'Name must be between 3 and 50 characters.' });
            }
            if (!passwordPattern.test(password)) {
                return res.status(400).json({
                    error: 'Invalid password. Please ensure it has at least 8 characters, at most 15 characters, at least one number, at least one uppercase letter, at least one lowercase letter, and at least one special character.'
                });
            }
            if (name === null || name === undefined || name.trim() === '') {
                return res.status(400).json({ error: 'Name is required' });
            }
            if (!emailValidator.validate(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }
            if (!validGenders.includes(gender)) {
                return res.status(400).json({ error: 'Invalid gender' });
            }
            if (password !== cpassword) {
                return res.status(400).json({ error: 'Passwords do not match' });
            }
            if (!emailRegex.test(email)) {
                return res.status(400).json({ error: 'Invalid email format' });
            }
            if (!DOB || !(/^\d{1,4}-\d{1,2}-\d{1,2}$/).test(DOB)) {
                return res.status(400).json({ error: 'Invalid date format. Use YYYY-MM-DD' });
            }
            if (!(parseInt(year, 10) >= 0 && parseInt(year, 10) <= 2023)) {
                return res.status(400).json({ error: 'Invalid year. Should be between 0 and 2023' });
            }
            if (!(parseInt(month, 10) >= 1 && parseInt(month, 10) <= 12)) {
                return res.status(400).json({ error: 'Invalid month. Should be between 1 and 12' });
            }
            if (!(parseInt(day, 10) >= 1 && parseInt(day, 10) <= 31)) {
                return res.status(400).json({ error: 'Invalid day. Should be between 1 and 31' });
            }

            if (req.file === undefined) return res.send("you must select a file");

            const imgUrl = `${process.env.Base_Url}/file/${req.file.filename}`;

            const data = Object.create(Object.prototype, Object.getOwnPropertyDescriptors(req.body));

            if (req.body.password === req.body.cpassword) {

                const HashPassword = await bcrypt.hash(req.body.password, 10);

                delete data.cpassword;

                data.password = HashPassword;

                data.token = 'dummy';

                data.verified = false;

                data.profile = imgUrl;

                await Register.insertMany([data]);

                const checking = await Register.findOne({ email: req.body.email });

                const id = checking._id;

                const token = jwt.sign({ _id: id, flag: false }, process.env.SECRET_KEY);

                await Register.updateOne({ _id: id }, { $set: { token: token } });

                const url = `${process.env.Base_Url}/register/${token}`;

                const firstname = data.name;

                sendEmail(req.body.email, "Registration-Verication", RegisterVerify(url, firstname));

                res.status(400).send('<script>alert("Verification link is sent to your mail please verify and after that do a login."); window.location = "/login";</script>');

                //res.render("Login")

            } else {

                res.status(400).send('<script>alert("password and confrim password is not matching."); window.location = "/register";</script>');

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

            jwt.verify(token, process.env.SECRET_KEY, async (err, decoded) => {
                if (err) {

                    res.status(400).send('<script>alert("You have not registred first register."); window.location = "/register";</script>');

                }
                else {
                    id = decoded._id;
                }
            });

            await Register.findOneAndUpdate({ _id: id }, { verified: true });

            res.status(400).send('<script>alert("Verified succesfully now you can login."); window.location = "/login";</script>');

        }

        catch (err) {

            console.log(err);

            res.status(400).send('<script>alert("fatal error."); window.location = "/login";</script>');

        }

    }
}