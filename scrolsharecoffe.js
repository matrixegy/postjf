// زر Scroll to Top
window.onscroll = function () {
  const scrollToTopBtn = document.getElementById('scrollToTop');
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
};

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

// إغلاق نافذة Buy Me a Coffee
function closeBox() {
  document.getElementById('buymeacoffee-container').classList.add('hidden');
}

// التعامل مع زر التبديل لعرض/إخفاء روابط المشاركة
function toggleShare() {
  const shareContainer = document.getElementById('floating-share');
  shareContainer.classList.toggle('collapsed');
}

// إضافة رابط URL تلقائي لجميع روابط المشاركة
const currentUrl = window.location.href; // جلب رابط الصفحة الحالي

// تحديث الروابط في الأزرار
document.querySelector('.share-facebook').href += currentUrl;
document.querySelector('.share-twitter').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
document.querySelector('.share-whatsapp').href += encodeURIComponent(currentUrl);
document.querySelector('.share-reddit').href += currentUrl;
document.querySelector('.share-pinterest').href += currentUrl;
document.querySelector('.share-telegram').href += "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
