document.addEventListener("DOMContentLoaded", async() => {

    //data will be dynamically fetched
    const data = [
        "Software Engineer",
        "Data Analyist",
        "Data Scientist",
        "SDE 1",
        "Chartered Accountant",
        "Google"
    ]

    async function getData(){
        let response = await fetch(URL);
        let response_json = response.json();

        //process data and change it into desired format
        
        return data;
    }

    const Data = await getData();
    let jobTitle = document.getElementById("job-title-dropdown");
    for (let x in data) 
    {
        const option = document.createElement("option");
        option.setAttribute('value',data[x]);
        let optionText = document.createTextNode(data[x]);
        option.appendChild(optionText);
        jobTitle.appendChild(option);
    }


})