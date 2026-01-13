// Modern Portfolio JavaScript - Vraj Parmar

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ========================================
    // Preloader
    // ========================================
    window.addEventListener('load', function() {
        const preloader = document.getElementById('preloader');
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // ========================================
    // Navigation
    // ========================================
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // Active nav link on scroll
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveLink() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-link[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink);

    // ========================================
    // Particles.js Background
    // ========================================
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#6366f1'
                },
                shape: {
                    type: 'circle'
                },
                opacity: {
                    value: 0.5,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: true,
                        speed: 2,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#6366f1',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'grab'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 140,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    push: {
                        particles_nb: 4
                    }
                }
            },
            retina_detect: true
        });
    }

    // ========================================
    // Typed.js - Hero Typing Effect
    // ========================================
    if (typeof Typed !== 'undefined') {
        const typed = new Typed('.typing-text', {
            strings: [
                'Full-Stack Developer',
                'Python Developer',
                'Django Expert',
                'PHP Developer',
                'Web Developer',
                'Problem Solver'
            ],
            typeSpeed: 80,
            backSpeed: 50,
            backDelay: 2000,
            loop: true,
            showCursor: true,
            cursorChar: '|'
        });
    }

    // ========================================
    // AOS - Animate On Scroll
    // ========================================
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-in-out',
            once: true,
            mirror: false
        });
    }

    // ========================================
    // Portfolio Filter
    // ========================================
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                if (filterValue === 'all') {
                    item.classList.remove('hide');
                    setTimeout(() => {
                        item.style.display = 'block';
                    }, 10);
                } else {
                    if (item.getAttribute('data-category') === filterValue) {
                        item.classList.remove('hide');
                        setTimeout(() => {
                            item.style.display = 'block';
                        }, 10);
                    } else {
                        item.classList.add('hide');
                        setTimeout(() => {
                            item.style.display = 'none';
                        }, 300);
                    }
                }
            });
        });
    });

    // ========================================
    // Skill Progress Animation
    // ========================================
    function animateSkills() {
        const skillSection = document.querySelector('.resume-section');
        const skillProgress = document.querySelectorAll('.skill-progress');
        
        if (skillSection) {
            const sectionTop = skillSection.offsetTop;
            const sectionHeight = skillSection.offsetHeight;
            const scrollY = window.pageYOffset;
            
            if (scrollY > sectionTop - window.innerHeight + 200 && scrollY < sectionTop + sectionHeight) {
                skillProgress.forEach(progress => {
                    if (!progress.classList.contains('animated')) {
                        const width = progress.style.width;
                        progress.style.width = '0';
                        setTimeout(() => {
                            progress.style.width = width;
                            progress.classList.add('animated');
                        }, 100);
                    }
                });
            }
        }
    }

    window.addEventListener('scroll', animateSkills);

    // ========================================
    // Scroll to Top Button
    // ========================================
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // ========================================
    // Smooth Scrolling for Navigation Links
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const offsetTop = target.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // Contact Form Handler
    // ========================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const subject = formData.get('subject');
            const message = formData.get('message');
            
            // Here you can add your form submission logic
            // For now, we'll just show an alert
            alert(`Thank you ${name}! Your message has been sent. I'll get back to you soon!`);
            
            // Reset form
            this.reset();
        });
    }

    // ========================================
    // Counter Animation for Stats
    // ========================================
    function animateCounter() {
        const counters = document.querySelectorAll('.stat-card h4');
        const speed = 200;
        
        counters.forEach(counter => {
            const target = parseInt(counter.innerText);
            const increment = target / speed;
            let count = 0;
            
            const updateCount = () => {
                if (count < target) {
                    count += increment;
                    counter.innerText = Math.ceil(count) + '+';
                    setTimeout(updateCount, 1);
                } else {
                    counter.innerText = target + '+';
                }
            };
            
            // Start animation when section is in view
            const aboutSection = document.querySelector('.about-section');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting && !counter.classList.contains('animated')) {
                        updateCount();
                        counter.classList.add('animated');
                    }
                });
            }, { threshold: 0.5 });
            
            if (aboutSection) {
                observer.observe(aboutSection);
            }
        });
    }
    
    animateCounter();

    // ========================================
    // Add hover effect to service cards
    // ========================================
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ========================================
    // Cursor Trail Effect (Optional)
    // ========================================
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // ========================================
    // Performance Optimization - Lazy Loading
    // ========================================
    const images = document.querySelectorAll('img[data-src]');
    
    const imgObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imgObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imgObserver.observe(img));

});

// ========================================
// Console Message
// ========================================
console.log('%cVraj Parmar Portfolio', 'color: #6366f1; font-size: 24px; font-weight: bold;');
console.log('%cFull-Stack Developer | Python | Django | PHP', 'color: #8b5cf6; font-size: 14px;');
console.log('%cInterested in working together? Let\'s connect!', 'color: #94a3b8; font-size: 12px;');
