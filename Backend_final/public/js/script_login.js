document.addEventListener("DOMContentLoaded",function()
{
    //Change the password input type to text when clicked on eye
    document.getElementById("eye-icon").addEventListener("click",function()
    {
        let input = document.getElementById("password-input");
        let eye_class = document.getElementById("eye-icon");
        if(eye_class.className === "bx bx-hide eye-icon"){
            eye_class.className = "bx bx-show eye-icon";
            input.type = "text";
        }
        else{
            eye_class.className = "bx bx-hide eye-icon";
            input.type = "password";
        }
    })
})