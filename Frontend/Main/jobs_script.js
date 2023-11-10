document.addEventListener("DOMContentLoaded", () => {
    url_str = window.location.href;
    let len = url_str.length;
    let main_str = url_str.slice(url_str.lastIndexOf("?") + 1, len).toLowerCase();

    console.log(main_str);

    let job_title = main_str.slice(main_str.indexOf("=") + 1, main_str.indexOf("&"));
    main_str = main_str.slice(main_str.indexOf("&") + 1, len);

    let region = main_str.slice(main_str.indexOf("=") + 1, main_str.indexOf("&"));
    main_str = main_str.slice(main_str.indexOf("&") + 1, len);

    let work_type = main_str.slice(main_str.indexOf("=") + 1, len);

    console.log(job_title);
    console.log(region);
    console.log(work_type);

    if (region == "anywhere") {
        for (let i = 1; i <= 5; i++) 
        {
            document.getElementById("f2-opt" + i).checked = true;
        }
    }
    
    for (let i = 1; i <= 5; i++) {
    if (i <= 4 && document.getElementById("f1-opt" + i).value == job_title && i <= 4) {
        document.getElementById("f1-opt" + i).checked = true;
    }
    if (i <= 5 && document.getElementById("f2-opt" + i).value == region) {
        document.getElementById("f2-opt" + i).checked = true;
    }
    if (i <= 3 && document.getElementById("f3-opt" + i).value == work_type) {
        document.getElementById("f3-opt" + i).checked = true;
    }
}

})