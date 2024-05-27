const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
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
