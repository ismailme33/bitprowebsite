// BitPro Global Software - Main JavaScript

// Mobile Menu Toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

// Close mobile menu when clicking on a link
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobileMenu');
    if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll('a');

        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        });
    }

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
                // Close mobile menu after clicking
                if (mobileMenu) {
                    mobileMenu.classList.remove('active');
                }
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

    // Enhanced scroll animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe cards with staggered animation
    const cards = document.querySelectorAll('.feature-card, .zatca-card, .zatca-badge');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });

    // Add "animate-in" styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);

    // Animate stats on scroll
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber && !statNumber.classList.contains('counted')) {
                    statNumber.classList.add('counted');
                    animateValue(statNumber);
                }
            }
        });
    }, { threshold: 0.5 });

    document.querySelectorAll('.stat-item').forEach(item => {
        statsObserver.observe(item);
    });

    // Animate number counting
    function animateValue(element) {
        const text = element.textContent;
        const hasPlus = text.includes('+');
        const hasPercent = text.includes('%');
        const number = parseInt(text.replace(/\D/g, ''));

        if (isNaN(number)) return;

        const duration = 2000;
        const frameDuration = 1000 / 60;
        const totalFrames = Math.round(duration / frameDuration);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentNumber = Math.round(number * progress);

            let displayText = currentNumber.toString();
            if (hasPlus) displayText += '+';
            if (hasPercent) displayText += '%';
            if (text.includes('/')) displayText = '24/7';

            element.textContent = displayText;

            if (frame === totalFrames) {
                clearInterval(counter);
                element.textContent = text;
            }
        }, frameDuration);
    }

    // Parallax effect for decorative elements
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.hero::before, .hero::after');

        parallaxElements.forEach((element, index) => {
            const speed = (index + 1) * 0.5;
            element.style.transform = `translateY(${scrolled * speed}px)`;
        });
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
