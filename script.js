document.addEventListener('DOMContentLoaded', function() {
    // Initialize the typewriter effect
    var typed = new Typed(".typewriter-text", {
        strings: ["Designer", "Developer", "Creative Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove 'active' class from all nav links and hide all sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to clicked nav link and corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            this.classList.add('active');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Initialize the first section as active
    if (navLinks.length > 0) {
        navLinks[0].click(); // Automatically show the first section on load
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add smooth scrolling to the "Hire Me" button
    document.querySelector('.btn').addEventListener('click', function () {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the typewriter effect
    var typed = new Typed(".typewriter-text", {
        strings: ["Designer", "Developer", "Creative Enthusiast"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000,
        startDelay: 500,
        loop: true
    });

    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');

    // Handle navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();

            // Remove 'active' class from all nav links and hide all sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));

            // Add 'active' class to clicked nav link and corresponding section
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            this.classList.add('active');
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });

    // Initialize the first section as active
    if (navLinks.length > 0) {
        navLinks[0].click(); // Automatically show the first section on load
    }

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add smooth scrolling to the "Hire Me" button
    document.querySelector('.btn').addEventListener('click', function () {
        document.querySelector('#contact').scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Toggle navigation menu on mobile
    menuToggle.addEventListener('click', function () {
        nav.classList.toggle('active');
    });
});
