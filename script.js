// Random wordpress facts using api
const factBtn = document.getElementById("factBtn");
const factText = document.getElementById("factText");

factBtn.addEventListener("click", () => {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      // Data is a single random quote
      factText.textContent = `${data.quote}`;
    })
    .catch(err => console.error("Error fetching quote:", err));
});

//Navbar in mobile
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("active");
});

// Smooth scroll and highlighting card
document.querySelectorAll('.section-index a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetCard = document.querySelector(targetId);
    targetCard.scrollIntoView({ behavior: 'smooth' });

    targetCard.classList.add('highlight-card');
    setTimeout(() => {
      targetCard.classList.remove('highlight-card');
    }, 1000); 
  });
});
