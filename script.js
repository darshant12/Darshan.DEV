document.addEventListener('DOMContentLoaded', () => {
    
    // --- Mobile Menu Toggle ---
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-links');

    mobileMenu.addEventListener('click', () => {
        mobileMenu.classList.toggle('is-active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('is-active');
            navMenu.classList.remove('active');
        });
    });

    // --- Scroll Animations (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // Stop observing once it's shown
            }
        });
    }, observerOptions);

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach(el => observer.observe(el));

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Name validation
            const nameInput = document.getElementById('name');
            const nameGroup = nameInput.parentElement;
            if (nameInput.value.trim() === '') {
                nameGroup.classList.add('error');
                isValid = false;
            } else {
                nameGroup.classList.remove('error');
            }
            
            // Email validation
            const emailInput = document.getElementById('email');
            const emailGroup = emailInput.parentElement;
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            
            if (emailInput.value.trim() === '' || !emailPattern.test(emailInput.value)) {
                emailGroup.classList.add('error');
                isValid = false;
            } else {
                emailGroup.classList.remove('error');
            }
            
            // Message validation
            const messageInput = document.getElementById('message');
            const messageGroup = messageInput.parentElement;
            if (messageInput.value.trim() === '') {
                messageGroup.classList.add('error');
                isValid = false;
            } else {
                messageGroup.classList.remove('error');
            }
            
            // Success State
            if (isValid) {
                const successMsg = document.getElementById('form-success');
                successMsg.style.display = 'block';
                
                // Reset form
                contactForm.reset();
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMsg.style.display = 'none';
                }, 5000);
            }
        });
    }

    // --- Dynamic Navbar Background on Scroll ---
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.5)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

});
