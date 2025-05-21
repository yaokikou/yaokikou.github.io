// Menu toggle for mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('nav').classList.toggle('active');
});

// Form validation for newsletter
document.querySelector('#newsletter form').addEventListener('submit', function(e) {
    const email = document.querySelector('#newsletter input[type="email"]').value;
    if (!email) {
        e.preventDefault();
        alert('Veuillez entrer une adresse email valide');
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});