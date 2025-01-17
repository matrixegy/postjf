document.addEventListener("DOMContentLoaded", function () {
    // عرض إشعار الكوكيز
    const cookieNotice = document.getElementById("cookie-notice");
    const acceptCookies = document.getElementById("accept-cookies");
    if (cookieNotice && acceptCookies) {
        if (!localStorage.getItem("cookiesAccepted")) {
            cookieNotice.style.display = "block";
            acceptCookies.addEventListener("click", function () {
                localStorage.setItem("cookiesAccepted", "true");
                cookieNotice.style.display = "none";
            });
        }
    }

    // مشاركة الروابط الاجتماعية
    const currentUrl = window.location.href;
    const facebookShare = document.querySelector(".share-facebook");
    const twitterShare = document.querySelector(".share-twitter");
    const whatsappShare = document.querySelector(".share-whatsapp");
    const redditShare = document.querySelector(".share-reddit");
    const pinterestShare = document.querySelector(".share-pinterest");
    const telegramShare = document.querySelector(".share-telegram");

    if (facebookShare) facebookShare.href += currentUrl;
    if (twitterShare) twitterShare.href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
    if (whatsappShare) whatsappShare.href += encodeURIComponent(currentUrl);
    if (redditShare) redditShare.href += currentUrl;
    if (pinterestShare) pinterestShare.href += currentUrl;
    if (telegramShare) telegramShare.href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
});

// إغلاق صندوق "Buy Me a Coffee"
function closeBox() {
    const container = document.getElementById("buymeacoffee-container");
    if (container) {
        container.classList.add("hidden");
    }
}

// تبديل عرض أزرار المشاركة
function toggleShare() {
    const shareContainer = document.getElementById("floating-share");
    if (shareContainer) {
        shareContainer.classList.toggle("collapsed");
    }
}
