// For User Register
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/register", () => {
//   const host = `http://localhost:3000`;
//   const path = `/register`;

//   it("Invalid Email Upper latter", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'Bhargav.Vidja@gmail.com', 
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Password needs to have at least one Number", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple@aaa',
//         cpassword: 'Apple@aaa',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password needs to have at least one Special Character", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple122aaa',
//         cpassword: 'Apple122aaa',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password needs to have at least one lower case latter", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'APPLE@1122',
//         cpassword: 'APPLE@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password needs to have at least one Upper case latter", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'apple@1122',
//         cpassword: 'apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password length need to have between 8 to 15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Aa@1',
//         cpassword: 'Aa@1',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Mobile number with hyphen not after 5 digits. ", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '123456-7890',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '99999-99999',
//         DOB: '2023-1-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Invalid Date Formate (Months need to have between 1 to 12)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'john.doe123@example.co.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-13-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Date Formate (Date need to have between 1 to 31)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'john.doe123@example.co.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-12-32',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'alice.smith@company.org',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bob@email123.net',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'support@website.info',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'User@Example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'JOHN.doe123@Example.CO.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'ALICE.SMITH@company.org',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Informantion", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'alice-smith@company.org',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("All valid Informantion", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@example.co.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Valid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@sub.domain.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });


//   it("Valid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '12345@example.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Valid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'user@123domain.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '202101201daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '202101201@',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '202101182@daiict',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });


//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '202101182@.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'Bhargva',
//         email: '202101201daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });


