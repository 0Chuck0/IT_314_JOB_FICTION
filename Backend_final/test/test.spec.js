let chai = require("chai");
let chaiHttp = require("chai-http");
chai.should();
chai.use(chaiHttp);
describe("Testing route company/register", () => {
  const host = `http://localhost:3000`;
  const path = `/register`;

  it("With All valid Credentials", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'bhargav.vidja@daiict.ac.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
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
        name: 'bhargav',
        email: '202101201daiict.ac.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
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
        name: 'bhargav',
        email: '202101201@',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
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
        name: 'bhargav',
        email: '202101182@daiict',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
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
        name: 'bhargav',
        email: '202101182@.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
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
        name: 'Bhargva',
        email: '202101201daiict.ac.in',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("Invalid Email Upper latter", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'Bhargav.Vidja@gmail.com', 
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("With Empty Name", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: '', 
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("With Invalid Gender", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'invalid', 
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  

  it("With Password Mismatch", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'MismatchedPassword', // Passwords don't match
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("With Missing Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: '',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'invalidemailformat.com', // Invalid email format (missing '@')
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("Invalid Email", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'invalidemailformat@', // Invalid email format (missing domain)
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '9999999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

  it("Phone number with lower than 10 digit", (done) => {
    chai
      .request(host)
      .post(path)
      .send({
        name: 'bhargav',
        email: 'bhargav.vidja@gmail.com',
        password: 'Apple@1122',
        cpassword: 'Apple@1122',
        number: '999999',
        DOB: '2023-11-25',
        gender: 'male',
      })
      .end((err, res) => {
        res.should.have.status(400);
        res.body.should.be.an("object");
        done();
      });
  });

});

