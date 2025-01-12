function openPopup(id){const popup=document.getElementById(id);if(popup){popup.style.display='flex'}}
function closePopup(id){const popup=document.getElementById(id);if(popup){popup.style.display='none'}}
let currentIndex=0;const slides=document.querySelectorAll('.slide');function changeSlide(direction){currentIndex=(currentIndex+direction+slides.length)%slides.length;updateSlider()}
function updateSlider(){slides.forEach((slide,index)=>{slide.style.transform=`translateX(-${currentIndex * 100}%)`})}
slides.forEach(slide=>{slide.addEventListener('click',function(){const videoUrl=slide.getAttribute('data-video-url');openVideoPopup(videoUrl)})});function openVideoPopup(videoUrl){const videoPopup=document.createElement('div');videoPopup.classList.add('video-popup');videoPopup.innerHTML=`
    <div class="video-popup-content">
      <span class="close-video-popup" onclick="closeVideoPopup()">&times;</span>
      <iframe width="100%" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>
    </div>
  `;document.body.appendChild(videoPopup)}
function closeVideoPopup(){const videoPopup=document.querySelector('.video-popup');if(videoPopup){videoPopup.remove()}}
