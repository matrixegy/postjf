// Cookie Law Script
cookieLaw = {
  dId: "cookie-law-div",
  bId: "cookie-law-button",
  iId: "cookie-law-item",
  show: function (e) {
    if (localStorage.getItem(cookieLaw.iId)) return false;
    var o = document.createElement("div"),
      i = document.createElement("p"),
      t = document.createElement("button");
    i.innerHTML = e.msg;
    t.id = cookieLaw.bId;
    t.innerHTML = e.ok;
    o.id = cookieLaw.dId;
    o.appendChild(t);
    o.appendChild(i);
    document.body.insertBefore(o, document.body.lastChild);
    t.addEventListener("click", cookieLaw.hide, false);
  },
  hide: function () {
    document.getElementById(cookieLaw.dId).outerHTML = "";
    localStorage.setItem(cookieLaw.iId, "1");
  },
};
cookieLaw.show({
  msg:
    "We use cookies to give you the best possible experience. By continuing to visit our website, you agree to the use of cookies as described in our <a href='https://mxegytech.rf.gd/cookie-policy'>Cookie Policy</a>",
  ok: "x",
});

// Scroll to Top Button Script
window.onscroll = function () {
  const scrollToTopBtn = document.getElementById("scrollToTop");
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollToTopBtn.style.display = "flex";
  } else {
    scrollToTopBtn.style.display = "none";
  }
};
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Close Box Function
function closeBox() {
  document
    .getElementById("buymeacoffee-container")
    .classList.add("hidden");
}

// Toggle Share Buttons
function toggleShare() {
  const shareContainer = document.getElementById("floating-share");
  shareContainer.classList.toggle("collapsed");
}

// Update Share Links
const currentUrl = window.location.href;
document.querySelector(".share-facebook").href += currentUrl;
document.querySelector(".share-twitter").href +=
  "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";
document.querySelector(".share-whatsapp").href += encodeURIComponent(
  currentUrl
);
document.querySelector(".share-reddit").href += currentUrl;
document.querySelector(".share-pinterest").href += currentUrl;
document.querySelector(".share-telegram").href +=
  "url=" + encodeURIComponent(currentUrl) + "&text=Check%20this%20out!";

// Preload Cloudinary Images
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(
    "img[src*='res.cloudinary.com']"
  );
  images.forEach((img) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = img.src;
    document.head.appendChild(link);
  });
});
