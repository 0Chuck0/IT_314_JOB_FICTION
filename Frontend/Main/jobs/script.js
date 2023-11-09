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
        rangeNumber.textContent = rangeInput.value/20
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
            const response = await fetch("http://localhost:5000/jobs_main", {
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

    // Assign the func function to the onchange event
    document.getElementById("filter-form").onchange = display_jobs;
})