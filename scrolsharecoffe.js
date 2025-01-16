window.onload = function() {
    // Handle the "Buy Me a Coffee" box visibility
    if (!localStorage.getItem("buymeacoffeeClosed")) {
        document.getElementById('buymeacoffee-container').style.display = 'block'; // Show the box
    } else {
        document.getElementById('buymeacoffee-container').style.display = 'none'; // Hide if user has closed it
    }

    // Preload Cloudinary images
    const images = document.querySelectorAll('img[src*="res.cloudinary.com"]');
    images.forEach(img => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = img.src;
        document.head.appendChild(link);
    });

    // Update share links with the current URL
    const currentUrl = window.location.href;
    document.querySelector('.share-facebook').href += currentUrl;
    document.querySelector('.share-twitter').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
    document.querySelector('.share-whatsapp').href += encodeURIComponent(currentUrl);
    document.querySelector('.share-reddit').href += currentUrl;
    document.querySelector('.share-pinterest').href += currentUrl;
    document.querySelector('.share-telegram').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
};

// Handle "Scroll to Top" button visibility
window.onscroll = function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'flex';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
};

// Scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Close the "Buy Me a Coffee" box
function closeBox() {
    document.getElementById('buymeacoffee-container').classList.add('hidden'); // Hide the box
    localStorage.setItem("buymeacoffeeClosed", "true"); // Store in localStorage that the box has been closed
}

// Toggle the share container visibility
function toggleShare() {
    const shareContainer = document.getElementById('floating-share');
    shareContainer.classList.toggle('collapsed');
}
