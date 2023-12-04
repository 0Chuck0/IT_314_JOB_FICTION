
document.addEventListener("DOMContentLoaded", () => {

    const unsaved = document.getElementsByClassName("saved");
    for (let x of unsaved) {
        x.addEventListener("click", () => {
            let classname = x.className;
            if (classname == "far fa-bookmark saved")
                x.className = "fas fa-bookmark saved";
            else
                x.className = "far fa-bookmark saved";
        })
    }
})