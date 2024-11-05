// Function to enlarge image
function enlargeImage(img) {
    // Create an groverlay
    const groverlay = document.createElement('div');
    groverlay.classList.add('groverlay');
    groverlay.setAttribute('aria-hidden', 'true'); // Add aria-hidden attribute
    groverlay.setAttribute('aria-label', 'Close'); // Add aria-hidden attribute
    groverlay.setAttribute('title', 'Close'); // Add aria-hidden attribute
    document.body.appendChild(groverlay);

    // Enlarge the image
    img.classList.add('grow-enlarged');

    // Remove the enlarged state and groverlay when clicking the groverlay
    groverlay.addEventListener('click', function() {
        img.classList.remove('grow-enlarged');
        document.body.removeChild(groverlay);
    });
}

// Attach event listeners to enlarge buttons
document.querySelectorAll('.enlarge-btn').forEach(function(button) {
    button.addEventListener('click', function(event) {
        const img = button.previousElementSibling;
        enlargeImage(img);
    });
});