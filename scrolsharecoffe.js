window.onload = function() {
  // Handle "Buy Me a Coffee" visibility
  if (!localStorage.getItem("buymeacoffeeClosed")) {
    document.getElementById('buymeacoffee-container').style.display = 'block';
  } else {
    document.getElementById('buymeacoffee-container').style.display = 'none';
  }

  // Handle cookie notice visibility
  if (!localStorage.getItem("cookiesAccepted")) {
    document.getElementById("cookie-notice").style.display = "block";
  }

  document.getElementById("accept-cookies").addEventListener("click", function() {
    localStorage.setItem("cookiesAccepted", "true");
    document.getElementById("cookie-notice").style.display = "none";
  });
};

window.onscroll = function() {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function closeBox() {
  document.getElementById('buymeacoffee-container').classList.add('hidden');
  localStorage.setItem("buymeacoffeeClosed", "true");
}

function toggleShare() {
  const shareContainer = document.getElementById('floating-share');
  shareContainer.classList.toggle('collapsed');
}

const currentUrl = window.location.href;
document.querySelector('.share-facebook').href += currentUrl;
document.querySelector('.share-twitter').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
document.querySelector('.share-whatsapp').href += encodeURIComponent(currentUrl);
document.querySelector('.share-reddit').href += currentUrl;
document.querySelector('.share-pinterest').href += currentUrl;
document.querySelector('.share-telegram').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";

document.addEventListener("DOMContentLoaded", function() {
  const images = document.querySelectorAll('img[src*="res.cloudinary.com"]');
  images.forEach(img => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = img.src;
    document.head.appendChild(link);
  });
});
