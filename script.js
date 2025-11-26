// RANDOM WORDPRESS FACTS
const facts = [
  "WordPress was first released in 2003.",
  "WordPress powers over 43% of all websites on the internet.",
  "WordPress is written in PHP and uses MySQL.",
  "WooCommerce is the most popular eCommerce plugin for WordPress.",
  "There are over 60,000 free plugins in the WordPress directory.",
  "WordPress themes control the design of your website."
];
//fact using api

const factBtn = document.getElementById("factBtn");
const factText = document.getElementById("factText");

factBtn.addEventListener("click", () => {
  fetch('https://dummyjson.com/quotes/random')
    .then(res => res.json())
    .then(data => {
      // data is a single random quote
      factText.textContent = `${data.quote}`;
    })
    .catch(err => console.error("Error fetching quote:", err));
});

//navbar in mobile
document.getElementById("menuToggle").addEventListener("click", function() {
  document.getElementById("navLinks").classList.toggle("active");
});

// SMOOTH SCROLL AND HIGHLIGHT CARD
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
