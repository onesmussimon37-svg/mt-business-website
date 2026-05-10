console.log("MT Business Website Loaded");

// Smooth Scroll
const links = document.querySelectorAll('nav a');

links.forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetSection =
        document.querySelector(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - 70,
            behavior: 'smooth'
        });

    });

});const darkModeBtn =
document.getElementById('darkModeBtn');

darkModeBtn.addEventListener('click', () => {

    document.body.classList.toggle('dark-mode');

});