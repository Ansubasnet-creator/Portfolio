// MENU TOGGLE
const menuButton = document.getElementById('menu-button');
const navLinks = document.querySelector('.nav-links');

function toggleMenu() {
    navLinks.classList.toggle('open');
    const isExpanded = navLinks.classList.contains('open');
    menuButton.setAttribute('aria-expanded', isExpanded);
    menuButton.innerHTML = isExpanded ? '✕' : '☰';
}

menuButton.addEventListener('click', toggleMenu);

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('open')) toggleMenu();
    });
});

// FORM VALIDATION
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name').value.trim();
    const emailInput = document.getElementById('email').value.trim();
    const messageInput = document.getElementById('message').value.trim();

    if (nameInput === '' || emailInput === '' || messageInput === '') {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.style.color = 'red';
    } else {
        formMessage.textContent = 'Thank you for your message! I will be in touch shortly.';
        formMessage.style.color = 'lightgreen';
        contactForm.reset();
    }
});
