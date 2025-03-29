document.querySelectorAll('.game').forEach(game => {
    const hiddenImages = game.querySelector('.hidden-images'); // Get the hidden images

    game.addEventListener('mouseenter', () => {
        hiddenImages.style.opacity = '1'; // Show hidden images
    });

    game.addEventListener('mouseleave', () => {
        hiddenImages.style.opacity = '0'; // Hide hidden images
    });
});
