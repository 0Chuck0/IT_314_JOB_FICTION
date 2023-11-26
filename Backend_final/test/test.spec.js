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

//   it("With All valid Credentials", (done) => {
//     chai
//       .request(host)
//       .post(path)
//       .send({
//         name: 'bhargav',
//         email: 'john.doe123@example.co.uk',
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
let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe("Testing route company/companyregister", () => {
  const host = `http://localhost:3000`;
  const path = `/companyregister`;


  it("Error in Password (needs one special character)", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '1234567890',
        email: 'bhargav.vidja@gmail.com',
        password:'Apple1122',
        cpassword: 'Apple1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Password(need atleast one upper case", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '1234567890',
        email: 'bhargav.vidja@gmail.com',
        password:'apple@1122',
        cpassword: 'apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Password(need atleast one lower case", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '1234567890',
        email: 'bhargav.vidja@gmail.com',
        password:'APPLE@1122',
        cpassword: 'APPLE@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Password(need atleast one number)", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '1234567890',
        email: 'bhargav.vidja@gmail.com',
        password:'Apple@aaa',
        cpassword: 'Apple@aaa'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Password needs to have less than 15 character.", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '1234567890',
        email: 'bhargav.vidja@gmail.com',
        password:'Apple@1111111111',
        cpassword: 'Apple@1111111111'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("All valid Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: '202101201@daiict.ac.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(200);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'Bhargav.Vidja@daiict.ac.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'Bhargav.Vidja@daiict..in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmailcom',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail..com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidjacom',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Number field.", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '123456-7890',
        email: 'bhargav.vidja@gmail.com',
        password:'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(200);
        done();
      });
  });

  it("All valid Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat,India',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'john.doe123@example.co.uk',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(200);
        done();
      });
  });

  it("All valid Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat,India',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bob@email123.net',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(200);
        done();
      });
  });

  it("All valid Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat,India',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'invalidemailformat.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Password not matching", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat,India',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'john.doe123@example.co.uk',
        password: 'Apple@1122',
        cpassword: 'Apple@2211'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Number field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '94',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Number field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '12346-7890',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Error in Number field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '12345-67890',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(200);
        done();
      });
  });

  it("Character in Number", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081aa1384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Less than 3 character in Company Name", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'IT',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'Founder',
        number: '9081331384',
        email: 'bharga.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("More than 50 character in Company Name", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'hbehdbcbhcbhyudeuibbcwbchbcbdhjbchjbchdbcnnjkdncdjjknvn',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'Founder',
        number: '9081331384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Less than 3 character in Company Type", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'IT',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'Founder',
        number: '9081331384',
        email: 'bharga.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("More than 40 character in Company Type", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'hbehdbcbhcbhyudeuibbcwbchbcbdhjbchjbchdbcnnjkdncdjjknvn',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'Founder',
        number: '9081331384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("More than 50 character in Designation", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'Chief Executive Officer and President of Global Strategic Operations and Innovations',
        number: '9081331384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("less than 3 character in Designation", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargav',
        employee_designation: 'CE',
        number: '9081331384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });



  it("Empty Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: '',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: '',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Field", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: '',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Location", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: '',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Employee name", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: '',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Designation", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: '',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Number", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: '',
        password: 'Apple@1122',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Password", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: '',
        cpassword: 'Apple@1122'

      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

  it("Empty Confirm Password", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        companyname: 'Apple',
        industrytype: 'Type',
        company_description: 'Description',
        companylocation: 'Gujarat',
        employee_name: 'Bhargv',
        employee_designation: 'Founder',
        number: '9081231384',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: ''
      })
      .end(function (err, res, body) {
        console.log(res)
        res.status.should.equal(400);
        done();
      });
  });

});