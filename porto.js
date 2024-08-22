// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const navbar = document.getElementById('navbar');
const colors = ['#ff0000', '#00ff00', '#0000ff']; // Red, Green, Blue
let currentColor = 0;

function changeColor() {
  navbar.style.backgroundColor = colors[currentColor];
  currentColor = (currentColor + 1) % colors.length;
}

setInterval(changeColor, 1000); // Change color every second