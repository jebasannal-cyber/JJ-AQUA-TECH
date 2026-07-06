// JJ AQUA TECH Website

console.log("Welcome to JJ AQUA TECH");

document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Current year in footer
    const year = new Date().getFullYear();
    const footer = document.querySelector("footer p");

    if (footer) {
        footer.innerHTML = "© " + year + " JJ AQUA TECH. All Rights Reserved.";
    }

});
