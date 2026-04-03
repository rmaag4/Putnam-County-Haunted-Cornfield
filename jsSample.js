// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        // Only override internal anchors that start with '#'
        if (!href || !href.startsWith('#')) {
            return; // allow normal navigation for page links
        }

        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic greeting message in the hero section
const heroSection = document.querySelector('.hero h1');
const hours = new Date().getHours();
let greeting;

if (hours < 12) {
    greeting = "The Putnam County Haunted Cornfield!";
} else if (hours < 18) {
    greeting = "The Putnam County Haunted Cornfield!";
} else {
    greeting = "The Putnam County Haunted Cornfield!";
}

if (heroSection) {
    heroSection.textContent = greeting;
}

// Form validation for the contact form
const contactForm = document.querySelector('#contact form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill out all fields before submitting.');
            return;
        }

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Helper function to validate email format
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}