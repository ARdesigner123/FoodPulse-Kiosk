document.addEventListener("DOMContentLoaded", () => {

    /* ============================
       KOREAN PAGE CHECK
    ============================ */
    if (!document.getElementById("koreanMenuTitle")) return;

    let currentLang = "en";

    const languageDropdown = document.getElementById("languageDropdown");
    const stallButtons = document.querySelectorAll(".stall-btn");
    const foodCards = document.getElementById("food-cards");

    /* ============================
       KOREAN STALL DATA (WITH TRANSLATIONS)
    ============================ */
    const koreanStallData = {

        "fc1-hope-n-joy-korean": {
            name: {
                en: "Hope N Joy Korean (FC1)",
                zh: "希望与欢乐韩国 (FC1)",
                ms: "Hope N Joy Korea (FC1)",
                ta: "ஹோப் அண்ட் ஜாய் கோரியன் (FC1)"
            },
            items: [
                {
                    name: {
                        en: "Hotplate BBQ Chicken + Saba Fish + Rice",
                        zh: "铁板烧烤鸡 + 鲭鱼 + 米饭",
                        ms: "Hotplate BBQ Ayam + Ikan Saba + Nasi",
                        ta: "ஹாட்பிளேட் பிபிக்யூ கோழி + சபா மீன் + அரிசி"
                    },
                    price: "~$7.50",
                    rating: "4.2",
                    comment: {
                        en: "The meat is well-marinated and tender. One of the better hotplates on campus.",
                        zh: "肉类腌制得很好，很嫩。是校园里更好的铁板之一。",
                        ms: "Dagingnya direndam dengan baik dan lembut. Salah satu hotplate terbaik di kampus.",
                        ta: "இறைச்சி நன்கு மரினேட் செய்யப்பட்டு மென்மையானது. கேம்பஸில் சிறந்த ஹாட்பிளேட்களில் ஒன்று."
                    },
                    image: "static/images/hotplate_bbq_chicken.jpg"
                },
                {
                    name: {
                        en: "BBQ Beef Rice",
                        zh: "烧烤牛肉饭",
                        ms: "Nasi BBQ Daging Lembu",
                        ta: "பிபிக்யூ மாட்டிறைச்சி அரிசி"
                    },
                    price: "~$6.50",
                    rating: "4.2",
                    comment: {
                        en: "Well-marinated and tender beef with rice.",
                        zh: "腌制得好的嫩牛肉配米饭。",
                        ms: "Daging lembu yang direndam dengan baik dan lembut dengan nasi.",
                        ta: "நன்கு மரினேட் செய்யப்பட்ட மென்மையான மாட்டிறைச்சி அரிசியுடன்."
                    },
                    image: "static/images/bbq_beef_rice.jpg"
                },
                {
                    name: {
                        en: "Kimchi Ramen",
                        zh: "泡菜拉面",
                        ms: "Kimchi Ramen",
                        ta: "கிம்ச்சி ராமன்"
                    },
                    price: "~$5.00",
                    rating: "4.2",
                    comment: {
                        en: "Spicy and comforting noodle dish.",
                        zh: "辣味且令人安慰的面条菜。",
                        ms: "Hidangan mi pedas dan menenangkan.",
                        ta: "காரமான மற்றும் ஆறுதலான நூடுல் உணவு."
                    },
                    image: "static/images/kimchi_ramen.jpg"
                }
            ]
        },

        "fc2-korean-cuisine": {
            name: {
                en: "Korean Cuisine (FC2)",
                zh: "韩国美食 (FC2)",
                ms: "Masakan Korea (FC2)",
                ta: "கோரியன் சமையல் (FC2)"
            },
            items: [
                {
                    name: {
                        en: "Hot Stone (Dolsot) Bibimbap",
                        zh: "热石石锅拌饭",
                        ms: "Bibimbap Batu Panas (Dolsot)",
                        ta: "ஹாட் ஸ்டோன் (டால்சாட்) பிபிம்பாப்"
                    },
                    price: "~$5.80",
                    rating: "4.3",
                    comment: {
                        en: "The bibimbap actually gets the crispy rice at the bottom! Highly recommended by staff and students alike.",
                        zh: "拌饭底部真的有脆脆的米饭！教职员工和学生都强烈推荐。",
                        ms: "Bibimbap sebenarnya mendapat nasi rangup di bahagian bawah! Sangat disyorkan oleh kakitangan dan pelajar.",
                        ta: "பிபிம்பாப் கீழே கிரிஸ்பி அரிசியைப் பெறுகிறது! ஊழியர்கள் மற்றும் மாணவர்களால் மிகவும் பரிந்துரைக்கப்படுகிறது."
                    },
                    image: "static/images/dolsot_bibimbap.jpg"
                },
                {
                    name: {
                        en: "Beef Bulgogi",
                        zh: "牛肉 Bulgogi",
                        ms: "Bulgogi Daging Lembu",
                        ta: "பீஃப் புல்கோகி"
                    },
                    price: "~$6.00",
                    rating: "4.3",
                    comment: {
                        en: "Authentic and flavorful marinated beef.",
                        zh: "正宗且美味的腌制牛肉。",
                        ms: "Daging lembu yang direndam dengan autentik dan berperisa.",
                        ta: "அசல் மற்றும் சுவை நிறைந்த மரினேட் செய்யப்பட்ட மாட்டிறைச்சி."
                    },
                    image: "static/images/beef_bulgogi.jpg"
                },
                {
                    name: {
                        en: "Spicy Pork Rice",
                        zh: "辣猪肉饭",
                        ms: "Nasi Babi Pedas",
                        ta: "காரமான பன்றி இறைச்சி அரிசி"
                    },
                    price: "~$6.00",
                    rating: "4.3",
                    comment: {
                        en: "Spicy and satisfying pork dish with rice.",
                        zh: "辣味且令人满足的猪肉菜配米饭。",
                        ms: "Hidangan babi pedas dan memuaskan dengan nasi.",
                        ta: "காரமான மற்றும் திருப்திகரமான பன்றி இறைச்சி உணவு அரிசியுடன்."
                    },
                    image: "static/images/spicy_pork_rice.jpg"
                }
            ]
        },

        "fc3-bagus-korean-japanese": {
            name: {
                en: "Bagus Korean / Japanese (FC3)",
                zh: "Bagus 韩国 / 日本 (FC3)",
                ms: "Bagus Korea / Jepun (FC3)",
                ta: "பகஸ் கோரியன் / ஜப்பானீஸ் (FC3)"
            },
            items: [
                {
                    name: {
                        en: "Kimchi Soup with Rice",
                        zh: "泡菜汤配米饭",
                        ms: "Sup Kimchi dengan Nasi",
                        ta: "கிம்ச்சி சூப் அரிசியுடன்"
                    },
                    price: "$5.50 - $6.50",
                    rating: "4.0",
                    comment: {
                        en: "Great for rainy days. The Kimchi soup is tangy and comes with plenty of tofu and meat.",
                        zh: "适合雨天。泡菜汤酸爽，配有大量豆腐和肉。",
                        ms: "Bagus untuk hari hujan. Sup Kimchi masam dan datang dengan banyak tofu dan daging.",
                        ta: "மழை நாட்களுக்கு சிறந்தது. கிம்ச்சி சூப் புளிப்பானது மற்றும் நிறைய டோஃபு மற்றும் இறைச்சியுடன் வருகிறது."
                    },
                    image: "static/images/kimchi_soup_rice.jpg"
                },
                {
                    name: {
                        en: "Salmon + Chicken Teriyaki Bento",
                        zh: "三文鱼 + 鸡肉照烧便当",
                        ms: "Bento Salmon + Ayam Teriyaki",
                        ta: "சால்மன் + கோழி டெரியாகி பென்டோ"
                    },
                    price: "~$8.50",
                    rating: "4.0",
                    comment: {
                        en: "Combination of Korean and Japanese flavors in a bento box.",
                        zh: "韩国和日本风味的便当盒组合。",
                        ms: "Gabungan perisa Korea dan Jepun dalam kotak bento.",
                        ta: "கோரியன் மற்றும் ஜப்பானீஸ் சுவைகளின் கலவை பென்டோ பாக்ஸில்."
                    },
                    image: "static/images/salmon_chicken_teriyaki.jpg"
                },
                {
                    name: {
                        en: "Spicy Rice Cakes (Tteokbokki)",
                        zh: "辣年糕 (Tteokbokki)",
                        ms: "Kek Nasi Pedas (Tteokbokki)",
                        ta: "காரமான அரிசி கேக்குகள் (ட்டியோக்போக்கி)"
                    },
                    price: "~$4.50",
                    rating: "4.0",
                    comment: {
                        en: "Chewy and spicy Korean street food favorite.",
                        zh: "有嚼劲且辣的韩国街头美食。",
                        ms: "Kegemaran makanan jalanan Korea yang kenyal dan pedas.",
                        ta: "கோரியன் தெரு உணவு பிடித்தமானது, மென்மையான மற்றும் காரமானது."
                    },
                    image: "static/images/tteokbokki.jpg"
                }
            ]
        },

        "fc4-koufu-korean-stall": {
            name: {
                en: "Koufu Korean Stall (FC4)",
                zh: "Koufu 韩国摊位 (FC4)",
                ms: "Gerai Korea Koufu (FC4)",
                ta: "கோஃபு கோரியன் ஸ்டால் (FC4)"
            },
            items: [
                {
                    name: {
                        en: "Chicken/Beef Bibimbap",
                        zh: "鸡肉/牛肉拌饭",
                        ms: "Bibimbap Ayam/Lembu",
                        ta: "கோழி/மாட்டிறைச்சி பிபிம்பாப்"
                    },
                    price: "$5.00 - $6.50",
                    rating: "4.1",
                    comment: {
                        en: "Reliable and clean. The portions are huge, making the slightly higher price worth it.",
                        zh: "可靠且干净。份量巨大，让稍高的价格值得。",
                        ms: "Boleh dipercayai dan bersih. Bahagiannya besar, menjadikan harga yang sedikit lebih tinggi berbaloi.",
                        ta: "நம்பகமான மற்றும் சுத்தமான. பங்குகள் பெரியவை, சற்று அதிகமான விலையை மதிப்புள்ளதாக்குகின்றன."
                    },
                    image: "static/images/chicken_beef_bibimbap.jpg"
                },
                {
                    name: {
                        en: "Kimchi Fried Rice with Egg",
                        zh: "泡菜炒饭配蛋",
                        ms: "Nasi Goreng Kimchi dengan Telur",
                        ta: "கிம்ச்சி பிரைட் ரைஸ் முட்டையுடன்"
                    },
                    price: "~$5.50",
                    rating: "4.1",
                    comment: {
                        en: "Comforting fried rice with kimchi and egg.",
                        zh: "令人安慰的泡菜炒饭配蛋。",
                        ms: "Nasi goreng yang menenangkan dengan kimchi dan telur.",
                        ta: "கிம்ச்சி மற்றும் முட்டையுடன் ஆறுதலான பிரைட் ரைஸ்."
                    },
                    image: "static/images/kimchi_fried_rice.jpg"
                },
                {
                    name: {
                        en: "Army Stew (for 1)",
                        zh: "部队锅 (1人份)",
                        ms: "Stiw Tentera (untuk 1)",
                        ta: "ஆர்மி ஸ்டூ (1க்கு)"
                    },
                    price: "~$7.50",
                    rating: "4.1",
                    comment: {
                        en: "Hearty and spicy stew, perfect for sharing or solo.",
                        zh: "丰盛且辣的炖菜，适合分享或独享。",
                        ms: "Stiw yang lazat dan pedas, sempurna untuk berkongsi atau solo.",
                        ta: "உறுதியான மற்றும் காரமான ஸ்டூ, பகிர்வுக்கு அல்லது தனியாக சரியானது."
                    },
                    image: "static/images/army_stew.jpg"
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
                        en: "Saba Fish + Chicken Set",
                        zh: "鲭鱼 + 鸡肉套餐",
                        ms: "Set Ikan Saba + Ayam",
                        ta: "சபா மீன் + கோழி செட்"
                    },
                    price: "$5.50 - $7.50",
                    rating: "3.8",
                    comment: {
                        en: "Decent portions and convenient location.",
                        zh: "份量适中，位置便利。",
                        ms: "Bahagian yang sederhana dan lokasi yang mudah.",
                        ta: "பொருத்தமான பங்குகள் மற்றும் வசதியான இடம்."
                    },
                    image: "static/images/saba_fish_chicken_set.jpg"
                }
            ]
        }

    };

    /* ============================
       TRANSLATIONS (KOREAN PAGE)
    ============================ */
    const koreanTranslations = {
        en: {
            title: "Korean Food Menu",
            gpsTitle: "GPS Map of Singapore Polytechnic",
            gpsHint: "Tap a Food Court button to view its location",
            labels: { price: "Price", rating: "Rating" },
            fcButtons: ["Food Court 1", "Food Court 2", "Food Court 3", "Food Court 4", "Food Court 5", "Food Court 6"],
            stallButtons: {
                "fc1-hope-n-joy-korean": "Hope N Joy Korean (FC1)",
                "fc2-korean-cuisine": "Korean Cuisine (FC2)",
                "fc3-bagus-korean-japanese": "Bagus Korean / Japanese (FC3)",
                "fc4-koufu-korean-stall": "Koufu Korean Stall (FC4)",
                "fc5-food-connection": "Food Connection (FC5)"
            }
        },
        zh: {
            title: "韩国美食菜单",
            gpsTitle: "新加坡理工学院GPS地图",
            gpsHint: "点击食阁按钮查看位置",
            labels: { price: "价格", rating: "评分" },
            fcButtons: ["食阁 1", "食阁 2", "食阁 3", "食阁 4", "食阁 5", "食阁 6"],
            stallButtons: {
                "fc1-hope-n-joy-korean": "希望与欢乐韩国 (FC1)",
                "fc2-korean-cuisine": "韩国美食 (FC2)",
                "fc3-bagus-korean-japanese": "Bagus 韩国 / 日本 (FC3)",
                "fc4-koufu-korean-stall": "Koufu 韩国摊位 (FC4)",
                "fc5-food-connection": "美食连接 (FC5)"
            }
        },
        ta: {
            title: "கோரியன் உணவு மெனு",
            gpsTitle: "சிங்கப்பூர் பாலிடெக்னிக் GPS வரைபடம்",
            gpsHint: "இடத்தை பார்க்க உணவக பொத்தானை அழுத்தவும்",
            labels: { price: "விலை", rating: "மதிப்பீடு" },
            fcButtons: ["உணவு நிலையம் 1", "உணவு நிலையம் 2", "உணவு நிலையம் 3", "உணவு நிலையம் 4", "உணவு நிலையம் 5", "உணவு நிலையம் 6"],
            stallButtons: {
                "fc1-hope-n-joy-korean": "ஹோப் அண்ட் ஜாய் கோரியன் (FC1)",
                "fc2-korean-cuisine": "கோரியன் சமையல் (FC2)",
                "fc3-bagus-korean-japanese": "பகஸ் கோரியன் / ஜப்பானீஸ் (FC3)",
                "fc4-koufu-korean-stall": "கோஃபு கோரியன் ஸ்டால் (FC4)",
                "fc5-food-connection": "உணவு இணைப்பு (FC5)"
            }
        },
        ms: {
            title: "Menu Makanan Korea",
            gpsTitle: "Peta GPS Politeknik Singapura",
            gpsHint: "Tekan butang dewan makan untuk melihat lokasi",
            labels: { price: "Harga", rating: "Penilaian" },
            fcButtons: ["Dewan Makan 1", "Dewan Makan 2", "Dewan Makan 3", "Dewan Makan 4", "Dewan Makan 5", "Dewan Makan 6"],
            stallButtons: {
                "fc1-hope-n-joy-korean": "Hope N Joy Korea (FC1)",
                "fc2-korean-cuisine": "Masakan Korea (FC2)",
                "fc3-bagus-korean-japanese": "Bagus Korea / Jepun (FC3)",
                "fc4-koufu-korean-stall": "Gerai Korea Koufu (FC4)",
                "fc5-food-connection": "Sambungan Makanan (FC5)"
            }
        }
    };

    /* ============================
       APPLY LANGUAGE
    ============================ */
    function applyLanguage(lang) {
        currentLang = lang;

        // Update title and GPS hint
        document.getElementById("koreanMenuTitle").textContent = koreanTranslations[lang].title;
        document.getElementById("gpsTitle").textContent = koreanTranslations[lang].gpsTitle;
        document.getElementById("gpsHint").textContent = koreanTranslations[lang].gpsHint;

        // Update Food Court buttons
        const fcButtons = document.querySelectorAll(".fc-btn");
        fcButtons.forEach((btn, index) => {
            btn.textContent = koreanTranslations[lang].fcButtons[index];
        });

        // Update Stall buttons
        stallButtons.forEach(btn => {
            const stallKey = btn.dataset.stall;
            btn.textContent = koreanTranslations[lang].stallButtons[stallKey];
        });
    }

    /* ============================
       STALL CLICK HANDLER
    ============================ */
    stallButtons.forEach(btn => {
        btn.addEventListener("click", () => {

            const stallKey = btn.dataset.stall;
            const stall = koreanStallData[stallKey];

            if (!stall) return;

            const gridClass = stall.items.length === 1
                ? "cards-grid single"
                : "cards-grid";

            const labels = koreanTranslations[currentLang].labels;

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

            // Reset animation state
            foodCards.classList.remove("fade-in", "fade-out");

            // Force reflow so animation restarts properly
            void foodCards.offsetWidth;

            foodCards.style.display = "block";
            foodCards.classList.add("fade-in");

            // Scroll after render
            setTimeout(() => {
                foodCards.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 100);
        });
    });

    /* ============================
    FOOD COURT BUTTON LOGIC (KOREAN)
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