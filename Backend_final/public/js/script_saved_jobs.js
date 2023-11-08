document.addEventListener("DOMContentLoaded", () => {

    const Joblistcontainer = document.getElementById('jobListing-container');
    const jobListingTemplate = Handlebars.compile(document.getElementById('job-template').innerHTML);

    // Define the func function outside of the event listener
    async function func() {
        try {
            const formdata = new URLSearchParams(new FormData(document.getElementById("filter-form")));
            const response = await fetch("http://localhost:3000/jobs_1", {
                method: "get",
                body: formdata,
            }).then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE ERROR");
                }
            }).then(datas => {
                console.log(datas);
                Joblistcontainer.innerHTML ="";
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
    document.getElementById("filter-form").onchange = func;
})