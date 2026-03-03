let player;
let countdown = 60;
let countdownInterval;
let countdownFinished = false; // ← حماية العدّاد
const postId = "4022";
const unlockBtn = document.getElementById('unlock-btn');
const videoDiv = document.getElementById('unlock-video');
const downloadDiv = document.getElementById('download-links');
const verifiedMsg = document.getElementById('verified-msg');
const passwordEl = document.querySelector('.password');

passwordEl.style.display = 'none';

// إنشاء مشغل YouTube
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '100%',
    width: '100%',
    videoId: '23gvrbEDNzw',
    playerVars: { 'enablejsapi': 1, 'rel': 0 },
    events: { 'onStateChange': onPlayerStateChange }
  });
}

// متابعة حالة الفيديو
function onPlayerStateChange(event) {
  if(event.data === YT.PlayerState.PLAYING && countdownInterval === undefined && !countdownFinished){
    startCountdown();
  } else if(event.data === YT.PlayerState.PAUSED || event.data === YT.PlayerState.ENDED){
    stopCountdown();
  }
}

// بدء العدّاد
function startCountdown(){
  countdownInterval = setInterval(() => {
    countdown--;
    unlockBtn.innerText = `Unlocking... ${countdown}s`;
    if(countdown <= 0){
      clearInterval(countdownInterval);
      countdownFinished = true; // ← العلم عند انتهاء العدّاد
      unlockBtn.style.display = 'none';
      verifiedMsg.style.display = 'block';
      passwordEl.style.display = 'block';
      showLinks();
    }
  }, 1000);
}

// إيقاف العدّاد مؤقتًا
function stopCountdown(){
  clearInterval(countdownInterval);
  countdownInterval = undefined;
}

// زر Unlock
unlockBtn.addEventListener('click', () => {
  unlockBtn.disabled = true;
  videoDiv.style.display = 'block';
  player.playVideo();
});

// عرض روابط التحميل
function showLinks(){
  fetch('https://matrixegy.github.io/postjf/new.json')
    .then(res => res.json())
    .then(data => {
      const postData = data[postId];
      if(postData && postData.length > 0){
        downloadDiv.innerHTML = postData.map(link =>
          `<a href="${link.url}" target="_blank">
            <span style="font-size:20px;">⬇️</span> ${link.name}
          </a>`
        ).join('');
        downloadDiv.style.display = 'grid';
      } else {
        downloadDiv.innerHTML = '<div style="color:red;">No links found.</div>';
        downloadDiv.style.display = 'block';
      }
    })
    .catch(err => {
      downloadDiv.innerHTML = '<div style="color:red;">Error loading links.</div>';
      downloadDiv.style.display = 'block';
      console.error(err);
    });
}

// حماية إضافية: إذا المستخدم غادر الصفحة أو رجع لها
document.addEventListener('visibilitychange', () => {
  if(document.hidden){
    stopCountdown();
  } else {
    if(player && player.getPlayerState() === YT.PlayerState.PLAYING && !countdownFinished && countdownInterval === undefined){
      startCountdown();
    }
  }
});