document.addEventListener('DOMContentLoaded', () => {
    const headerContainer = document.querySelector('header');

    fetch('./components/header.html')
        .then(response => response.text())
        .then(data => {
            headerContainer.innerHTML = data;
        })
        .catch(error => {
            console.error('Error loading header:', error);
        });

    // Example of interactivity: Smooth scroll for anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });
});