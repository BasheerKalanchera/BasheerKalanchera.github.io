// ==========================================
// ZABISK Portfolio - Agency Style JS
// ==========================================

document.addEventListener('DOMContentLoaded', function () {

    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');

            // Animate hamburger menu
            const spans = menuToggle.querySelectorAll('span');
            if (navLinks.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }

    // ==========================================
    // Smooth Scrolling for Navigation Links
    // ==========================================
    const allNavLinks = document.querySelectorAll('a[href^="#"]');

    allNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Close mobile menu if open
                if (navLinks && navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                    const spans = menuToggle.querySelectorAll('span');
                    spans[0].style.transform = 'none';
                    spans[1].style.opacity = '1';
                    spans[2].style.transform = 'none';
                }

                // Smooth scroll to target
                const headerOffset = 100;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ==========================================
    // Header Shadow on Scroll
    // ==========================================
    const header = document.getElementById('header');

    function updateHeaderShadow() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 2px 12px rgba(0, 0, 0, 0.06)';
        }
    }

    window.addEventListener('scroll', updateHeaderShadow);

    // ==========================================
    // Horizontal Scroll Enhancement (Optional)
    // ==========================================
    const scrollContainers = document.querySelectorAll('.horizontal-scroll');

    scrollContainers.forEach(container => {
        // Add mouse wheel horizontal scroll support ONLY when hovering and has scrollable content
        container.addEventListener('wheel', (e) => {
            const hasHorizontalScroll = container.scrollWidth > container.clientWidth;

            // Only convert vertical scroll to horizontal if there's content to scroll
            if (hasHorizontalScroll && e.deltaY !== 0) {
                // Check if we're at the edges
                const isAtStart = container.scrollLeft === 0;
                const isAtEnd = container.scrollLeft + container.clientWidth >= container.scrollWidth - 1;

                // Only prevent default if we can actually scroll in the intended direction
                if ((e.deltaY > 0 && !isAtEnd) || (e.deltaY < 0 && !isAtStart)) {
                    e.preventDefault();
                    container.scrollLeft += e.deltaY;
                }
            }
        });

        // Add smooth momentum scrolling indicator
        let isScrolling;
        container.addEventListener('scroll', () => {
            window.clearTimeout(isScrolling);
            container.style.scrollBehavior = 'smooth';

            isScrolling = setTimeout(() => {
                // Scroll complete
            }, 66);
        });
    });

    // ==========================================
    // Fade-in Animation on Scroll
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.project-category, .about-minimal, .contact-minimal');
    animateElements.forEach(el => observer.observe(el));

    // ==========================================
    // Smooth Page Load
    // ==========================================
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);

    // ==========================================
    // Console Message
    // ==========================================
    console.log('%c✨ ZABISK Portfolio', 'font-size: 20px; font-weight: bold; color: #FF8C42;');
    console.log('%cInterested in working together?', 'font-size: 14px; color: #6B5D4F;');
    console.log('%c📧 basheer@zabisk.com', 'font-size: 14px; color: #FF8C42; font-weight: bold;');
});

// ==========================================
// Prevent Default for Empty Links
// ==========================================
document.addEventListener('click', function (e) {
    if (e.target.tagName === 'A' && e.target.getAttribute('href') === '#') {
        e.preventDefault();
    }
});

// ==========================================
// Email Reveal Function
// ==========================================
function revealEmail() {
    window.location.href = 'mailto:basheer@zabisk.com';
}
