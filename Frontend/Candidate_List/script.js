// const path = window.matchMedia("(min-width: 500px)");
let path = screen.width;

function handle() {
    if (window.screen.width<=500) {
        let remv = document.body.getElementsByClassName('candidates-img');
        let length = remv.length;
        let i = 0;
        while (length > 0 && i <= length) {
            remv[i].classList.remove('float-left');
            i++;
        }
        // let xd = document.getElementById('azahar');
        // if(xd.classList.contains('float-left')){
        //     xd.classList.remove('float-left');
        // }
        // else{
        //     alert("Hello");
        // }
    }
    else {
        let remv = document.body.getElementsByClassName('candidates-img');
        let length = remv.length;
        let i = 0;
        while (length > 0 && i <= length) {
            remv[i].classList.add('float-left');
            i++;
        }
    }
}

handle();

window.innerWidth.addEventListener("resize",handle);