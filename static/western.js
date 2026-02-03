document.addEventListener("DOMContentLoaded", () => {

    if (!document.getElementById("westernMenuTitle")) return;

    let currentLang = "en";

    const languageDropdown = document.getElementById("languageDropdown");
    const stallButtons = document.querySelectorAll(".stall-btn");
    const foodCards = document.getElementById("food-cards");

    /* ============================
       WESTERN STALL DATA
    ============================ */
    const westernStallData = {

        "fc1-ace-western": {
            name: { en: "ACE Western (FC1)", zh: "ACE 西餐 (FC1)", ms: "ACE Barat (FC1)", ta: "ACE வெஸ்டர்ன் (FC1)" },
            items: [
                {
                    name: { en: "Chicken Cutlet", zh: "鸡排", ms: "Chicken Cutlet", ta: "சிக்கன் கட்லெட்" },
                    price: "$6.50 - $8.50",
                    rating: "4.0",
                    comment: {
                        en: "Modern Western snacks with solid flavors.",
                        zh: "现代西式小吃，味道不错。",
                        ms: "Snek Barat moden dengan rasa yang sedap.",
                        ta: "நவீன வெஸ்டர்ன் ஸ்நாக்ஸ், நல்ல சுவை."
                    },
                    image: "static/images/chicken_cutlet.jpg"
                },
                {
                    name: { en: "Mentaiko Mayo Fries", zh: "明太子蛋黄酱薯条", ms: "Kentang Goreng Mentaiko", ta: "மெந்தைக்கோ ஃப்ரைஸ்" },
                    price: "~$6.50",
                    rating: "4.0",
                    comment: {
                        en: "Great for sharing, creamy and savory.",
                        zh: "适合分享，浓郁香滑。",
                        ms: "Sesuai untuk berkongsi, berkrim dan sedap.",
                        ta: "பகிர்வதற்கு சிறந்தது, க்ரீமியான சுவை."
                    },
                    image: "static/images/mentaiko_fries.jpg"
                }
            ]
        },

        "fc2-western-stall": {
            name: { en: "Western Stall (FC2)", zh: "西餐摊位 (FC2)", ms: "Gerai Barat (FC2)", ta: "வெஸ்டர்ன் ஸ்டால் (FC2)" },
            items: [
                {
                    name: { en: "Grilled Chicken with Butter Rice", zh: "烤鸡配黄油饭", ms: "Ayam Panggang dengan Nasi Mentega", ta: "கிரில் சிக்கன் பட்டர் ரைஸ்" },
                    price: "$5.50 - $7.50",
                    rating: "3.9",
                    comment: {
                        en: "Simple and filling Western meal.",
                        zh: "简单又饱足的西餐。",
                        ms: "Hidangan Barat ringkas dan mengenyangkan.",
                        ta: "எளிய மற்றும் நிறைவான உணவு."
                    },
                    image: "static/images/grilled_chicken_butter_rice.jpg"
                }
            ]
        },

        "fc3-mb-western": {
            name: { en: "M&B Western (FC3)", zh: "M&B 西餐 (FC3)", ms: "M&B Barat (FC3)", ta: "M&B வெஸ்டர்ன் (FC3)" },
            items: [
                {
                    name: { en: "Chicken Chop (Mash / Spaghetti)", zh: "鸡扒（土豆泥/意面）", ms: "Chicken Chop (Kentang / Spaghetti)", ta: "சிக்கன் சாப்" },
                    price: "$5.80 - $7.00",
                    rating: "4.4",
                    comment: {
                        en: "Huge portions and creamy mash. Student favorite.",
                        zh: "份量大，土豆泥香滑。学生最爱。",
                        ms: "Bahagian besar dan kentang lenyek berkrim.",
                        ta: "பெரிய பங்குகள், மாணவர்களின் பிடித்தது."
                    },
                    image: "static/images/chicken_chop_mb.jpg"
                }
            ]
        },

        "fc4-koufu-western": {
            name: { en: "Western Cuisine (FC4)", zh: "西餐料理 (FC4)", ms: "Masakan Barat (FC4)", ta: "வெஸ்டர்ன் குய்சின் (FC4)" },
            items: [
                {
                    name: { en: "Black Pepper Chicken Chop", zh: "黑胡椒鸡扒", ms: "Chicken Chop Lada Hitam", ta: "பிளாக் பெப்பர் சிக்கன்" },
                    price: "$5.00 - $7.50",
                    rating: "4.1",
                    comment: {
                        en: "Consistent quality and fragrant sauce.",
                        zh: "品质稳定，酱汁香浓。",
                        ms: "Kualiti konsisten dan sos beraroma.",
                        ta: "நிலையான தரம்."
                    },
                    image: "static/images/black_pepper_chicken.jpg"
                }
            ]
        },

        "fc5-bang-deli": {
            name: { en: "Bang Deli / Western (FC5)", zh: "Bang 熟食 / 西餐 (FC5)", ms: "Bang Deli Barat (FC5)", ta: "Bang டெலி (FC5)" },
            items: [
                {
                    name: { en: "Chicken Chop with Pasta", zh: "鸡扒配意面", ms: "Chicken Chop dengan Pasta", ta: "சிக்கன் சாப் பாஸ்தா" },
                    price: "$5.50 - $7.90",
                    rating: "3.8",
                    comment: {
                        en: "Decent portions, convenient location.",
                        zh: "份量尚可，位置方便。",
                        ms: "Bahagian sederhana dan lokasi mudah.",
                        ta: "வசதியான இடம்."
                    },
                    image: "static/images/chicken_chop_pasta.jpg"
                }
            ]
        },

        "fc6-pasta-bites": {
            name: { en: "Pasta & Bites (FC6)", zh: "意面与小吃 (FC6)", ms: "Pasta & Bites (FC6)", ta: "பாஸ்தா & பைட்ஸ் (FC6)" },
            items: [
                {
                    name: { en: "Fish & Chips", zh: "炸鱼薯条", ms: "Ikan & Kentang Goreng", ta: "ஃபிஷ் & சிப்ஸ்" },
                    price: "$4.50 - $6.50",
                    rating: "3.7",
                    comment: {
                        en: "Budget-friendly Western fix.",
                        zh: "实惠的西餐选择。",
                        ms: "Pilihan Barat bajet.",
                        ta: "பட்ஜெட் வெஸ்டர்ன் உணவு."
                    },
                    image: "static/images/fish_and_chips.jpg"
                }
            ]
        }
    };

    /* ============================
       TRANSLATIONS
    ============================ */
    const translations = {
        en: {
            title: "Western Food Menu",
            gpsTitle: "GPS Map of Singapore Polytechnic",
            gpsHint: "Tap a Food Court button to view its location",
            labels: { price: "Price", rating: "Rating" },
            langLabel: "Language",
            fcButtons: ["Food Court 1", "Food Court 2", "Food Court 3", "Food Court 4", "Food Court 5", "Food Court 6"],
            stallButtons: {
                "fc1-ace-western": "ACE Western (FC1)",
                "fc2-western-stall": "Western Stall (FC2)",
                "fc3-mb-western": "M&B Western (FC3)",
                "fc4-koufu-western": "Western Cuisine (FC4)",
                "fc5-bang-deli": "Bang Deli / Western (FC5)",
                "fc6-pasta-bites": "Pasta & Bites (FC6)"
            }
        },
        zh: {
            title: "西餐菜单",
            gpsTitle: "新加坡理工学院GPS地图",
            gpsHint: "点击食阁按钮查看位置",
            labels: { price: "价格", rating: "评分" },
            langLabel: "语言",
            fcButtons: ["食阁 1", "食阁 2", "食阁 3", "食阁 4", "食阁 5", "食阁 6"],
            stallButtons: {
                "fc1-ace-western": "ACE 西餐 (FC1)",
                "fc2-western-stall": "西餐摊位 (FC2)",
                "fc3-mb-western": "M&B 西餐 (FC3)",
                "fc4-koufu-western": "西餐料理 (FC4)",
                "fc5-bang-deli": "Bang 熟食 / 西餐 (FC5)",
                "fc6-pasta-bites": "意面与小吃 (FC6)"
            }
        },
        ta: {
            title: "வெஸ்டர்ன் உணவு மெனு",
            gpsTitle: "சிங்கப்பூர் பாலிடெக்னிக் GPS வரைபடம்",
            gpsHint: "இடத்தை பார்க்க உணவக பொத்தானை அழுத்தவும்",
            labels: { price: "விலை", rating: "மதிப்பீடு" },
            langLabel: "மொழி",
            fcButtons: ["உணவு நிலையம் 1", "உணவு நிலையம் 2", "உணவு நிலையம் 3", "உணவு நிலையம் 4", "உணவு நிலையம் 5", "உணவு நிலையம் 6"],
            stallButtons: {
                "fc1-ace-western": "ACE வெஸ்டர்ன் (FC1)",
                "fc2-western-stall": "வெஸ்டர்ன் ஸ்டால் (FC2)",
                "fc3-mb-western": "M&B வெஸ்டர்ன் (FC3)",
                "fc4-koufu-western": "வெஸ்டர்ன் குய்சின் (FC4)",
                "fc5-bang-deli": "Bang டெலி / வெஸ்டர்ன் (FC5)",
                "fc6-pasta-bites": "பாஸ்தா & பைட்ஸ் (FC6)"
            }
        },
        ms: {
            title: "Menu Makanan Barat",
            gpsTitle: "Peta GPS Politeknik Singapura",
            gpsHint: "Tekan butang dewan makan untuk melihat lokasi",
            labels: { price: "Harga", rating: "Penilaian" },
            langLabel: "Bahasa",
            fcButtons: ["Dewan Makan 1", "Dewan Makan 2", "Dewan Makan 3", "Dewan Makan 4", "Dewan Makan 5", "Dewan Makan 6"],
            stallButtons: {
                "fc1-ace-western": "ACE Barat (FC1)",
                "fc2-western-stall": "Gerai Barat (FC2)",
                "fc3-mb-western": "M&B Barat (FC3)",
                "fc4-koufu-western": "Masakan Barat (FC4)",
                "fc5-bang-deli": "Bang Deli Barat (FC5)",
                "fc6-pasta-bites": "Pasta & Bites (FC6)"
            }
        }
    };

    /* ============================
       APPLY LANGUAGE
    ============================ */
    function applyLanguage(lang) {
        currentLang = lang;

        // Update title, GPS, and language label
        document.getElementById("westernMenuTitle").textContent = translations[lang].title;
        document.getElementById("gpsTitle").textContent = translations[lang].gpsTitle;
        document.getElementById("gpsHint").textContent = translations[lang].gpsHint;
        document.getElementById("langLabel").textContent = translations[lang].langLabel;

        // Update Food Court buttons
        const fcButtons = document.querySelectorAll(".fc-btn");
        fcButtons.forEach((btn, index) => {
            btn.textContent = translations[lang].fcButtons[index];
        });

        // Update Stall buttons
        stallButtons.forEach(btn => {
            const stallKey = btn.dataset.stall;
            btn.textContent = translations[lang].stallButtons[stallKey];
        });
    }

    /* ============================
       STALL CLICK
    ============================ */
    stallButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            const stall = westernStallData[btn.dataset.stall];
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
       FOOD COURT BUTTON LOGIC (WESTERN)
    ============================ */

    const foodCourtLocations = {
        "Food Court 1": "Singapore Polytechnic Food Court 1",
        "Food Court 2": "Singapore Polytechnic Food Court 2",
        "Food Court 3": "Food Court 3 (Foodgle)",
        "Food Court 4": "Koufu Food Court 4 Singapore Poly",
        "Food Court 5": "Singapore Polytechnic Food Court 5",
        "Food Court 6": "Food Canopy - Singapore Poly"
    };

    const fcButtons = document.querySelectorAll(".fc-btn");
    const mapFrame = document.getElementById("spMap");

    fcButtons.forEach(fcBtn => {
        fcBtn.addEventListener("click", () => {
            
            /* Active button highlight */
            fcButtons.forEach(b => b.classList.remove("active"));
            fcBtn.classList.add("active");

            /* Update Google Map */
            const location = foodCourtLocations[fcBtn.dataset.fc];
            if (location) {
                mapFrame.src =
                `https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`;
            }

            /* Hide food cards with animation */
            if (foodCards.style.display === "block") {
                foodCards.classList.remove("fade-in");
                foodCards.classList.add("fade-out");

                setTimeout(() => {
                    foodCards.style.display = "none";
                }, 400);
            }

            /* Hide all stall buttons */
            stallButtons.forEach(stallBtn => {
                stallBtn.style.display = "none";
            });

            /* Show stalls for selected food court */
            stallButtons.forEach(stallBtn => {
                if (stallBtn.dataset.fc === fcBtn.dataset.fc) {
                    stallBtn.style.display = "inline-block";
                }
            });
        });
    });

    /* ============================
       LANGUAGE DROPDOWN
    ============================ */
    if (languageDropdown) {
        languageDropdown.addEventListener("change", e => {
            applyLanguage(e.target.value);
        });
    }

    applyLanguage("en");
});