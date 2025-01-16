cookieLaw = {
    dId: "cookie-law-div",
    bId: "cookie-law-button",
    iId: "cookie-law-item",
    show: function (e) {
      if (localStorage.getItem(cookieLaw.iId)) return false;

      // Create container
      const container = document.createElement("div");
      container.id = cookieLaw.dId;

      // Create message paragraph
      const message = document.createElement("p");
      message.innerHTML = e.msg;

      // Create dismiss button
      const button = document.createElement("button");
      button.id = cookieLaw.bId;
      button.innerHTML = e.ok;

      // Append elements
      container.appendChild(button);
      container.appendChild(message);
      document.body.insertBefore(container, document.body.lastChild);

      // Add event listener to button
      button.addEventListener("click", cookieLaw.hide, false);
    },
    hide: function () {
      const cookieDiv = document.getElementById(cookieLaw.dId);
      cookieDiv.style.transform = "translateY(100%)";
      cookieDiv.style.opacity = "0";

      setTimeout(() => {
        cookieDiv.remove();
        localStorage.setItem(cookieLaw.iId, "1");
      }, 300); // Delay for animation
    },
  };

  // Show the cookie notice
  cookieLaw.show({
    msg:
      "We use cookies to give you the best possible experience. By continuing to visit our website, you agree to the use of cookies as described in our <a href='#'>Cookie Policy</a>",
    ok: "Got it",
  }); window.onscroll=function(){const scrollToTopBtn=document.getElementById('scrollToTop');if(document.body.scrollTop>200||document.documentElement.scrollTop>200){scrollToTopBtn.style.display='flex'}else{scrollToTopBtn.style.display='none'}};function scrollToTop(){window.scrollTo({top:0,behavior:'smooth'})}
function closeBox(){document.getElementById('buymeacoffee-container').classList.add('hidden')}
function toggleShare(){const shareContainer=document.getElementById('floating-share');shareContainer.classList.toggle('collapsed')}
const currentUrl=window.location.href;document.querySelector('.share-facebook').href+=currentUrl;document.querySelector('.share-twitter').href+="url="+encodeURIComponent(currentUrl)+"&text=Check%20this%20out!";document.querySelector('.share-whatsapp').href+=encodeURIComponent(currentUrl);document.querySelector('.share-reddit').href+=currentUrl;document.querySelector('.share-pinterest').href+=currentUrl;document.querySelector('.share-telegram').href+="url="+encodeURIComponent(currentUrl)+"&text=Check%20this%20out!";document.addEventListener("DOMContentLoaded",function(){const images=document.querySelectorAll('img[src*="res.cloudinary.com"]');images.forEach(img=>{const link=document.createElement('link');link.rel='preload';link.as='image';link.href=img.src;document.head.appendChild(link)})})
