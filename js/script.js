// DOM Ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    initMobileMenu();
    
    // FAQ accordions
    initFAQAccordions();
    
    // Form validation
    initFormValidation();
    
    // Smooth scrolling for anchor links
    initSmoothScrolling();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const toggleButton = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (toggleButton && nav) {
        toggleButton.addEventListener('click', function() {
            nav.classList.toggle('active');
            
            // Animate hamburger to X
            const spans = toggleButton.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
}

// FAQ Accordion Functionality
function initFAQAccordions() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            answer.classList.toggle('active');
        });
    });
}

// Form Validation
function initFormValidation() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Basic validation
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const subject = document.getElementById('subject');
            const message = document.getElementById('message');
            
            let isValid = true;
            
            if (!name.value.trim()) {
                showError(name, 'Name is required');
                isValid = false;
            } else {
                clearError(name);
            }
            
            if (!email.value.trim() || !isValidEmail(email.value)) {
                showError(email, 'Valid email is required');
                isValid = false;
            } else {
                clearError(email);
            }
            
            if (!subject.value.trim()) {
                showError(subject, 'Subject is required');
                isValid = false;
            } else {
                clearError(subject);
            }
            
            if (!message.value.trim()) {
                showError(message, 'Message is required');
                isValid = false;
            } else {
                clearError(message);
            }
            
            if (isValid) {
                // In a real application, you would submit the form here
                alert('Thank you for your message! We will get back to you soon.');
                contactForm.reset();
            }
        });
    }
}

// Email validation helper
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Show error message
function showError(input, message) {
    const formGroup = input.parentElement;
    let error = formGroup.querySelector('.error-message');
    
    if (!error) {
        error = document.createElement('div');
        error.className = 'error-message';
        formGroup.appendChild(error);
    }
    
    error.textContent = message;
    input.style.borderColor = 'var(--danger)';
}

// Clear error message
function clearError(input) {
    const formGroup = input.parentElement;
    const error = formGroup.querySelector('.error-message');
    
    if (error) {
        error.remove();
    }
    
    input.style.borderColor = '#ddd';
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70, // Account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Skills filtering (for browse page)
function filterSkills() {
    // This would be implemented with real data in a production environment
    console.log('Filtering skills...');
}

// Skill search functionality
function searchSkills() {
    // This would be implemented with real data in a production environment
    console.log('Searching skills...');
}