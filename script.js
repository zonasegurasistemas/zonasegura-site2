// Revela elementos ao rolar a página
const elementos = document.querySelectorAll('.card, .grid img');

const observador = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

elementos.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = ".7s";
    observador.observe(el);
});
