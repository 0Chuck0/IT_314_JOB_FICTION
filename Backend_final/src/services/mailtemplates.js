var resetPassword = (url, firstname) => {
    return `<!DOCTYPE html>
    <html>
    <head>
    <style>
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: left;
        font-family: Arial, sans-serif;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
      }
      .header {
        background-color: #3498db;
        color: white;
        padding: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .content {
        padding: 20px;
      }
      .button {
        display: inline-block;
        background-color: #2980b9;
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 30px;
      }
      .button:hover {
        background-color: #1f618d;
      }
      .footer {
        background-color: #ecf0f1;
        padding: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #7f8c8d;
      }
      
      @media screen and (max-width: 480px) {
        .container {
          padding: 10px;
        }
        .button {
          display: block;
          margin-top: 20px;
        }
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Forgot Your Password?</h2>
        </div>
        <div class="content">
          <p>Dear ${firstname},</p>
          <p>We received a request to reset your password for your Job seeker website account. Please click the button below to reset your password:</p>
          <a href="${url}" class="button">Reset Password</a>
          <p>If you didn't request to reset your password, please ignore this message or contact our support team.</p>
        </div>
        <div class="footer">
          <p>Best regards,<br>Dabhi Dipak</p>
        </div>
      </div>
    </body>
    </html>
    `;
  };

  var Regverification = (url, firstname) => {
    return `<!DOCTYPE html>
    <html>
    <head>
    <style>
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: left;
        font-family: Arial, sans-serif;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
      }
      .header {
        background-color: #3498db;
        color: white;
        padding: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .content {
        padding: 20px;
      }
      .button {
        display: inline-block;
        background-color: #2980b9;
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 30px;
      }
      .button:hover {
        background-color: #1f618d;
      }
      .footer {
        background-color: #ecf0f1;
        padding: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #7f8c8d;
      }
      
      @media screen and (max-width: 480px) {
        .container {
          padding: 10px;
        }
        .button {
          display: block;
          margin-top: 20px;
        }
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Registration Verification</h2>
        </div>
        <div class="content">
          <p>Dear ${firstname},</p>
          <p>We have received a Your company Registration request.Please click the button below to Verify:</p>
          <p><a href="${url}" class="button">Registration verification </a></p>
          <p>If you didn't request to Registration , please ignore this message or contact our support team.</p>
        </div>
        <div class="footer">
          <p>Best regards,<br>Dabhi Dipak</p>
        </div>
      </div>
    </body>
    </html>
    `;
  };


  var RegisterVerify = (url, firstname) => {
    return `<!DOCTYPE html>
    <html>
    <head>
    <style>
      .container {
        width: 100%;
        max-width: 600px;
        margin: 0 auto;
        padding: 20px;
        text-align: left;
        font-family: Arial, sans-serif;
        border: 1px solid #e6e6e6;
        border-radius: 5px;
      }
      .header {
        background-color: #3498db;
        color: white;
        padding: 20px;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
      }
      .content {
        padding: 20px;
      }
      .button {
        display: inline-block;
        background-color: #2980b9;
        color: white;
        padding: 15px 25px;
        text-decoration: none;
        border-radius: 5px;
        margin-top: 30px;
      }
      .button:hover {
        background-color: #1f618d;
      }
      .footer {
        background-color: #ecf0f1;
        padding: 20px;
        border-bottom-left-radius: 5px;
        border-bottom-right-radius: 5px;
        color: #7f8c8d;
      }
      
      @media screen and (max-width: 480px) {
        .container {
          padding: 10px;
        }
        .button {
          display: block;
          margin-top: 20px;
        }
      }
    </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>Registration Verification</h2>
        </div>
        <div class="content">
          <p>Dear ${firstname},</p>
          <p>We have received a Your Job seeker Registration request.Please click the button below to Verify:</p>
          <p><a href="${url}" class="button">Registration verification </a></p>
          <p>If you didn't request to Registration , please ignore this message or contact our support team.</p>
        </div>
        <div class="footer">
          <p>Best regards,<br>Dabhi Dipak</p>
        </div>
      </div>
    </body>
    </html>
    `;
  };


  var Newjobposted = (data) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Job Opportunity</title>
      <style>
        /* Styles to make the email visually appealing */
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          margin: 0;
          padding: 20px;
          background-color: #F4F4F4;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 30px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }
        h1, h2, p {
          margin-bottom: 20px;
        }
        .job-details {
          border-top: 1px solid #ccc;
          padding-top: 20px;
          margin-top: 20px;
        }
        .footer {
          margin-top: 30px;
          font-size: 14px;
          color: #555;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>New Opportunity at Job Fiction!</h1>
        <div class="job-details">
          <h2>${ data.job_title }</h2>
          <p><strong>Company:</strong> ${ data.company}</p>
          <p><strong>Role:</strong> ${ data.role }</p>
          <p><strong>Experience Required:</strong> ${ data.experience } years</p>
          <p><strong>Skills Required:</strong> ${data.skills}</p>
          <p><strong>Industry Type:</strong> ${data.industry_type }</p>
          <p><strong>Employment Type:</strong> ${ data.employment_type}</p>
          <p><strong>Perks:</strong> ${data.perk}</p>
          <p><strong>Salary:</strong> ${data.salary}</p>
          <p><strong>Location:</strong>${ data.location}</p>
          <p><strong>Last Date to Apply:</strong> ${ data.last_date}</p>
          <p><strong>Degree Required:</strong> ${ data.degree}</p>
          <p><strong>Work Mode:</strong> ${ data.work_mode }</p>
          <p><strong>Contact Email:</strong> ${ data.company_email}</p>
        </div>
        <div class="footer">
          <p><em>Please Do Not Respond back to this E-mail as this is Auto Generated E-mail, contact us at <a href="mailto:jobfiction@gmail.com">jobfiction@gmail.com</a> in case of any doubt.</em></p>
          <p><strong>Regards,<br>Team Job Fiction</strong></p>
          <p><a href="https://localhost:3000/">Visit our website</a></p>
        </div>
      </div>
    </body>
    </html
    `;
  };

  module.exports = {resetPassword , Regverification,RegisterVerify,Newjobposted};