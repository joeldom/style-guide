// Function to enlarge image elements
function enlargeImage(img) {
    const groverlay = document.createElement('div');
    groverlay.classList.add('groverlay');
    groverlay.setAttribute('aria-hidden', 'true');
    groverlay.setAttribute('aria-label', 'Close');
    groverlay.setAttribute('title', 'Close');
    document.body.appendChild(groverlay);

    // Enlarge the image
    img.classList.add('grow-enlarged');

    // Remove enlarged state on overlay click
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

// Attach event listeners for .gallery-enlarge buttons (replaces .enlarge-btn)
document.querySelectorAll('.gallery-enlarge').forEach(function(button) {
    button.addEventListener('click', function(event) {
        const img = button.previousElementSibling;
        if (img && img.tagName.toLowerCase() === 'img') {
            enlargeImage(img);
        }
    });
});

// --- Handle <article> background-image enlargement ---
document.querySelectorAll('article[style*="background-image"]').forEach(function(article) {
    const link = article.querySelector('.post-link');
    if (!link) return;

    link.addEventListener('click', function(event) {
        event.preventDefault();

        // Extract background image URL
        const style = article.getAttribute('style');
        const match = style.match(/url\(['"]?(.*?)['"]?\)/i);
        if (!match) return;

        const imageUrl = match[1];

        // Create overlay
        const groverlay = document.createElement('div');
        groverlay.classList.add('groverlay');
        groverlay.setAttribute('aria-hidden', 'true');
        groverlay.setAttribute('aria-label', 'Close');
        groverlay.setAttribute('title', 'Close');

        // Create enlarged background container
        const enlargedBg = document.createElement('div');
        enlargedBg.classList.add('grow-enlarged');
        enlargedBg.style.backgroundImage = `url('${imageUrl}')`;
        enlargedBg.style.backgroundSize = 'contain';
        enlargedBg.style.backgroundRepeat = 'no-repeat';
        enlargedBg.style.backgroundPosition = 'center';
        enlargedBg.style.width = '80vw';
        enlargedBg.style.height = '80vh';

        document.body.appendChild(groverlay);
        document.body.appendChild(enlargedBg);

        // Click overlay to close
        groverlay.addEventListener('click', function() {
            document.body.removeChild(groverlay);
            document.body.removeChild(enlargedBg);
        });
    });
});