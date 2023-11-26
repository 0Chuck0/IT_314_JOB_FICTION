function openNav() {
  document.getElementById("side-nav-bar").style.width = "22em";
  document.body.style.backgroundColor = "rgba(0,0,0,0.)";
  document.getElementById("nav-bar-btn").style.width = "0";
}

function closeNav() {
  document.getElementById("side-nav-bar").style.width = "0";
  document.body.style.backgroundColor = "white";
  document.getElementById("nav-bar-btn").style.width = "3.5rem";
}

const cardsContainer = document.getElementById('cards-container');
const jobLabels = document.querySelectorAll('.job-labels');
