// const optionMenu1 = document.querySelector(".dropdown1"),
//        selectBtn1 = optionMenu1.querySelector(".select-btn1"),
//        options1 = optionMenu1.querySelectorAll(".option1"),
//        sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

// selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));       

// options1.forEach(option =>{
//     option.addEventListener("click", ()=>{
//         let selectedOption = option.querySelector(".option-text").innerText;
//         sBtn_text1.innerText = selectedOption;

//         optionMenu1.classList.remove("active");
//     });
// });

const optionMenu2 = document.querySelector(".dropdown2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption;
        alias6(selectedOption);
        optionMenu2.classList.remove("active");
    });
});

const optionMenu = document.querySelector(".dropdown3"),
       selectBtn = optionMenu.querySelector(".select-btn3"),
       options = optionMenu.querySelectorAll(".option3"),
       sBtn_text = optionMenu.querySelector(".sBtn-text3");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       

options.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        alias7(selectedOption);
        optionMenu.classList.remove("active");
    });
});

const optionMenu3 = document.querySelector(".dropdown4"),
       selectBtn3 = optionMenu3.querySelector(".select-btn4"),
       options3 = optionMenu3.querySelectorAll(".option4"),
       sBtn_text3 = optionMenu3.querySelector(".sBtn-text4");

selectBtn3.addEventListener("click", () => optionMenu3.classList.toggle("active"));       

options3.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text3.innerText = selectedOption;
        
        optionMenu3.classList.remove("active");
    });
});

function alias6(selectedOption) {
    // console.log(selectedOption);
    document.getElementById("sBtn-text6").innerHTML = selectedOption
}

function alias7(selectedOption) {
    // console.log(selectedOption);
    document.getElementById("sBtn-text7").innerHTML = selectedOption
}