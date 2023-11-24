document.addEventListener("DOMContentLoaded",() => {

    //data will be dynamically fetched
    const data_job_title = [
        "Software Engineer",
        "Data Analyist",
        "Data Scientist",
        "SDE 1",
        "Chartered Accountant",
        "Google"
    ]

    const data_region= [
        "Anywhere","Bengaluru","Pune","Hyderabad","Gurgaon","Gandhinagar"
    ]

    const data_work_mode= [
        "Home","Office","Remote","Hybrid"
    ]

    // async function getData(){
    //     let response = await fetch(URL);
    //     let response_json = response.json();

    //     //process data and change it into desired format
        
    //     return data;
    // }

    // const Data = await getData();
    let jobTitle = document.getElementById("job-title-dropdown");
    for (let x in data_job_title) 
    {
        const option = document.createElement("option");
        option.setAttribute('value',data_job_title[x]);
        let optionText = document.createTextNode(data_job_title[x]);
        option.appendChild(optionText);
        jobTitle.appendChild(option);
    }

    let Region_dd = document.getElementById("region-dropdown");
    for (let x in data_region) 
    {
        const option = document.createElement("option");
        option.setAttribute('value',data_region[x]);
        let optionText = document.createTextNode(data_region[x]);
        option.appendChild(optionText);
        Region_dd.appendChild(option);
    }

    let work_mode_dd = document.getElementById("work-mode-dropdown");
    for (let x in data_work_mode ) 
    {
        const option = document.createElement("option");
        option.setAttribute('value',data_work_mode[x]);
        let optionText = document.createTextNode(data_work_mode[x]);
        option.appendChild(optionText);
        work_mode_dd.appendChild(option);
    }
})