
    import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
    import { getDatabase, ref, set, get, update, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

    // إعداد Firebase
    const firebaseConfig = {
        apiKey: "AIzaSyCAOiJujq7KTZ4UUYeH7sDmIb6Kr_1Y-5g",
        authDomain: "matrix-star-e6c40.firebaseapp.com",
        databaseURL: "https://matrix-star-e6c40-default-rtdb.europe-west1.firebasedatabase.app",
        projectId: "matrix-star-e6c40",
        storageBucket: "matrix-star-e6c40.appspot.com",
        messagingSenderId: "461013518169",
        appId: "1:461013518169:web:5e92081fbacb3aadaf2e48"
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);

    const userId = "userId1"; // تحديد userId

    document.querySelectorAll('.rating').forEach(ratingDiv => {
        const toolId = ratingDiv.getAttribute('data-tool-id');
        const stars = ratingDiv.querySelectorAll('.star');
        const averageDisplay = ratingDiv.querySelector('.average-rating');

        const updateStars = (average) => {
            stars.forEach((star, index) => {
                star.classList.remove('selected');
                if (index < Math.round(average)) {
                    star.classList.add('selected');
                }
            });
        };

        const toolRef = ref(database, `ratings/${toolId}`);
        onValue(toolRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const averageRating = (data.totalScore / data.totalVotes).toFixed(1);
                averageDisplay.textContent = `${averageRating}/5`;

                const totalVotesDisplay = ratingDiv.querySelector('.total-votes');
                totalVotesDisplay.textContent = `عدد التقييمات: ${data.totalVotes}`;

                updateStars(averageRating); // تحديث النجوم
                sortTools(); // ترتيب الأدوات بعد التقييم
            }
        });

        stars.forEach(star => {
            star.addEventListener('click', () => {
                const ratingValue = parseInt(star.getAttribute('data-value'));

                get(ref(database, `ratings/${toolId}/userRatings/${userId}`)).then(snapshot => {
                    const userRatings = snapshot.val()?.ratings || [];
                    const currentTimestamp = Date.now();
                    const lastRatingTimestamp = userRatings.length > 0 ? userRatings[userRatings.length - 1].timestamp : 0;
                    const timeDiffInMonths = (currentTimestamp - lastRatingTimestamp) / (1000 * 60 * 60 * 24 * 30);

                    if (userRatings.length >= 2) {
                        const firstRatingTimestamp = userRatings[0].timestamp;
                        const diffInMonths = (currentTimestamp - firstRatingTimestamp) / (1000 * 60 * 60 * 24 * 30);

                        if (diffInMonths < 1) {
                            alert("لقد قمت بتقييم هذه الأداة مرتين هذا الشهر. يمكنك تقييمها مرة أخرى الشهر القادم.");
                            return;
                        }
                    }

                    get(toolRef).then(snapshot => {
                        const data = snapshot.val() || { totalScore: 0, totalVotes: 0, userRatings: {} };
                        const newTotalScore = data.totalScore + ratingValue;
                        const newTotalVotes = data.totalVotes + 1;

                        const newUserRatings = {
                            ...data.userRatings,
                            [userId]: {
                                ratings: [
                                    ...userRatings,
                                    { rating: ratingValue, timestamp: currentTimestamp }
                                ]
                            }
                        };

                        update(toolRef, {
                            totalScore: newTotalScore,
                            totalVotes: newTotalVotes,
                            userRatings: newUserRatings
                        });

                        updateStars((newTotalScore / newTotalVotes).toFixed(1));
                        sortTools(); // ترتيب الأدوات بعد التقييم
                    });
                });
            });
        });
    });

    function sortTools() {
        const toolsContainer = document.querySelector('.tools-grid');
        const tools = Array.from(toolsContainer.children);

        // ترتيب الأدوات بناءً على التقييم
        tools.sort((a, b) => {
            const ratingA = parseFloat(a.querySelector('.average-rating').textContent) || 0;
            const ratingB = parseFloat(b.querySelector('.average-rating').textContent) || 0;
            return ratingB - ratingA; // ترتيب من الأعلى للأدنى
        });

        toolsContainer.innerHTML = '';

        tools.forEach((tool, index) => {
            // إزالة الشارات القديمة
            tool.classList.remove('gold', 'silver', 'bronze');
            
            // إضافة الشارات بناءً على الترتيب
            if (index === 0) {
                tool.classList.add('gold');
            } else if (index === 1) {
                tool.classList.add('silver');
            } else if (index === 2) {
                tool.classList.add('bronze');
            }

            toolsContainer.appendChild(tool);
        });
    }

    document.addEventListener('DOMContentLoaded', sortTools);

