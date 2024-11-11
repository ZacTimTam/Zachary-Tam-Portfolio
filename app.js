const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } 
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el)); 


var copy = document.querySelector(".text-slider").cloneNode(true);
document.querySelector(".summary").appendChild(copy);


var copy = document.querySelector(".text-slider-2").cloneNode(true);
document.querySelector(".summary-2").appendChild(copy);


window.onscroll = function() {
    var scrolled = window.pageYOffset || document.documentElement.scrollTop;
    var maxScroll = document.body.scrollHeight - window.innerHeight;
    var scrollPercentage = (scrolled / maxScroll);

    // Set the opacity of the icons based on scroll percentage
    document.querySelector('.social-icons').style.opacity = 1 - scrollPercentage;
};


function toggleMenu() {
    var links = document.querySelector('#navbar .nav-links');
    var navbar = document.getElementById('navbar'); // Get the navbar container

    // Toggle display of the links
    if (links.style.display === 'block') {
        links.style.display = 'none';
        navbar.style.marginBottom = '0'; // Reset bottom margin when menu is closed
    } else {
        links.style.display = 'block';
        navbar.style.marginBottom = '8vh'; // Increase bottom margin when menu is open
    }
}