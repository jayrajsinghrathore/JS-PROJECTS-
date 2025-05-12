// Scroll Animations Using Intersection Observer API
const elements = document.querySelectorAll('.animate__animated');

const observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.visibility = 'visible';
                entry.target.classList.add('animate__fadeIn');
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.2 }
);

elements.forEach(el => {
    el.style.visibility = 'hidden';
    observer.observe(el);
});

