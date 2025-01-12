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
        "✔️ تم فحص وتحضير الروابط بنجاح بالاسفل. يمكنك الآن التحميل!", 
        "✔️ The links have been successfully checked and prepared. You can now download!"
    ];
    let finalMessageIndex = 0;

    // وظيفة تبديل الرسائل المؤقتة
    function startMessageRotation() {
        messageInterval = setInterval(() => {
            messageIndex = (messageIndex + 1) % messages.length;
            document.getElementById("loading-message").textContent = messages[messageIndex];
        }, 3000); // تغيير الرسالة كل 3 ثوان
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

   // تحديث الكود بعد إتمام العد التنازلي
function startFinalMessageRotation() {
    setInterval(() => {
        finalMessageIndex = (finalMessageIndex + 1) % finalMessages.length;
        document.getElementById("loading-message").textContent = finalMessages[finalMessageIndex];
    }, 3000); // تغيير الرسالة النهائية كل 3 ثوان
}

// عند إتمام العد التنازلي
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

                // تمرير تلقائي إلى مكان الروابط
                linksContent.scrollIntoView({ behavior: "smooth" });

                // إضافة الرسالة بعد الروابط
                const supportMessage = `
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
                `;
                // إضافة النص والأزرار بعد الروابط
                linksContent.insertAdjacentHTML("beforebegin", supportMessage);
            }
        }
    }, 1000);
}



    // التعامل مع حالة الصفحة
    document.addEventListener('visibilitychange', function () {
        paused = document.hidden;
    });

    // قائمة الروابط العشوائية
const randomLinks = [
    "https://www.facebook.com/matrixegybest1/",
    "https://x.com/MatrixEgyFRP",
    "https://www.instagram.com/matrix_egy/",
    "https://www.youtube.com/@MxEgyFRP"
];

// وظيفة لاختيار رابط عشوائي
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * randomLinks.length);
    return randomLinks[randomIndex];
}

// وظيفة التعامل مع الضغط على الرابط
function handleLinkClick(event) {
    event.preventDefault(); // منع فتح الرابط بشكل مباشر

    // اختيار رابط عشوائي
    const randomLink = getRandomLink();

    // فتح الرابط العشوائي بعد فترة قصيرة (لتوفير تجربة مستخدم ممتعة)
    setTimeout(() => {
        window.open(randomLink, "_blank"); // فتح الرابط العشوائي
        window.open(event.target.href, "_blank"); // فتح الرابط الذي تم الضغط عليه
    }, 500); // تأخير لمدة 0.5 ثانية
}

// تحميل بيانات الروابط من ملف JSON
async function fetchLinks() {
    try {
        const response = await fetch('https://matrixegy.github.io/postjf/new.json'); // رابط الملف JSON
        const data = await response.json();

        const postId = getQueryParam("post_id");
        if (postId && data[postId]) {
            let linksHTML = "<ul>";
            data[postId].forEach(link => {
                linksHTML += `<li><a href="${link.url}" target="_blank" class="link-item">${link.name}</a></li>`;
            });
            linksHTML += "</ul>";
            linksContent.innerHTML = linksHTML;

            // إضافة الحدث عند الضغط على أي رابط
            const links = document.querySelectorAll('.link-item');
            links.forEach(link => {
                link.addEventListener('click', handleLinkClick);
            });
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
