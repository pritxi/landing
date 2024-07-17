window.addEventListener('scroll', function() {
    var navbar = document.getElementById('mainNavbar');
    var maxScroll = 100; // Máxima cantidad de scroll antes de que el margen sea mínimo
    var maxMargin = 40; // Márgen superior máximo en píxeles

    var scrollPercentage = Math.min(window.scrollY / maxScroll, 1); // Calcula el porcentaje del scroll
    var newMargin = maxMargin * (1 - scrollPercentage); // Calcula el nuevo margen

    navbar.style.marginTop = newMargin + 'px'; // Aplica el nuevo margen
});

