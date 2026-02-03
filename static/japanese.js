document.addEventListener("DOMContentLoaded", () => {

    if (!document.getElementById("japaneseMenuTitle")) return;

    let currentLang = "en";

    const foodCards = document.getElementById("food-cards");
    const stallButtons = document.querySelectorAll(".stall-btn");
    const fcButtons = document.querySelectorAll(".fc-btn");
    const mapFrame = document.getElementById("spMap");
    const languageDropdown = document.getElementById("languageDropdown");

    /* =========================
       JAPANESE STALL DATA
    ========================= */
    const japaneseStallData = {

        "fc1-japanese-curry": {
            name: {
                en: "Japanese Curry (FC1)",
                zh: "日式咖喱 (FC1)",
                ms: "Kari Jepun (FC1)",
                ta: "ஜப்பானிய கரி (FC1)"
            },
            items: [
                {
                    name: {
                        en: "Chicken Katsu Curry Rice",
                        zh: "炸鸡排咖喱饭",
                        ms: "Kari Ayam Katsu",
                        ta: "சிக்கன் கட்ஸு கரி"
                    },
                    price: "$4.00 - $6.00",
                    rating: "4.8",
                    comment: {
                        en: "Best value Japanese curry in SP. Rich and filling.",
                        zh: "SP性价比最高的日式咖喱, 浓郁又饱足。",
                        ms: "Nilai terbaik kari Jepun di SP.",
                        ta: "SP-இல் சிறந்த மதிப்புள்ள ஜப்பானிய கரி."
                    },
                    image: "static/images/jap_curry.jpg"
                }
            ]
        },

        "fc2-japanese-don": {
            name: {
                en: "Japanese Cuisine (FC2)",
                zh: "日式料理 (FC2)",
                ms: "Masakan Jepun (FC2)",
                ta: "ஜப்பானிய உணவு (FC2)"
            },
            items: [
                {
                    name: {
                        en: "Yakiniku Chicken Don",
                        zh: "烧肉鸡肉盖饭",
                        ms: "Don Ayam Yakiniku",
                        ta: "யாக்கினிகு சிக்கன் டான்"
                    },
                    price: "$4.00 - $5.50",
                    rating: "4.2",
                    comment: {
                        en: "Tender chicken with perfectly balanced sauce.",
                        zh: "鸡肉嫩滑，酱汁恰到好处。",
                        ms: "Ayam lembut dengan sos seimbang.",
                        ta: "மிக மென்மையான சிக்கன்."
                    },
                    image: "static/images/yakiniku_don.jpg"
                }
            ]
        },

        "fc3-bagus-jap": {
            name: {
                en: "Bagus Japanese & Korean (FC3)",
                zh: "Bagus 日韩料理 (FC3)",
                ms: "Bagus Jepun & Korea (FC3)",
                ta: "Bagus ஜப்பான் & கொரிய (FC3)"
            },
            items: [
                {
                    name: {
                        en: "Teriyaki Chicken & Ebi Bento",
                        zh: "照烧鸡 & 炸虾便当",
                        ms: "Bento Ayam Teriyaki & Ebi",
                        ta: "டெரியாக்கி சிக்கன் & எபி பென்டோ"
                    },
                    price: "$5.50 - $8.50",
                    rating: "4.0",
                    comment: {
                        en: "Free miso soup with bento sets.",
                        zh: "便当附送味噌汤。",
                        ms: "Sup miso percuma dengan set.",
                        ta: "மிசோ சூப் இலவசம்."
                    },
                    image: "static/images/teriyaki_bento.jpg"
                }
            ]
        },

        "fc4-tamagood": {
            name: {
                en: "Tamagood (FC4)",
                zh: "Tamagood (FC4)",
                ms: "Tamagood (FC4)",
                ta: "Tamagood (FC4)"
            },
            items: [
                {
                    name: {
                        en: "Salmon Bowl",
                        zh: "三文鱼盖饭",
                        ms: "Salmon Don",
                        ta: "சால்மன் டான்"
                    },
                    price: "$6.50 - $9.50",
                    rating: "4.6",
                    comment: {
                        en: "MasterChef-level quality at student prices.",
                        zh: "学生价位的餐厅级品质。",
                        ms: "Kualiti restoran dengan harga pelajar.",
                        ta: "உயர் தரம்."
                    },
                    image: "static/images/salmon_bowl.jpg"
                }
            ]
        },

        "fc4-koufu-jap": {
            name: {
                en: "Koufu Japanese (FC4)",
                zh: "Koufu 日式料理 (FC4)",
                ms: "Koufu Jepun (FC4)",
                ta: "Koufu ஜப்பானிய (FC4)"
            },
            items: [
                {
                    name: {
                        en: "Hotplate Saba Fish Set",
                        zh: "铁板鲭鱼套餐",
                        ms: "Set Ikan Saba Panas",
                        ta: "சாபா மீன் ஹாட்ப்ளேட்"
                    },
                    price: "$6.50 - $7.50",
                    rating: "3.9",
                    comment: {
                        en: "Crispy skin and juicy meat.",
                        zh: "鱼皮香脆，鱼肉多汁。",
                        ms: "Kulit rangup dan isi berjus.",
                        ta: "குர்குரப்பான தோல்."
                    },
                    image: "static/images/saba_fish.jpg"
                }
            ]
        },

        "fc5-food-connection": {
            name: {
                en: "Food Connection Jap (FC5)",
                zh: "Food Connection 日式 (FC5)",
                ms: "Food Connection Jepun (FC5)",
                ta: "Food Connection ஜப்பான் (FC5)"
            },
            items: [
                {
                    name: {
                        en: "Saba Fish + Chicken Set",
                        zh: "鲭鱼 + 鸡肉套餐",
                        ms: "Set Ikan Saba + Ayam",
                        ta: "சாபா மீன் + சிக்கன் செட்"
                    },
                    price: "$5.50 - $7.50",
                    rating: "3.8",
                    comment: {
                        en: "Good value duo set for sharing.",
                        zh: "双拼套餐性价比高。",
                        ms: "Set duo berbaloi.",
                        ta: "நல்ல மதிப்பு."
                    },
                    image: "static/images/saba_chicken_set.jpg"
                }
            ]
        }
    };

    /* =========================
       TRANSLATIONS
    ========================= */
    const translations = {
    en: {
        title: "Japanese Food Menu",
        gpsTitle: "GPS Map of Singapore Polytechnic",
        gpsHint: "Tap a Food Court button to view its location",
        langLabel: "Language",
        fcButtons: [
            "Food Court 1",
            "Food Court 2",
            "Food Court 3",
            "Food Court 4",
            "Food Court 5",
            "Food Court 6"
        ],
        labels: { price: "Price", rating: "Rating" }
    },
    zh: {
        title: "日式料理菜单",
        gpsTitle: "新加坡理工学院地图",
        gpsHint: "点击食阁查看位置",
        langLabel: "语言",
        fcButtons: [
            "第一食阁",
            "第二食阁",
            "第三食阁",
            "第四食阁",
            "第五食阁",
            "第六食阁"
        ],
        labels: { price: "价格", rating: "评分" }
    },
    ms: {
        title: "Menu Makanan Jepun",
        gpsTitle: "Peta GPS Politeknik Singapura",
        gpsHint: "Tekan dewan makan untuk lokasi",
        langLabel: "Bahasa",
        fcButtons: [
            "Dewan Makan 1",
            "Dewan Makan 2",
            "Dewan Makan 3",
            "Dewan Makan 4",
            "Dewan Makan 5",
            "Dewan Makan 6"
        ],
        labels: { price: "Harga", rating: "Penilaian" }
    },
    ta: {
        title: "ஜப்பானிய உணவு மெனு",
        gpsTitle: "SP GPS வரைபடம்",
        gpsHint: "உணவகத்தை தேர்வு செய்யவும்",
        langLabel: "மொழி",
        fcButtons: [
            "உணவகம் 1",
            "உணவகம் 2",
            "உணவகம் 3",
            "உணவகம் 4",
            "உணவகம் 5",
            "உணவகம் 6"
        ],
        labels: { price: "விலை", rating: "மதிப்பீடு" }
    }
};

    function applyLanguage(lang) {
        currentLang = lang;

        document.getElementById("japaneseMenuTitle").textContent = translations[lang].title;
        document.getElementById("gpsTitle").textContent = translations[lang].gpsTitle;
        document.getElementById("gpsHint").textContent = translations[lang].gpsHint;
        document.getElementById("langLabel").textContent = translations[lang].langLabel;

        /* Update Food Court buttons */
        fcButtons.forEach((btn, index) => {
            btn.textContent = translations[lang].fcButtons[index];
        });
    }

    /* =========================
       STALL CLICK
    ========================= */
    stallButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            const stall = japaneseStallData[btn.dataset.stall];
            if (!stall) return;

            const gridClass = stall.items.length === 1 ? "cards-grid single" : "cards-grid";
            const labels = translations[currentLang].labels;

            foodCards.innerHTML = `<h3>${stall.name[currentLang]}</h3><div class="${gridClass}">`;

            stall.items.forEach(item => {
                foodCards.innerHTML += `
                    <div class="food-card">
                        <img src="${item.image}" onerror="this.src='static/images/placeholder.jpg'">
                        <div class="food-name">${item.name[currentLang]}</div>
                        <div class="food-details">
                            <p><strong>${labels.price}:</strong> ${item.price}</p>
                            <p><strong>${labels.rating}:</strong> ${item.rating} ⭐</p>
                            <p><em>"${item.comment[currentLang]}"</em></p>
                        </div>
                    </div>`;
            });

            foodCards.innerHTML += `</div>`;
            foodCards.classList.remove("fade-in", "fade-out");
            void foodCards.offsetWidth;
            foodCards.style.display = "block";
            foodCards.classList.add("fade-in");

            setTimeout(() => {
                foodCards.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        });
    });

    /* ============================
    FOOD COURT LOCATIONS (JAPANESE)
    ============================ */

    const foodCourtLocations = {
        "Food Court 1": "Singapore Polytechnic Food Court 1",
        "Food Court 2": "Singapore Polytechnic Food Court 2",
        "Food Court 3": "Food Court 3 (Foodgle)",
        "Food Court 4": "Koufu Food Court 4 Singapore Poly",
        "Food Court 5": "Singapore Polytechnic Food Court 5",
        "Food Court 6": "Food Canopy - Singapore Poly"
    };

    /* =========================
    FOOD COURT BUTTONS (JAPANESE)
    ========================= */
fcButtons.forEach(fcBtn => {
    fcBtn.addEventListener("click", () => {

        /* Active highlight */
        fcButtons.forEach(b => b.classList.remove("active"));
        fcBtn.classList.add("active");

        /* Update Google Map */
        const location = foodCourtLocations[fcBtn.dataset.fc];
        if (location) {
            mapFrame.src =
                `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
        }

        /* Hide food cards */
        if (foodCards.style.display === "block") {
            foodCards.classList.remove("fade-in");
            foodCards.classList.add("fade-out");

            setTimeout(() => {
                foodCards.style.display = "none";
            }, 400);
        }

        /* Hide all stalls */
        stallButtons.forEach(s => s.style.display = "none");

        /* Show stalls for selected FC */
        stallButtons.forEach(s => {
            if (s.dataset.fc === fcBtn.dataset.fc) {
                s.style.display = "inline-block";
            }
        });
    });
});

    if (languageDropdown) {
        languageDropdown.addEventListener("change", e => applyLanguage(e.target.value));
    }

    applyLanguage("en");
});