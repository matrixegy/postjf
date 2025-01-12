document.getElementById("loading-message").style.display="none";const socialLinks=["https://www.facebook.com/matrixegybest1/","https://x.com/MatrixEgyFRP","https://www.instagram.com/matrix_egy/","https://www.youtube.com/@MxEgyFRP","https://mxegytech.rf.gd/expert-mobile-and-computer-repair-services/","https://mxegytech.rf.gd/frp-bypass-google-account-solution/","https://mxegytech.rf.gd/top-free-mobile-repair-tools/","https://mxegytech.rf.gd/topics/free-mobile-repair-guides-for-mobile-services/","https://mxegytech.rf.gd/topics/free-unlocking-tools-for-pc-and-mobile-services/","https://mxegytech.rf.gd/"];function getRandomSocialLink(){const randomIndex=Math.floor(Math.random()*socialLinks.length);return socialLinks[randomIndex]}
const buttons=document.querySelectorAll("#start-button");buttons.forEach(button=>{button.addEventListener("click",function(event){const randomLink=getRandomSocialLink();window.open(randomLink,"_blank")})});const animationContainer=document.getElementById("animation-container");let animation=lottie.loadAnimation({container:animationContainer,renderer:"svg",loop:!0,autoplay:!0,path:"https://lottie.host/61b56efa-48fb-448f-b061-b8e5de76be22/VK5hZN0Fua.json"});const messages=["📥 جاري فحص وتحضير الروابط، يرجى الانتظار...","🔄 Preparing your download links, please wait..."];let messageIndex=0;let messageInterval;const finalMessages=["✔️ تم فحص وتحضير الروابط بنجاح بالاسفل. يمكنك الآن التحميل!","✔️ The links have been successfully checked and prepared. You can now download!"];let finalMessageIndex=0;function startMessageRotation(){messageInterval=setInterval(()=>{messageIndex=(messageIndex+1)%messages.length;document.getElementById("loading-message").textContent=messages[messageIndex]},3000)}
function startFinalMessageRotation(){setInterval(()=>{finalMessageIndex=(finalMessageIndex+1)%finalMessages.length;document.getElementById("loading-message").textContent=finalMessages[finalMessageIndex]},3000)}
const timerElement=document.getElementById("timer");const linksContent=document.getElementById("links-content");const startButton=document.getElementById("start-button");let countdown=60;let countdownInterval;let paused=!1;function updateTimerDisplay(){let countdownText=`${countdown} ثانية`;if(countdown%2===0){countdownText=`${countdown} Second`}
timerElement.textContent=countdownText}
function startTimer(){countdownInterval=setInterval(()=>{if(!paused){countdown-=1;updateTimerDisplay();if(countdown<=0){clearInterval(countdownInterval);timerElement.style.display="none";linksContent.style.display="block";animation.destroy();animation=lottie.loadAnimation({container:animationContainer,renderer:"svg",loop:!1,autoplay:!0,path:"https://lottie.host/c11dbcb8-4618-4040-870e-2fbb448f1ebf/PEZycEzXgA.json"});clearInterval(messageInterval);startFinalMessageRotation();linksContent.scrollIntoView({behavior:"smooth"});const supportMessage=`
                <div class="wp-block-buttons" style="align-items: center; display: flex; gap: 10px; justify-content: center;">
                    <p class="has-text-align-center">
                        <i><b><mark class="has-inline-color has-nv-c-1-color" style="background-color: rgba(0, 0, 0, 0);">
                            Your support means the world to me! Whether it's by sharing, subscribing, watching ads, or contributing in any way – every little bit helps me create more content. Thank you for being part of this journey! ❤️
                        </mark></b></i>
                    </p>
                </div>

                <!-- الروابط الاجتماعية -->
                <div class="wp-block-buttons" style="align-items: center; display: flex; gap: 10px; justify-content: center;">
                    <!--Facebook Icon Button-->
                    <div class="wp-block-button has-custom-font-size has-medium-font-size">
                        <a class="wp-block-button__link has-neve-link-hover-color-background-color has-background wp-element-button" href="https://www.facebook.com/matrixegybest1/" rel="noopener noreferrer" style="border-radius: 32px; border-style: none; border-width: 0px; padding: var(--wp--preset--spacing--20);" target="_blank">
                            <i class="fab fa-facebook" style="font-size: 30px;"></i>
                        </a>
                    </div>

                    <!--Website Icon Button-->
                    <div class="wp-block-button has-custom-font-size has-medium-font-size">
                        <a class="wp-block-button__link has-nv-c-1-background-color has-background wp-element-button" href="http://mxegytech.rf.gd" rel="noopener noreferrer" style="border-radius: 32px; border-style: none; border-width: 0px; padding: var(--wp--preset--spacing--20);" target="_blank">
                            <i class="fas fa-globe" style="font-size: 30px;"></i>
                        </a>
                    </div>

                    <!--YouTube Icon Button-->
                    <div class="wp-block-button has-custom-font-size has-medium-font-size">
                        <a class="wp-block-button__link has-nv-c-2-background-color has-background wp-element-button" href="https://www.youtube.com/@MxEgyFRP" rel="noopener noreferrer" style="border-radius: 33px; padding: var(--wp--preset--spacing--20);" target="_blank">
                            <i class="fab fa-youtube" style="font-size: 30px;"></i>
                        </a>
                    </div>

                    <!--Buy Me a Coffee Button-->
                    <div class="wp-block-button has-custom-font-size has-medium-font-size">
                        <a href="https://buymeacoffee.com/mustaphaquraa" rel="noopener noreferrer" target="_blank">
                            <img alt="Buy Me A Coffee" decoding="async" height="50" loading="lazy" src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" style="border-radius: 32px;" width="200" />
                        </a>
                    </div>
                </div>
                `;linksContent.insertAdjacentHTML("beforebegin",supportMessage)}}},1000)}
document.addEventListener('visibilitychange',function(){paused=document.hidden});async function fetchLinks(){try{const response=await fetch('https://matrixegy.github.io/postjf/new.json');const data=await response.json();const postId=getQueryParam("post_id");if(postId&&data[postId]){let linksHTML="<ul>";data[postId].forEach(link=>{linksHTML+=`<li><a href="${link.url}" target="_blank">${link.name}</a></li>`});linksHTML+="</ul>";linksContent.innerHTML=linksHTML}else{linksContent.innerHTML="<p>لم يتم العثور على روابط لهذه المقالة.</p>"}}catch(error){console.error("Error fetching links:",error);linksContent.innerHTML="<p>⚠️ عذرًا، حدث خطأ أثناء تحميل الروابط. يرجى المحاولة لاحقًا.</p>"}}
function getQueryParam(param){const urlParams=new URLSearchParams(window.location.search);return urlParams.get(param)}
document.addEventListener("DOMContentLoaded",function(){startMessageRotation();fetchLinks()});startButton.addEventListener("click",function(){startButton.style.display="none";document.getElementById("pre-start-message").style.display="none";updateTimerDisplay();startTimer();document.getElementById("loading-message").style.display="block";animation.destroy();animationContainer.style.width="250px";animationContainer.style.height="250px";animation=lottie.loadAnimation({container:animationContainer,renderer:"svg",loop:!0,autoplay:!0,path:"https://lottie.host/61ee45f9-a98c-4a40-bebc-ad3939c142ba/VKcaLOW6JV.json"});startMessageRotation()})
