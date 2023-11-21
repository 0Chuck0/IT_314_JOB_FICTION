const optionMenu1 = document.querySelector(".dropdown1"),
       selectBtn1 = optionMenu1.querySelector(".select-btn1"),
       options1 = optionMenu1.querySelectorAll(".option1"),
       sBtn_text1 = optionMenu1.querySelector(".sBtn-text1");

selectBtn1.addEventListener("click", () => optionMenu1.classList.toggle("active"));       

options1.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text1.innerText = selectedOption;

        optionMenu1.classList.remove("active");
    });
});

const optionMenu2 = document.querySelector(".dropdown2"),
       selectBtn2 = optionMenu2.querySelector(".select-btn2"),
       options2 = optionMenu2.querySelectorAll(".option2"),
       sBtn_text2 = optionMenu2.querySelector(".sBtn-text2");

selectBtn2.addEventListener("click", () => optionMenu2.classList.toggle("active"));       

options2.forEach(option =>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text2.innerText = selectedOption;

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

        optionMenu.classList.remove("active");
    });
});

function viewmenu(){
    document.getElementById('hideshow').classList.toggle('hide');
    let val = hideandshow();
}

function hideandshow(){
    document.getElementById('showmenu').classList.toggle('active');
}