// scroll button
const scrollUp = document.querySelector('.scroll-up');
scrollUp.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

scrollUp.style.display = 'none';
window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
        scrollUp.style.display = 'none';
    } else {
        scrollUp.style.display = 'flex';
    }
});

// nav transparecy
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});