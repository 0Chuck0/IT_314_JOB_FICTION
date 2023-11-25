document.addEventListener("DOMContentLoaded", () => {


    /*=============== RANGE SLIDER JS ===============*/
    const rangeThumb = document.getElementById('range-thumb'),
        rangeNumber = document.getElementById('range-number'),
        rangeLine = document.getElementById('range-line'),
        rangeInput = document.getElementById('range-input')

    const rangeInputSlider = () => {
        // Insert the value of the input range
        rangeNumber.textContent = rangeInput.value

        // Calculate the position of the input thumb
        // rangeInput.value = 50, rangeInput.max = 100, (50 / 100 = 0.5)
        // rangeInput.offsetWidth = 248, rangeThumb.offsetWidth = 32, (248 - 32 = 216)
        const thumbPosition = (rangeInput.value / rangeInput.max),
            space = rangeInput.offsetWidth - rangeThumb.offsetWidth

        // We insert the position of the input thumb
        // thumbPosition = 0.5, space = 216 (0.5 * 216 = 108)
        rangeThumb.style.left = (thumbPosition * space) + 'px'

        // We insert the width to the slider with the value of the input value
        // rangeInput.value = 50, ancho = 50%
        rangeLine.style.width = rangeInput.value + '%'

        // We call the range input
        rangeInput.addEventListener('input', rangeInputSlider)
        rangeNumber.textContent = rangeInput.value / 20
    }
    rangeInputSlider();

    //Dynamic height of the job-card container
    let filter_container = document.querySelector("#filter-form");
    let job_container = document.querySelector(".scroll");

    job_container.style.height = getComputedStyle(filter_container).height;


    const Joblistcontainer = document.getElementById('jobListing-container');
    const jobListingTemplate = Handlebars.compile(document.getElementById('job-template').innerHTML);

    // Define the func function outside of the event listener
    async function display_jobs() {
        try {
            const formdata = new URLSearchParams(new FormData(document.getElementById("filter-form")));
            const response = await fetch("http://localhost:3000/jobs_1", {
                method: "post",
                body: formdata,
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE ERROR");
                }
            }).then(datas => {
                console.log(datas);
                Joblistcontainer.innerHTML = "";
                // Loop through the job data and populate the HTML container
                datas.forEach((job) => {
                    // Create a new job listing using the Handlebars template
                    var jobListingHtml = jobListingTemplate(job);
                    // Append the job listing to the container
                    Joblistcontainer.insertAdjacentHTML('beforeend', jobListingHtml);
                });
            }).catch((error) => console.error("FETCH ERROR:", error));
        } catch (err) {
            console.log(err);
        }
    }
    //------------------------search bar & filters-----------------------//
    url_str = window.location.href;
    let len = url_str.length;
    let main_str = url_str.slice(url_str.lastIndexOf("?") + 1, len).toLowerCase();

    console.log(main_str);

    let job_title = main_str.slice(main_str.indexOf("=") + 1, main_str.indexOf("&"));
    main_str = main_str.slice(main_str.indexOf("&") + 1, len);

    let region = main_str.slice(main_str.indexOf("=") + 1, main_str.indexOf("&"));
    main_str = main_str.slice(main_str.indexOf("&") + 1, len);

    let work_type = main_str.slice(main_str.indexOf("=") + 1, len);

    job_title = job_title.replaceAll("+", " ");

    function replaceChar(origString, replaceChar, index) {
        replaceChar = replaceChar.toUpperCase();
        let firstPart = origString.substr(0, index);
        let lastPart = origString.substr(index + 1);

        let newString = firstPart + replaceChar + lastPart;
        return newString;
    }

    for (let i = 0; i <= job_title.length; i++) {
        if (i == 0) {
            job_title = replaceChar(job_title, job_title.charAt(i), i);
        }

        if (job_title.charAt(i) == " " && job_title.charAt(i + 1) != " ") {
            job_title = replaceChar(job_title, job_title.charAt(i + 1), i + 1);
        }

    }
    console.log(job_title);
    console.log(region);
    console.log(work_type);



    if (region == "anywhere") {

        for (let i = 1; i <= 5; i++) {
            document.getElementById("f2-opt" + i).checked = true;
            display_jobs();
        }
    }

    for (let i = 1; i <= 5; i++) {
        if (i <= 4 && document.getElementById("f1-opt" + i).value == job_title && i <= 4) {
            document.getElementById("f1-opt" + i).checked = true;
            display_jobs();
        }
        if (i <= 4 && document.getElementById("f5-opt" + i).value == job_title && i <= 4) {
            document.getElementById("f5-opt" + i).checked = true;
            display_jobs();
        }

        if (i <= 5 && document.getElementById("f2-opt" + i).value == region) {
            document.getElementById("f2-opt" + i).checked = true;
            display_jobs();
        }
        if (i <= 3 && document.getElementById("f3-opt" + i).value == work_type) {
            document.getElementById("f3-opt" + i).checked = true;
            display_jobs();
        }

    }
    // Assign the func function to the onchange event
    document.getElementById("filter-form").onchange = display_jobs;

    //setting the dropdown
    document.querySelector("#search-bar").addEventListener("submit", function (event) {
        event.preventDefault();
    });
    
    function set_filters(){
        let job_title = document.getElementById("job-title-dropdown").value;
        document.getElementById("job-title-company").value = job_title;
        
        let region_input = document.getElementById("region-dropdown").value;
        document.getElementById("region-input").value = region_input;

        let work_mode_input = document.getElementById("work-mode-dropdown").value;
        document.getElementById("work-mode-input").value =  work_mode_input;

        // console.log(document.getElementById("job-title-company").value);
        // console.log(document.getElementById("region-input").value);
        // console.log(document.getElementById("work-mode-input").value);

        //uncheck all the boxes first
        let all_checkboxes = document.getElementsByName("checkboxes");
        for(let i=0; i < all_checkboxes.length;i++){
            all_checkboxes[i].checked = false;
        }

        let region = document.getElementById("region-dropdown").value.toLowerCase();
        let work_type = document.getElementById("work-mode-dropdown").value.toLowerCase();

        if (region == "anywhere") {

            for (let i = 1; i <= 5; i++) {
                document.getElementById("f2-opt" + i).checked = true;
            }
        }

        for (let i = 1; i <= 5; i++) {
            if (i <= 4 && document.getElementById("f1-opt" + i).value == job_title) {
                document.getElementById("f1-opt" + i).checked = true;
            }
            if (i <= 4 && document.getElementById("f5-opt" + i).value == job_title && i <= 4) {
                document.getElementById("f5-opt" + i).checked = true;
            }
            if (i <= 5 && document.getElementById("f2-opt" + i).value == region) {
                document.getElementById("f2-opt" + i).checked = true;
            }
            if (i <= 3 && document.getElementById("f3-opt" + i).value == work_type) {
                document.getElementById("f3-opt" + i).checked = true;
            }

        }
        display_jobs();
    }
    document.getElementById("search-bar").onsubmit = set_filters;


})