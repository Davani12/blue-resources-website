/**
 * Blue Resources Co., Ltd. Website Scripts
 * Author: blue_resources_website
 * Version: 1.8
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Performance optimization for page loading
    function optimizePageLoad() {
        // Add 'loaded' class to body when all content is loaded
        window.addEventListener('load', function() {
            document.body.classList.add('loaded');
            
            // Lazy load background images
            const lazyBackgrounds = document.querySelectorAll('.lazy-background');
            lazyBackgrounds.forEach(element => {
                const bg = element.getAttribute('data-bg');
                if (bg) {
                    element.style.backgroundImage = `url(${bg})`;
                    element.classList.remove('lazy-background');
                }
            });
        });
    }

    // Mobile navigation toggle
    function initMobileNav() {
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        const overlay = document.querySelector('.nav-overlay');
        
        if (menuToggle && mobileNav && overlay) {
            menuToggle.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
                overlay.classList.toggle('active');
                document.body.classList.toggle('nav-open');
            });
            
            overlay.addEventListener('click', function() {
                mobileNav.classList.remove('active');
                overlay.classList.remove('active');
                document.body.classList.remove('nav-open');
            });
        }
    }
    
    // Smooth scrolling for anchor links
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const targetId = this.getAttribute('href');
                
                if (targetId === '#') return;
                
                e.preventDefault();
                
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    // Close mobile menu if open
                    const mobileNav = document.querySelector('.mobile-nav');
                    const overlay = document.querySelector('.nav-overlay');
                    
                    if (mobileNav && mobileNav.classList.contains('active')) {
                        mobileNav.classList.remove('active');
                        overlay.classList.remove('active');
                        document.body.classList.remove('nav-open');
                    }
                    
                    // Scroll to target
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Sticky header on scroll
    function initStickyHeader() {
        const header = document.querySelector('.site-header');
        const scrollThreshold = 100;
        
        if (header) {
            window.addEventListener('scroll', function() {
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('sticky');
                } else {
                    header.classList.remove('sticky');
                }
            });
        }
    }
    
    // Initialize AOS animations
    function initAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 800,
                easing: 'ease-in-out',
                once: true,
                offset: 100
            });
        }
    }
    
    // Form validation and submission
    function initForms() {
        const forms = document.querySelectorAll('form');
        
        forms.forEach(form => {
            form.addEventListener('submit', function(e) {
                let valid = true;
                const requiredFields = form.querySelectorAll('[required]');
                
                requiredFields.forEach(field => {
                    if (!field.value.trim()) {
                        valid = false;
                        field.classList.add('error');
                        
                        // Add error message if not already present
                        let errorMsg = field.nextElementSibling;
                        if (!errorMsg || !errorMsg.classList.contains('error-message')) {
                            errorMsg = document.createElement('div');
                            errorMsg.classList.add('error-message');
                            errorMsg.textContent = 'This field is required';
                            field.parentNode.insertBefore(errorMsg, field.nextSibling);
                        }
                    } else {
                        field.classList.remove('error');
                        
                        // Remove error message if present
                        const errorMsg = field.nextElementSibling;
                        if (errorMsg && errorMsg.classList.contains('error-message')) {
                            errorMsg.remove();
                        }
                    }
                });
                
                if (!valid) {
                    e.preventDefault();
                }
            });
        });
    }
    
    // Testimonial slider
    function initTestimonialSlider() {
        const testimonialContainer = document.querySelector('.testimonial-slider');
        
        if (testimonialContainer) {
            const testimonials = testimonialContainer.querySelectorAll('.testimonial');
            const prevBtn = testimonialContainer.querySelector('.slider-prev');
            const nextBtn = testimonialContainer.querySelector('.slider-next');
            
            if (testimonials.length > 1) {
                let currentIndex = 0;
                
                // Show first testimonial
                testimonials[0].classList.add('active');
                
                // Update active testimonial
                function updateActiveTestimonial() {
                    testimonials.forEach(testimonial => {
                        testimonial.classList.remove('active');
                    });
                    
                    testimonials[currentIndex].classList.add('active');
                }
                
                // Previous button click
                if (prevBtn) {
                    prevBtn.addEventListener('click', function() {
                        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
                        updateActiveTestimonial();
                    });
                }
                
                // Next button click
                if (nextBtn) {
                    nextBtn.addEventListener('click', function() {
                        currentIndex = (currentIndex + 1) % testimonials.length;
                        updateActiveTestimonial();
                    });
                }
                
                // Auto-rotate testimonials
                setInterval(function() {
                    currentIndex = (currentIndex + 1) % testimonials.length;
                    updateActiveTestimonial();
                }, 5000);
            }
        }
    }
    
    // FAQ accordion
    function initFaqAccordion() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            if (question) {
                question.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all items
                    faqItems.forEach(faq => {
                        faq.classList.remove('active');
                    });
                    
                    // Open clicked item if it wasn't already open
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }
    
    // Initialize all functions
    optimizePageLoad();
    initMobileNav();
    initSmoothScroll();
    initStickyHeader();
    initAOS();
    initForms();
    initTestimonialSlider();
    initFaqAccordion();
});

// Add CSS to handle the header scroll effect
document.head.insertAdjacentHTML('beforeend', `
    <style>
        .site-header {
            transition: all 0.3s ease;
        }
        .site-header.scrolled {
            background: rgba(10, 27, 61, 0.95);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }
        .site-header.scrolled .logo img {
            height: 35px;
        }
        body.menu-open {
            overflow: hidden;
        }
        .error {
            border-color: var(--danger) !important;
        }
        .error-message {
            color: var(--danger);
            font-size: 0.875rem;
            margin-bottom: 1rem;
        }
        .success-message {
            color: var(--success);
            font-size: 1.125rem;
            text-align: center;
            padding: 1rem;
        }
        .testimonials-slider {
            transition: transform 0.5s ease;
        }
        .service-card, .stat-item, .testimonial-content, .blog-card {
            transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
    </style>
`);

// Email validation helper function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
