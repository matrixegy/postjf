    // تحديد عنصر الأنيميشن
    const animationContainer = document.getElementById("animation-container");

    // تشغيل Lottie animation
    let animation = lottie.loadAnimation({
        container: animationContainer,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "https://assets2.lottiefiles.com/datafiles/jQOi6i5dHOY4uP3/data.json" // رابط الأنيميشن الأول
    });

    // الرسائل المؤقتة (أثناء العد التنازلي)
    const messages = ["📥 جاري فحص وتحضير الروابط، يرجى الانتظار...", "🔄 Preparing your download links, please wait..."];
    let messageIndex = 0;
    let messageInterval;

    // الرسائل النهائية (بعد انتهاء العد التنازلي)
    const finalMessages = [
        "✔️ تم فحص وتحضير الروابط بنجاح. يمكنك الآن التحميل!", 
        "✔️ Links prepared successfully! You can now download."
    ];
    let finalMessageIndex = 0;

    // وظيفة تبديل الرسائل المؤقتة
    function startMessageRotation() {
        messageInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            document.getElementById("loading-message").textContent = messages[messageIndex];
        }, 10000); // تغيير الرسالة كل 10 ثوان
    }

    // وظيفة تبديل الرسائل النهائية
    function startFinalMessageRotation() {
        setInterval(() => {
            finalMessageIndex = (finalMessageIndex + 1) % finalMessages.length;
            document.getElementById("loading-message").textContent = finalMessages[finalMessageIndex];
        }, 3000); // تغيير الرسالة النهائية كل 3 ثوان
    }

    // تشغيل العداد التنازلي
    const timerElement = document.getElementById("timer");
    const linksContent = document.getElementById("links-content");
    const startButton = document.getElementById("start-button");

    let countdown = 60;
    let countdownInterval;
    let paused = false;

    function updateTimerDisplay() {
        let countdownText = `${countdown} ثانية`; // النص بالعربية
        if (countdown % 2 === 0) {
            countdownText = `${countdown} Second`; // النص بالإنجليزية في العدادات الفردية
        }
        timerElement.textContent = countdownText;
    }

    function startTimer() {
        countdownInterval = setInterval(() => {
            if (!paused) {
                countdown -= 1;
                updateTimerDisplay();

                if (countdown <= 0) {
                    clearInterval(countdownInterval);
                    timerElement.style.display = "none";
                    linksContent.style.display = "block";

                    // تغيير الأنيميشن إلى أنيميشن بعد التحميل
                    animation.destroy();
                    animation = lottie.loadAnimation({
                        container: animationContainer,
                        renderer: "svg",
                        loop: false,
                        autoplay: true,
                        path: "https://assets2.lottiefiles.com/packages/lf20_zqmsfemx.json" // رابط الأنيميشن بعد التحميل
                    });

                    // إيقاف تبديل الرسائل المؤقتة
                    clearInterval(messageInterval);

                    // بدء تبديل الرسائل النهائية
                    startFinalMessageRotation();
                }
            }
        }, 1000);
    }

    // التعامل مع حالة الصفحة
    document.addEventListener('visibilitychange', function () {
        paused = document.hidden;
    });

    // تحميل بيانات الروابط من ملف JSON
    async function fetchLinks() {
        try {
            const response = await fetch('https://matrixegy.github.io/postjf/new.json'); // رابط الملف JSON
            const data = await response.json();

            const postId = getQueryParam("post_id");
            if (postId && data[postId]) {
                let linksHTML = "<ul>";
                data[postId].forEach(link => {
                    linksHTML += `<li><a href="${link.url}" target="_blank">${link.name}</a></li>`;
                });
                linksHTML += "</ul>";
                linksContent.innerHTML = linksHTML;
            } else {
                linksContent.innerHTML = "<p>لم يتم العثور على روابط لهذه المقالة.</p>";
            }
        } catch (error) {
            console.error("Error fetching links:", error);
            linksContent.innerHTML = "<p>⚠️ عذرًا، حدث خطأ أثناء تحميل الروابط. يرجى المحاولة لاحقًا.</p>";
        }
    }

    // جلب المعاملات من URL
    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    // عند تحميل الصفحة
    document.addEventListener("DOMContentLoaded", function () {
        startMessageRotation(); // بدء تبديل الرسائل المؤقتة
        fetchLinks();
    });

    // عند الضغط على زر البدء
    startButton.addEventListener("click", function () {
        startButton.style.display = "none";
        updateTimerDisplay();
        startTimer();

        // تغيير الأنيميشن إلى العد التنازلي
        animation.destroy();
        animation = lottie.loadAnimation({
            container: animationContainer,
            renderer: "svg",
            loop: true,
            autoplay: true,
            path: "https://assets2.lottiefiles.com/packages/lf20_jcikwtux.json" // رابط الأنيميشن العد التنازلي
        });
    });