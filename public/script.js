// BitPro Global Software - Main JavaScript

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        });
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll effect to navbar
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // Add animation on scroll for cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all cards
    document.querySelectorAll('.feature-card, .zatca-card, .stat-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Handle CTA button clicks (placeholder for future functionality)
document.addEventListener('DOMContentLoaded', function() {
    const trialButtons = document.querySelectorAll('button');

    trialButtons.forEach(button => {
        if (button.textContent.includes('Free Trial') || button.textContent.includes('Start Free Trial')) {
            button.addEventListener('click', function() {
                alert('Free trial registration coming soon! Contact us at info@bitproglobal.com');
            });
        }

        if (button.textContent.includes('Demo') || button.textContent.includes('Watch Demo')) {
            button.addEventListener('click', function() {
                alert('Demo video coming soon! Contact us to schedule a live demo.');
            });
        }

        if (button.textContent.includes('Schedule a Demo')) {
            button.addEventListener('click', function() {
                alert('To schedule a demo, please contact us at info@bitproglobal.com or call +966 XX XXX XXXX');
            });
        }
    });
});