//   it("With Missing Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: '',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'invalidemailformat.com', 
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'invalidemailformat@', 
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("With Empty Name", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: '', 
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("With Invalid Gender", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'invalid', 
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("With Password Mismatch", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'MismatchedPassword', 
//         number: '9999999999',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Phone number with lower than 10 digit", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '123',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Phone Number ", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bhargav.vidja@daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '123a567890',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });


//   it("Phone number with more than 10 digits", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'bhargav.vidja@daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122',
//         number: '12345678900',
//         DOB: '2023-11-25',
//         gender: 'male',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

// });










































// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/login", () => {
//   const host = `http://localhost:3000`;
//   const path = `/login`;

//   it("All valid information", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: '202101201@daiict.ac.in',
//         password: 'Apple@1122',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });
// });




//For Comapny Register
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/companyregister", () => {
//   const host = `http://localhost:3000`;
//   const path = `/companyregister`;
//   it("Error in Password (needs one special character)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '1234567890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'Apple1122',
//         cpassword: 'Apple1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Password(need atleast one upper case", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '1234567890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'apple@1122',
//         cpassword: 'apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Password(need atleast one lower case", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '1234567890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'APPLE@1122',
//         cpassword: 'APPLE@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Password(need atleast one number)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '1234567890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'Apple@aaa',
//         cpassword: 'Apple@aaa'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password needs to have less than 15 character.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '1234567890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'Apple@1111111111',
//         cpassword: 'Apple@1111111111'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: '202101201@daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'Bhargav.Vidja@daiict.ac.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'Bhargav.Vidja@daiict..in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmailcom',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail..com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidjacom',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Invalid Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@.in',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Number field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '123456-7890',
//         email: 'bhargav.vidja@gmail.com',
//         password:'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat,India',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'john.doe123@example.co.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat,India',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bob@email123.net',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat,India',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'invalidemailformat.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Password not matching", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat,India',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'john.doe123@example.co.uk',
//         password: 'Apple@1122',
//         cpassword: 'Apple@2211'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Number field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '94',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Number field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '12346-7890',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Error in Number field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '12345-67890',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(200);
//         done();
//       });
//   });

//   it("Character in Number", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081aa1384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Less than 3 character in Company Name", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'IT',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'Founder',
//         number: '9081331384',
//         email: 'bharga.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("More than 50 character in Company Name", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'hbehdbcbhcbhyudeuibbcwbchbcbdhjbchjbchdbcnnjkdncdjjknvn',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'Founder',
//         number: '9081331384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Less than 3 character in Company Type", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'IT',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'Founder',
//         number: '9081331384',
//         email: 'bharga.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("More than 40 character in Company Type", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'hbehdbcbhcbhyudeuibbcwbchbcbdhjbchjbchdbcnnjkdncdjjknvn',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'Founder',
//         number: '9081331384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("More than 50 character in Designation", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'Chief Executive Officer and President of Global Strategic Operations and Innovations',
//         number: '9081331384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("less than 3 character in Designation", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargav',
//         employee_designation: 'CE',
//         number: '9081331384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });



//   it("Empty Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: '',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: '',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: '',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Location", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: '',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Employee name", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: '',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Designation", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: '',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Number", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Email", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: '',
//         password: 'Apple@1122',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: '',
//         cpassword: 'Apple@1122'

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Confirm Password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         companyname: 'Apple',
//         industrytype: 'Type',
//         company_description: 'Description',
//         companylocation: 'Gujarat',
//         employee_name: 'Bhargv',
//         employee_designation: 'Founder',
//         number: '9081231384',
//         email: 'bhargav.vidja@gmail.com',
//         password: 'Apple@1122',
//         cpassword: ''
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

// });








































// // //<------------------------------------Testing Edit Profile ------------------------------------------------->///

// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/edit_profile", () => {
//   const host = `http://localhost:3000`;
//   const path = `/edit_profile`;


//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '-1',
//         project: 'Job fiction',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '93.3',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '-5',
//         project: 'Job fiction',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '-100',
//         project: 'Job fiction',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot exceed 25.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '26',
//         project: 'Job fiction',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot exceed 25.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '30',
//         project: 'Job fiction',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
 

//   it("Project name is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: '$dfv',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Project name is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: '12457',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Project name is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '1',
//         project: '#123',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Project name should contain atleast 3 character.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'ab',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Project name should not contain more than 50 character.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'aswqlkdkjldjfkdfhjhjdkhjdshfkjhjhnbbhfuihuihfsdjhfhjkdhjhskjdhehiohewruiure',
//         college: 'DAIICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'Nirma',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'Haward',
//         class12: '85.12',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: '@#DA$IICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
 
//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DA@IICT',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: '123',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DA-IICT',
//         class12: '94.5',
//         class10: '94.6',

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT@123',
//         class12: '94.5',
//         class10: '94.6',

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
 
//   it("Collage name is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DA_IICT',
//         class12: '94.5',
//         class10: '94.6',

//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'Marwadi University',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'IIT Gandhinagar',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'IIIT Delhi',
//         class12: '94.5',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class12 percentage cannot be negative.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '-1.00',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class12 percentage cannot be negative.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '-56.23',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class12 percentage cannot be more than 100.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '101.00',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("Class12 percentage cannot be more than 100.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '180.00',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '0.00',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '54.75',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class10 percentage cannot be negative.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '54.75',
//         class10: '-1.00',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class10 percentage cannot be negative.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '101.00',
//         class10: '-94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Class10 percentage cannot be more than 100.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '54.75',
//         class10: '101.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
//   it("Class10 percentage cannot be more than 100.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '54.75',
//         class10: '8000.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '46.58',
//         class10: '39.78',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("invalid drive link.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://web.whatsapp.com',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '85.58',
//         class10: '69.78',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("invalid drive link.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://www.youtube.com',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '46.58',
//         class10: '39.78',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("Empty Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: '',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty project name.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: '',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("Empty collage name.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: '',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty class12 grade.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty class10 grade.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Job Fiction',
//         college: 'DAIICT',
//         class12: '75.84',
//         class10: '',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Hospital Management',
//         college: 'DAIICT',
//         class12: '49.84',
//         class10: '73.69',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '2',
//         project: 'Start Up for startup.',
//         college: 'LD collage',
//         class12: '56.84',
//         class10: '48.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         resume_link: 'https://drive.google.com/file/d/1HzTz9H4JBvUKYG0XTvSeI-yimxYtIkKI/view?usp=sharing',
//         experience: '5',
//         project: 'Library Management',
//         college: 'Nirma university',
//         class12: '75.84',
//         class10: '94.6',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

// });










































// //<------------------------------------Testing Post Job ------------------------------------------------->///

// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/newpost", () => {
//   const host = `http://localhost:3000`;
//   const path = `/newpost`;


//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: -1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: -5,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot be negative", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: -57,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot exceed 25.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: 26,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Experience cannot exceed 25.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: 45,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("All valid field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Electric Engineering',
//         Responsibilities: 'Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Gandhinagar',
//         Perks: 'Food',
//         last_date: '2023-12-31'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Job title is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering123',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2024-01-01'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Job title is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer123Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'medical',
//         last_date: '2023-12-30'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Job title is Invalid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: '1234',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-05'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Job title should contain atleast 3 character.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'HR',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-10'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Project name should not contain more than 50 character.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'ComputerEngineeringkdjskdjfksdhjhjhjdhfjhjfygoiyhjkhfjhkjdfhjhjghjfdhdjfhdjhkjhjdhgkjhdkj',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-15'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Hotel manager',
//         Responsibilities: 'trainer',
//         exp: 1,
//         salary: 20000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2023-12-31'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Hospital Manager',
//         Responsibilities: 'doctor',
//         exp: 1,
//         salary: 75000,
//         location: 'Mumbai',
//         Perks: 'Residance',
//         last_date: '2024-01-14'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Fontend Devloper',
//         exp: 1,
//         salary: 50000,
//         location: 'Rajkot',
//         Perks: 'Food',
//         last_date: '2024-02-14'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 75000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2023-12-14'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Software Development Engineer',
//         exp: 1,
//         salary: 85000,
//         location: 'Bangalore',
//         Perks: 'medicale',
//         last_date: '2023-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("salary cannot be negative.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: -5000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-06-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("salary cannot be less than 5000.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 1,
//         salary: 75,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-06-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("salary cannot be more than 500000.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 750000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-07-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("salary cannot be more than 500000.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 1000000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-08-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-03-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Frontend Devloper',
//         exp: 2,
//         salary: 50000,
//         location: 'Bangalor',
//         Perks: 'Food',
//         last_date: '2024-06-29'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Location is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities:'In the vast expanse of the cosmos, where galaxies twirl in cosmic dances and stars flicker like distant lanterns, there exists a profound beauty that captivates the imagination. Nebulas stretch their ethereal arms across the cosmic tapestry, creating celestial paintings that defy the limits of human comprehension. Black holes, mysterious and enigmatic, devour light and time, bending the very fabric of space itself Planets, each a unique world with its own story, orbit their parent stars in a delicate ballet. Moons, faithful companions, cast their silvery glow upon alien landscapes. Meteoroids zip through the cosmic void, leaving trails of stardust in their wake. Supernovae unleash titanic explosions, scattering elements forged in the hearts of stars across the cosmic landscape.Amidst this cosmic symphony, life emerges on a pale blue dot called Earth. From the microscopic dance of cells to the majestic migrations of whales, life weaves its intricate patterns. Human minds ponder the mysteries of existence, reaching for the stars with a thirst for knowledge that transcends the boundaries of our terrestrial home As we gaze into the night sky, let us marvel at the wonders that unfold in the grand theater of the universe. For in the cosmic poetry written across the heavens, we find a reflection of our own curiosity and a reminder of the boundless possibilities that await those who dare to explore the infinite reaches of space and time',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-11-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Responsibilities not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'This is a sample string with more than 100 letters. It serves the purpose of demonstrating a text that exceeds the specified length. Feel free to use it for your testing or any other purposes you may have.',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-09-29'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

  
//   it("perk is not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: 'In the vast expanse of the cosmos, where galaxies twirl in cosmic dances and stars flicker like distant lanterns, there exists a profound beauty that captivates the imagination. Nebulas stretch their ethereal arms across the cosmic tapestry, creating celestial paintings that defy the limits of human comprehension. Black holes, mysterious and enigmatic, devour light and time, bending the very fabric of space itself Planets, each a unique world with its own story, orbit their parent stars in a delicate ballet. Moons, faithful companions, cast their silvery glow upon alien landscapes. Meteoroids zip through the cosmic void, leaving trails of stardust in their wake. Supernovae unleash titanic explosions, scattering elements forged in the hearts of stars across the cosmic landscape.Amidst this cosmic symphony, life emerges on a pale blue dot called Earth. From the microscopic dance of cells to the majestic migrations of whales, life weaves its intricate patterns. Human minds ponder the mysteries of existence, reaching for the stars with a thirst for knowledge that transcends the boundaries of our terrestrial home As we gaze into the night sky, let us marvel at the wonders that unfold in the grand theater of the universe. For in the cosmic poetry written across the heavens, we find a reflection of our own curiosity and a reminder of the boundless possibilities that await those who dare to explore the infinite reaches of space and time',
//         last_date: '2024-06-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'Promte Engineer',
//         exp: 2,
//         salary: 10000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-04-23'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Frontend Devloper',
//         exp: 5,
//         salary: 95000,
//         location: 'Pune',
//         Perks: 'Residence',
//         last_date: '2024-08-27'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty job_title.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: '',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-07-21'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty Responsibilities.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: '',
//         exp: 4,
//         salary: 100000,
//         location: 'chennai',
//         Perks: 'Food',
//         last_date: '2024-07-21'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty exp.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: '',
//         salary: 100000,
//         location: 'mumbai',
//         Perks: 'Food',
//         last_date: '2024-07-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });
  
//   it("Empty salary.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: '',
//         location: 'Delhi',
//         Perks: 'Food',
//         last_date: '2024-07-15'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty location.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: '',
//         Perks: 'Food',
//         last_date: '2024-12-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty perk.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: '',
//         last_date: '2024-03-21'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("Empty last_date.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: '',
//         last_date: '',
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("last_date not valid.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'Backend Devloper',
//         exp: 4,
//         salary: 100000,
//         location: 'Delhi',
//         Perks: '',
//         last_date: '2023-03-21'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Software Engineering',
//         Responsibilities: 'senior manager',
//         exp: 5,
//         salary: 1000000,
//         location: 'Delhi',
//         Perks: 'Residence',
//         last_date: '2024-07-25'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

//   it("All valid Field.", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         job_title: 'Computer Engineering',
//         Responsibilities: 'HR manager',
//         exp: 7,
//         salary: 200000,
//         location: 'Gandhinagar',
//         Perks: 'Food',
//         last_date: '2024-04-07'
//       })
//       .end(function (err, res, body) {
//         console.log(res)
//         res.status.should.equal(400);
//         done();
//       });
//   });

// });






































// //User Login
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/login", () => {
//   const host = `http://localhost:3000`;
//   const path = `/login`;

//   it("All Valid Information", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email Upper latter", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'Bhargav.Vidja@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email two times @", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email (Missing @)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidjagmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email ", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Not in database", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'vidja.bhargav@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Password length needs to beetween 8 to 15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'a',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Password length needs to beetween 8 to 15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'Apple@@1212233323232',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one upper later in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one lower later in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPLE@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one number in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPle@@#@df',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one special character in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPle232',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("password length should between 8-15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'Apple@12121212121212121',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("password cant be empty", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: '',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Email cant be empty", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: '', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });
// });






// //Company Login
// let chai = require("chai");
// let chaiHttp = require("chai-http");
// chai.should();
// chai.use(chaiHttp);
// describe("Testing route company/companylogin", () => {
//   const host = `http://localhost:3000`;
//   const path = `/companylogin`;

//   it("All Valid Information", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: '202101201@daiict.ac.in', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email Upper latter", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'Bhargav.Vidja@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email two times @", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email (Missing @)", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidjagmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Invalid Email ", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Not in database", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'vidja.bhargav@gmail.com', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Password length needs to beetween 8 to 15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'a',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Password length needs to beetween 8 to 15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'Apple@@1212233323232',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one upper later in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one lower later in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPLE@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one number in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPle@@#@df',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Need one special character in password", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'APPle232',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("password length should between 8-15", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: 'Apple@12121212121212121',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("password cant be empty", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: 'bhargav.vidja@gmail.com', 
//         password: '',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });

//   it("Email cant be empty", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         email: '', 
//         password: 'Apple@1122',
//       })
//       .end((err, res) => {
//         res.should.have.status(400);
//         res.body.should.be.an("object");
//         done();
//       });
//   });
// });






















































