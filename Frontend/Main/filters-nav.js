document.addEventListener("DOMContentLoaded", () => {
    
    setTimeout(() => {
        set_wrap_width();
    }, 10);

    let filter_btn = document.getElementById("filter-nav-btn");
    filter_btn.addEventListener("click", open_filters);
    let filter_apply = document.getElementById("filter-nav-apply");
    filter_apply.addEventListener("click", close_filters);
    document.getElementById("filter-nav-apply").style.display = "none";

    window.addEventListener("resize",set_wrap_width);
   
    
})
function open_filters() {
   setTimeout(() => {
        set_wrap_width();
    }, 10);
    document.getElementById("filter-nav-apply").style.display = "block";
    let filter_container = document.getElementById("form-class");
    filter_container.className = "col col-sm-6 filters-show";
    document.getElementById("jobListing-container").style.display = "none";
}

function close_filters() {
    document.getElementById("filter-nav-apply").style.display = "none";
    let filter_container = document.getElementById("form-class");
    filter_container.className = "col-4 form-class";
    document.getElementById("jobListing-container").style.display = "block";
}

function set_wrap_width(){
    let wrap_width = document.getElementById("wrap-width").offsetWidth;
    console.log(wrap_width);
    const filter_list = document.querySelectorAll(".options-wrap");
    for (let x in filter_list) {
        if(x!=5){
        filter_list[x].style.width = wrap_width + "px";
        console.log(wrap_width + "px");
        }
    }
}