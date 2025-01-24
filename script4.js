class YouTubeFacade{constructor(){this.apiLoaded=!1;this.loadYouTubeAPI()}loadYouTubeAPI(){if(!this.apiLoaded){const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.onload=()=>{this.apiLoaded=!0};document.body.appendChild(script)}}createPlaylistEmbed(containerId,playlistId,options={}){const container=document.getElementById(containerId);if(!container){console.error(`Container with ID "${containerId}" not found.`);return}container.innerHTML='';const iframe=document.createElement('iframe');iframe.width=options.width||'720';iframe.height=options.height||'405';iframe.src=`https://www.youtube.com/embed/videoseries?list=${playlistId}&autoplay=${options.autoplay || 0}`;iframe.frameBorder='0';iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';iframe.allowFullscreen=!0;container.appendChild(iframe)}}const youtubeFacade=new YouTubeFacade();const htmlContent=`<div style=display:flex;flex-direction:column;align-items:center;justify-content:center><p class=call-to-action style=text-align:center>💡 LIKE, COMMENT, and SUBSCRIBE for more helpful tutorials!</p><a class=subscribe-link href=https://www.youtube.com/@MxEgyFRP style=margin-bottom:20px;text-align:center>📲 Subscribe to our channel for more tutorials | اشترك في القناة لمزيد من الدروس</a><div style=margin-bottom:20px;min-height:450px;background:#f3f3f3;display:flex;align-items:center;justify-content:center data-playlist-id=PLF455eDxW-jD1Ko5O_FDc4NV5yNepMmer id=playlist-1><div class=loader></div></div><div style=min-height:450px;background:#f3f3f3;display:flex;align-items:center;justify-content:center data-playlist-id=PLF455eDxW-jDgZ38GjcolMVZyXazV31H4 id=playlist-2><div class=loader></div></div></div>`;const style=document.createElement('style');style.textContent=` .loader { border: 6px solid #f3f3f3; border-top: 6px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 1s linear infinite; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } } `;document.head.appendChild(style);document.addEventListener('DOMContentLoaded',function(){const app=document.getElementById('app');if(app){app.innerHTML=htmlContent;const observer=new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const container=entry.target;const playlistId=container.getAttribute('data-playlist-id');const containerId=container.id;youtubeFacade.createPlaylistEmbed(containerId,playlistId);observer.unobserve(container)}})},{threshold:0.4});document.querySelectorAll('[data-playlist-id]').forEach((element)=>{observer.observe(element)})}});


document.addEventListener('DOMContentLoaded', function () {
    const switchButtons = document.querySelectorAll('.switch-button');
    const facades = document.querySelectorAll('.video-facade');

    // التبديل بين السيرفرات عند النقر على الأزرار
    switchButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const selectedServer = button.getAttribute('data-server');

            // تحديث الأزرار (تفعيل الزر المحدد فقط)
            switchButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // إظهار الفيديو الخاص بالسيرفر المحدد وإيقاف الفيديو في السيرفر الآخر
            facades.forEach(facade => {
                if (facade.classList.contains(`${selectedServer}-facade`)) {
                    facade.style.display = 'block';
                } else {
                    // إخفاء السيرفر الآخر وإيقاف الفيديو
                    const embedCode = facade.getAttribute('data-embed');
                    const thumbnailImg = facade.querySelector('.video-thumbnail');
                    const thumbnailSrc = thumbnailImg.src;
                    const thumbnailAlt = thumbnailImg.alt; // النص البديل للصورة

                    facade.style.display = 'none';
                    facade.innerHTML = ''; // تنظيف المحتوى الداخلي
                    facade.innerHTML = `
                        <img class="video-thumbnail" src="${thumbnailSrc}" alt="${thumbnailAlt}">
                        <div class="video-play-button"></div>
                    `;
                }
            });
        });
    });

    // تشغيل الفيديو عند النقر على واجهة الفيديو
    facades.forEach(function (facade) {
        facade.addEventListener('click', function () {
            const embedCode = facade.getAttribute('data-embed');
            const platform = facade.getAttribute('data-platform');
            let iframe = document.createElement('iframe');
            
            if (platform === 'youtube') {
                iframe.src = `https://www.youtube.com/embed/${embedCode}?autoplay=1`;
            } else if (platform === 'dailymotion') {
                iframe.src = `https://www.dailymotion.com/embed/video/${embedCode}?autoplay=1`;
            }

            iframe.width = '100%';
            iframe.height = '405';
            iframe.allow = 'autoplay; encrypted-media';
            iframe.frameBorder = '0';

            facade.innerHTML = ''; // تنظيف المحتوى الداخلي
            facade.appendChild(iframe); // إضافة الإطار
        });
    });
});
