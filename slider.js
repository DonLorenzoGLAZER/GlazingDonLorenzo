document.addEventListener('DOMContentLoaded', function() {
    // Initialize Bootstrap carousel
    const carousel = new bootstrap.Carousel(document.getElementById('classCarousel'), {
        interval: 5000,
        wrap: true,
        keyboard: true
    });

    // Add keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowLeft') {
            carousel.prev();
        } else if (event.key === 'ArrowRight') {
            carousel.next();
        }
    });

    // Add smooth transition effects
    const items = document.querySelectorAll('.carousel-item');
    items.forEach(item => {
        item.addEventListener('transitionend', function() {
            if (item.classList.contains('active')) {
                item.querySelector('.class-card').style.opacity = 1;
            }
        });

        item.addEventListener('transitionstart', function() {
            if (!item.classList.contains('active')) {
                item.querySelector('.class-card').style.opacity = 0;
            }
        });
    });
});
