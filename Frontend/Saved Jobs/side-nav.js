
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

// Create a ResizeObserver instance
const resizeObserver = new ResizeObserver(entries => {
  for (const entry of entries) {
    // Check if the width has changed
    console.log(entry.contentRect.width);
      // Change the display property based on your condition
      if (entry.contentRect.width < 600) {
        jobLabels.forEach(element => {
          element.style.display = 'none';
        });
      } else {
        jobLabels.forEach(element => {
          element.style.display = 'block';
        });
      } 
  }
});

// Start observing the target element
resizeObserver.observe(cardsContainer);