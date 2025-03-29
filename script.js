document.querySelectorAll('.game').forEach(game => {
    game.addEventListener('click', () => {
        const hiddenImages = game.nextElementSibling;
        if (hiddenImages.style.right === '0px') {
            hiddenImages.style.right = '-300px'; // Hide images
            hiddenImages.style.opacity = '0'; // Hide images
        } else {
            hiddenImages.style.right = '0'; // Show images
            hiddenImages.style.opacity = '1'; // Show images
        }
    });
});
