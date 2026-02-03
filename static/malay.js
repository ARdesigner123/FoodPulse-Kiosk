document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       MALAY PAGE CHECK
    ============================ */
    if (!document.getElementById("malayMenuTitle")) return;

    let currentLang = "en";

    const languageDropdown = document.getElementById("languageDropdown");
    const stallButtons = document.querySelectorAll(".stall-btn");
    const foodCards = document.getElementById("food-cards");

    /* ============================
       MALAY STALL DATA (WITH TRANSLATIONS)
    ============================ */
    const malayStallData = {

        "fc1-muslim-cuisine": {
            name: {
                en: "Muslim Cuisine (FC1)",
                zh: "穆斯林美食 (FC1)",
                ms: "Masakan Muslim (FC1)",
                ta: "முஸ்லிம் சமையல் (FC1)"
            },
            items: [
                {
                    name: {
                        en: "Nasi Lemak",
                        zh: "椰浆饭",
                        ms: "Nasi Lemak",
                        ta: "நாசி லெமாக்"
                    },
                    price: "$3.50 - $4.50",
                    rating: "3.8",
                    comment: {
                        en: "Standard, reliable Malay fare. Sambal is fragrant.",
                        zh: "标准的可靠马来美食。参巴酱香气扑鼻。",
                        ms: "Makanan Melayu standard dan boleh dipercayai. Sambal wangi.",
                        ta: "நிலையான, நம்பகமான மலாய் உணவு. சம்பல் வாசனை நிறைந்தது."
                    },
                    image: "static/images/nasi_lemak.jpg"
                },
                {
                    name: {
                        en: "Mee Rebus",
                        zh: "煮面",
                        ms: "Mee Rebus",
                        ta: "மீ ரெபுஸ்"
                    },
                    price: "$3.50 - $4.00",
                    rating: "3.8",
                    comment: {
                        en: "Comforting breakfast option. Often sold out by late morning.",
                        zh: "令人安慰的早餐选择。经常在上午晚些时候售罄。",
                        ms: "Pilihan sarapan yang menenangkan. Selalunya habis dijual pada lewat pagi.",
                        ta: "ஆறுதலான காலை உணவு விருப்பம். பெரும்பாலும் காலைக்கு தாமதமாக விற்றுவிடும்."
                    },
                    image: "static/images/mee_rebus.jpg"
                }
            ]
        },

        "fc2-indonesian-express": {
            name: {
                en: "Indonesian Express (FC2)",
                zh: "印尼快餐 (FC2)",
                ms: "Ekspres Indonesia (FC2)",
                ta: "இந்தோனேசியன் எக்ஸ்பிரஸ் (FC2)"
            },
            items: [
                {
                    name: {
                        en: "Ayam Penyet",
                        zh: "压扁鸡",
                        ms: "Ayam Penyet",
                        ta: "அயம் பென்யெட்"
                    },
                    price: "$4.50 - $5.50",
                    rating: "4.8",
                    comment: {
                        en: "Crispy chicken with deadly spicy sambal. Best food in SP.",
                        zh: "酥脆的鸡肉配致命辣的参巴酱。SP最好的食物。",
                        ms: "Ayam rangup dengan sambal pedas mematikan. Makanan terbaik di SP.",
                        ta: "கிரிஸ்பி கோழி கொடிய மசாலா சம்பலுடன். SP இல் சிறந்த உணவு."
                    },
                    image: "static/images/ayam_penyet.jpg"
                }
            ]
        },

        "fc3-malay-stall": {
            name: {
                en: "Malay Stall (FC3)",
                zh: "马来摊位 (FC3)",
                ms: "Gerai Melayu (FC3)",
                ta: "மலாய் ஸ்டால் (FC3)"
            },
            items: [
                {
                    name: {
                        en: "Nasi Padang",
                        zh: "峇峇娘惹饭",
                        ms: "Nasi Padang",
                        ta: "நாசி படாங்"
                    },
                    price: "~$4.50",
                    rating: "4.0",
                    comment: {
                        en: "Large variety of lauk. Very filling.",
                        zh: "丰富的菜肴选择。非常饱腹。",
                        ms: "Pelbagai lauk yang banyak. Sangat mengenyangkan.",
                        ta: "பெரிய வகையான லாக். மிகவும் நிரப்புதல்."
                    },
                    image: "static/images/nasi_padang.jpg"
                },
                {
                    name: {
                        en: "Nasi Lemak",
                        zh: "椰浆饭",
                        ms: "Nasi Lemak",
                        ta: "நாசி லெமாக்"
                    },
                    price: "$3.50 - $5.00",
                    rating: "4.0",
                    comment: {
                        en: "Authentic sambal with a sweet-spicy balance.",
                        zh: "正宗的参巴酱，甜辣平衡。",
                        ms: "Sambal autentik dengan keseimbangan manis-pedas.",
                        ta: "அசல் சம்பல் இனிப்பு-காரமான சமநிலையுடன்."
                    },
                    image: "static/images/nasi_lemak.jpg"
                }
            ]
        },

        "fc4-muslim-stall": {
            name: {
                en: "Muslim Stall (Koufu) (FC4)",
                zh: "穆斯林摊位 (Koufu) (FC4)",
                ms: "Gerai Muslim (Koufu) (FC4)",
                ta: "முஸ்லிம் ஸ்டால் (கோஃபு) (FC4)"
            },
            items: [
                {
                    name: {
                        en: "Mee Siam",
                        zh: "暹罗面",
                        ms: "Mee Siam",
                        ta: "மீ சியாம்"
                    },
                    price: "$3.00 - $4.00",
                    rating: "3.9",
                    comment: {
                        en: "Light and tangy. Popular breakfast choice.",
                        zh: "清淡而酸爽。受欢迎的早餐选择。",
                        ms: "Ringan dan masam. Pilihan sarapan popular.",
                        ta: "இலகான மற்றும் புளிப்பான. பிரபலமான காலை உணவு தேர்வு."
                    },
                    image: "static/images/mee_siam.jpg"
                },
                {
                    name: {
                        en: "Lontong",
                        zh: "椰浆饭",
                        ms: "Lontong",
                        ta: "லொன்டாங்"
                    },
                    price: "$3.50 - $4.50",
                    rating: "3.9",
                    comment: {
                        en: "Comfort food with rich coconut gravy.",
                        zh: "舒适的食物配丰富的椰浆酱汁。",
                        ms: "Makanan selesa dengan kuah santan yang kaya.",
                        ta: "ஆறுதலான உணவு செம்மரம் கிரேவியுடன்."
                    },
                    image: "static/images/lontong.jpg"
                }
            ]
        },

        "fc5-food-connection": {
            name: {
                en: "Food Connection (FC5)",
                zh: "美食连接 (FC5)",
                ms: "Sambungan Makanan (FC5)",
                ta: "உணவு இணைப்பு (FC5)"
            },
            items: [
                {
                    name: {
                        en: "Malay Rice Set",
                        zh: "马来饭套餐",
                        ms: "Set Nasi Melayu",
                        ta: "மலாய் ரைஸ் செட்"
                    },
                    price: "$4.00 - $6.00",
                    rating: "3.7",
                    comment: {
                        en: "Decent portions and convenient location.",
                        zh: "份量适中，位置便利。",
                        ms: "Bahagian yang sederhana dan lokasi yang mudah.",
                        ta: "பொருத்தமான பங்குகள் மற்றும் வசதியான இடம்."
                    },
                    image: "static/images/malay_rice.jpg"
                }
            ]
        },

        "fc6-malay-indian-mix": {
            name: {
                en: "Malay / Indian Mix (FC6)",
                zh: "马来 / 印度混合 (FC6)",
                ms: "Campuran Melayu / India (FC6)",
                ta: "மலாய் / இந்தியன் மிக்ஸ் (FC6)"
            },
            items: [
                {
                    name: {
                        en: "Mee Goreng",
                        zh: "炒面",
                        ms: "Mee Goreng",
                        ta: "மீ கோரெங்"
                    },
                    price: "$3.00 - $4.50",
                    rating: "3.5",
                    comment: {
                        en: "Student favourite for late afternoons.",
                        zh: "学生最爱的下午晚些时候选择。",
                        ms: "Kegemaran pelajar untuk petang lewat.",
                        ta: "மாணவர்களின் பிடித்த மாலைக்கு தாமதமானது."
                    },
                    image: "static/images/mee_goreng.jpg"
                },
                {
                    name: {
                        en: "Prata",
                        zh: "印度薄饼",
                        ms: "Prata",
                        ta: "பிராட்டா"
                    },
                    price: "$2.50 - $4.00",
                    rating: "3.5",
                    comment: {
                        en: "Affordable and filling snack option.",
                        zh: "实惠且饱腹的小吃选择。",
                        ms: "Pilihan snek yang mampu milik dan mengenyangkan.",
                        ta: "மலிவான மற்றும் நிரப்பும் ஸ்னாக் விருப்பம்."
                    },
                    image: "static/images/prata.jpg"
                }
            ]
        }
    };

    /* ============================
       TRANSLATIONS (MALAY PAGE)
    ============================ */
    const malayTranslations = {
        en: {
            title: "Malay Food Menu",
            gpsTitle: "GPS Map of Singapore Polytechnic",
            gpsHint: "Tap a Food Court button to view its location",
            labels: { price: "Price", rating: "Rating" },
            fcButtons: ["Food Court 1", "Food Court 2", "Food Court 3", "Food Court 4", "Food Court 5", "Food Court 6"],
            stallButtons: {
                "fc1-muslim-cuisine": "Muslim Cuisine (FC1)",
                "fc2-indonesian-express": "Indonesian Express - Ayam Penyet (FC2)",
                "fc3-malay-stall": "Malay Stall - Nasi Padang (FC3)",
                "fc4-muslim-stall": "Muslim Stall (Koufu) - Mee Siam / Lontong (FC4)",
                "fc5-food-connection": "Food Connection - Malay Rice Sets (FC5)",
                "fc6-malay-indian-mix": "Malay / Indian Mix - Prata & Mee Goreng (FC6)"
            }
        },
        zh: {
            title: "马来美食菜单",
            gpsTitle: "新加坡理工学院GPS地图",
            gpsHint: "点击食阁按钮查看位置",
            labels: { price: "价格", rating: "评分" },
            fcButtons: ["食阁 1", "食阁 2", "食阁 3", "食阁 4", "食阁 5", "食阁 6"],
            stallButtons: {
                "fc1-muslim-cuisine": "穆斯林美食 (FC1)",
                "fc2-indonesian-express": "印尼快餐 - 压扁鸡 (FC2)",
                "fc3-malay-stall": "马来摊位 - 峇峇娘惹饭 (FC3)",
                "fc4-muslim-stall": "穆斯林摊位 (Koufu) - 暹罗面 / 椰浆饭 (FC4)",
                "fc5-food-connection": "美食连接 - 马来饭套餐 (FC5)",
                "fc6-malay-indian-mix": "马来 / 印度混合 - 印度薄饼 & 炒面 (FC6)"
            }
        },
        ta: {
            title: "மலாய் உணவு மெனு",
            gpsTitle: "சிங்கப்பூர் பாலிடெக்னிக் GPS வரைபடம்",
            gpsHint: "இடத்தை பார்க்க உணவக பொத்தானை அழுத்தவும்",
            labels: { price: "விலை", rating: "மதிப்பீடு" },
            fcButtons: ["உணவு நிலையம் 1", "உணவு நிலையம் 2", "உணவு நிலையம் 3", "உணவு நிலையம் 4", "உணவு நிலையம் 5", "உணவு நிலையம் 6"],
            stallButtons: {
                "fc1-muslim-cuisine": "முஸ்லிம் சமையல் (FC1)",
                "fc2-indonesian-express": "இந்தோனேசியன் எக்ஸ்பிரஸ் - அயம் பென்யெட் (FC2)",
                "fc3-malay-stall": "மலாய் ஸ்டால் - நாசி படாங் (FC3)",
                "fc4-muslim-stall": "முஸ்லிம் ஸ்டால் (கோஃபு) - மீ சியாம் / லொன்டாங் (FC4)",
                "fc5-food-connection": "உணவு இணைப்பு - மலாய் ரைஸ் செட் (FC5)",
                "fc6-malay-indian-mix": "மலாய் / இந்தியன் மிக்ஸ் - பிராட்டா & மீ கோரெங் (FC6)"
            }
        },
        ms: {
            title: "Menu Makanan Melayu",
            gpsTitle: "Peta GPS Politeknik Singapura",
            gpsHint: "Tekan butang dewan makan untuk melihat lokasi",
            labels: { price: "Harga", rating: "Penilaian" },
            fcButtons: ["Dewan Makan 1", "Dewan Makan 2", "Dewan Makan 3", "Dewan Makan 4", "Dewan Makan 5", "Dewan Makan 6"],
            stallButtons: {
                "fc1-muslim-cuisine": "Masakan Muslim (FC1)",
                "fc2-indonesian-express": "Ekspres Indonesia - Ayam Penyet (FC2)",
                "fc3-malay-stall": "Gerai Melayu - Nasi Padang (FC3)",
                "fc4-muslim-stall": "Gerai Muslim (Koufu) - Mee Siam / Lontong (FC4)",
                "fc5-food-connection": "Sambungan Makanan - Set Nasi Melayu (FC5)",
                "fc6-malay-indian-mix": "Campuran Melayu / India - Prata & Mee Goreng (FC6)"
            }
        }
    };

    /* ============================
       APPLY LANGUAGE
    ============================ */
    function applyLanguage(lang) {
        currentLang = lang;

        // Update title and GPS hint
        document.getElementById("malayMenuTitle").textContent = malayTranslations[lang].title;
        document.getElementById("gpsTitle").textContent = malayTranslations[lang].gpsTitle;
        document.getElementById("gpsHint").textContent = malayTranslations[lang].gpsHint;

        // Update Food Court buttons
        const fcButtons = document.querySelectorAll(".fc-btn");
        fcButtons.forEach((btn, index) => {
            btn.textContent = malayTranslations[lang].fcButtons[index];
        });

        // Update Stall buttons
        stallButtons.forEach(btn => {
            const stallKey = btn.dataset.stall;
            btn.textContent = malayTranslations[lang].stallButtons[stallKey];
        });
    }

    /* ============================
       STALL CLICK HANDLER
    ============================ */
    stallButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            const stallKey = btn.dataset.stall;
            const stall = malayStallData[stallKey];

            if (!stall) return;

            const gridClass = stall.items.length === 1
                ? "cards-grid single"
                : "cards-grid";

            const labels = malayTranslations[currentLang].labels;

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
                    </div>
                `;
            });

            foodCards.innerHTML += `</div>`;
            foodCards.style.display = "block";
            foodCards.classList.remove("fade-out");
            foodCards.classList.add("fade-in");

            foodCards.scrollIntoView({ behavior: "smooth" });
        });
    });

    /* ============================
    FOOD COURT BUTTON LOGIC (MALAY)
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