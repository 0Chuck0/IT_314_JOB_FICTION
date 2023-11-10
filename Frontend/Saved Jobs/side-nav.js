function openNav() {
    document.getElementById("side-nav-bar").style.width = "20rem";
    document.getElementById("main").style.marginRight = "20rem";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    document.getElementById("nav-bar-btn").style.width="0";
    setTimeout(()=>{
        document.getElementById("nav-bar-btn").style.display="none";
    },200);
  }
  
  function closeNav() {
    document.getElementById("side-nav-bar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
    document.body.style.backgroundColor = "white";
    document.getElementById("nav-bar-btn").style.width="3.5rem";
    document.getElementById("nav-bar-btn").style.display="block";
  }