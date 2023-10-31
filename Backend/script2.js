let button1 = document.getElementById('sendotp');

button1.onclick = function(e) {
e.preventDefault();
var mobileno = document.getElementById('Mobileno').value;
    const mobilecheck = /^[789][0-9]{9}$/;

if(mobilecheck.test(mobileno))
{
document.getElementById('forgotsome').innerHTML="";

document.getElementById('forgpass1').innerHTML=
        "<div class=\"mb-3\" id = \"forgotsome2\"> \
        <label for=\"validationDefaultUsername title\" class=\"form-label\"> Enter a OTP</label>\
        <div class=\"input-group\">\
            <input type=\"text\" class=\"form-control\" id=\"receivedotp\" aria-describedby=\"inputGroupPrepend2\" required placeholder=\"Enter a received OTP\">\
        </div>\
    </div>\
    <span id = \"forgotsome3\"> <button type=\"submit\" class=\"btn btn-primary register-btn\" id  =\"verifyotp\" > Verify </button>  </span>\
"
}

let  button2  = document.getElementById('verifyotp');

button2.onclick = function(e2) {
e2.preventDefault();
var otp = document.getElementById('receivedotp').value;
console.log(otp);
    const otpcheck = /^[125][0-9]{5}$/;

if(otpcheck.test(otp))
{
document.getElementById('forgotsome2').innerHTML="";
document.getElementById('forgotsome3').innerHTML="";


document.getElementById('forgpass2').innerHTML=
                "<div class=\"mb-3\">\
                <label for=\"validationDefaultUsername title\" class=\"form-label\"> Enter a New Password</label>\
                <div class=\"input-group\">\
                    <input type=\"text\" class=\"form-control\" id=\"newpassword\" name=\"newpassword\" aria-describedby=\"inputGroupPrepend2\" required placeholder=\"New Password\">\
                </div>\
            </div>\
            <div class=\"mb-3\">\
                <label for=\"validationDefaultUsername title\" class=\"form-label\"> confrim a New Password</label>\
                <div class=\"input-group\">\
                    <input type=\"text\" class=\"form-control\" id=\"conforimpassword\" name=\"conforimpassword\" aria-describedby=\"inputGroupPrepend2\" required placeholder=\"Confrim Password\">\
                </div>\
            </div>\
            <button type=\"submit\" class=\"btn btn-primary register-btn\"> Submit </button>\
";

}

}


const htl="{{#each data}}\
<div class=\"job-card\">\
<div class=\"job-name\">\
   <img src=\"images/Ebay.svg\" alt=\"\" class=\"job-profile\">\
  <div class=\"job-detail\">\
        <h4>{{this.name}}</h4>\
        <h3>Business Development</h3>\
        <p>Bangalore, Hyderabad, Noida</p>\
    </div>\
   </div>\
 <div class=\"job-labels\">\
    <a href=\"#\" class=\"label-a\">₹50000 a month</a>\
    <a href=\"#\" class=\"label-c\">Full-time</a>\
</div>\
<div class=\"job-posted\">\Posted 2 mins ago </div>\
     </div>\
 {{/each}}"


}