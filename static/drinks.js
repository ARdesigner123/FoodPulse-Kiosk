document.addEventListener("DOMContentLoaded", () => {

if (!document.getElementById("drinkTitle")) return;

let currentLang = "en";

const foodCards = document.getElementById("food-cards");
const stallButtons = document.querySelectorAll(".stall-btn");
const fcButtons = document.querySelectorAll(".fc-btn");
const mapFrame = document.getElementById("spMap");
const languageDropdown = document.getElementById("languageDropdown");

/* =========================
   DRINK DATA
========================= */
const drinkData = {

"fc1-drinks": {
name: {
    en: "FC1 Drinks",
    zh: "第一食阁饮料摊",
    ms: "Minuman FC1",
    ta: "உணவகம் 1 பானங்கள்"
},
items: [{
    name: {
        en: "Teh-C (Hot)",
        zh: "热奶茶",
        ms: "Teh-C Panas",
        ta: "டே-சி (சூடானது)"
    },
    price: "$0.60 - $1.20",
    rating: "4.5",
    comment: {
        en: "The cheapest caffeine fix on campus. Good for early 8 AM classes.",
        zh: "校园里最便宜的提神饮料，适合早八。",
        ms: "Kafein paling murah di kampus.",
        ta: "குறைந்த விலையில் கஃபீன் சக்தி."
    },
    image: "static/images/teh_c.jpg"
}]
},

"fc2-drinks": {
name: {
    en: "FC2 Drinks",
    zh: "第二食阁饮料摊",
    ms: "Minuman FC2",
    ta: "உணவகம் 2 பானங்கள்"
},
items: [{
    name: {
        en: "Teh-O / Kopi-O",
        zh: "清茶 / 黑咖啡",
        ms: "Teh-O / Kopi-O",
        ta: "டே-ஓ / கோபி-ஓ"
    },
    price: "$0.80 - $1.50",
    rating: "4.2",
    comment: {
        en: "Standard but solid. Hits the spot after a heavy meal.",
        zh: "经典耐喝，解腻。",
        ms: "Ringkas tetapi memuaskan.",
        ta: "எளிமையான ஆனால் நம்பகமானது."
    },
    image: "static/images/teh_o.jpg"
}]
},

"fc3-drinks": {
name: {
    en: "Drink Store (FC3)",
    zh: "第三食阁饮料店",
    ms: "Kedai Minuman (FC3)",
    ta: "பானக் கடை (உணவகம் 3)"
},
items: [{
    name: {
        en: "Large Ice Milo",
        zh: "大杯冰美禄",
        ms: "Milo Ais Besar",
        ta: "பெரிய ஐஸ் மைலோ"
    },
    price: "$1.70",
    rating: "4.8",
    comment: {
        en: "Legendary status. Huge, thick, and chocolatey.",
        zh: "传奇级别，超大杯。",
        ms: "Legenda kampus.",
        ta: "புகழ்பெற்ற பானம்."
    },
    image: "static/images/ice_milo.jpg"
}]
},

"fc4-drinks": {
name: {
    en: "Koufu Drinks (FC4)",
    zh: "第四食阁 Koufu 饮料",
    ms: "Minuman Koufu (FC4)",
    ta: "Koufu பானங்கள் (உணவகம் 4)"
},
items: [{
    name: {
        en: "3-Layer Iced Tea",
        zh: "三色冰茶",
        ms: "Teh Ais 3 Lapisan",
        ta: "மூன்று அடுக்கு ஐஸ் டீ"
    },
    price: "$3.60 - $4.80",
    rating: "4.4",
    comment: {
        en: "Looks great and very refreshing.",
        zh: "好看又解暑。",
        ms: "Cantik dan menyegarkan.",
        ta: "பார்க்க அழகாகவும் குளிர்ச்சியாகவும்."
    },
    image: "static/images/three_layer_tea.jpg"
}]
},

"fc4-fruit": {
name: {
    en: "Fruit Stall (FC4)",
    zh: "第四食阁水果摊",
    ms: "Gerai Buah (FC4)",
    ta: "பழக் கடை (உணவகம் 4)"
},
items: [{
    name: {
        en: "Watermelon Juice",
        zh: "西瓜汁",
        ms: "Jus Tembikai",
        ta: "தர்பூசணி ஜூஸ்"
    },
    price: "$1.50 - $3.20",
    rating: "4.3",
    comment: {
        en: "Freshly made and very cooling.",
        zh: "现打果汁，很清爽。",
        ms: "Dibuat segar.",
        ta: "புதியதாக தயாரிக்கப்படுகிறது."
    },
    image: "static/images/watermelon_juice.jpg"
}]
},

"fc5-drinks": {
name: {
    en: "Cafes & Fast Food Drinks (FC5)",
    zh: "第五食阁 咖啡与快餐饮料",
    ms: "Minuman Kafe (FC5)",
    ta: "கஃபே பானங்கள் (உணவகம் 5)"
},
items: [{
    name: {
        en: "Starbucks Coffee & Frappes",
        zh: "星巴克咖啡与星冰乐",
        ms: "Kopi & Frappe Starbucks",
        ta: "ஸ்டார்பக்ஸ் காபி & ஃப்ராப்பே"
    },
    price: "$6.30 - $9.10",
    rating: "4.0",
    comment: {
        en: "Study fuel with air-con vibes.",
        zh: "学习圣地，但偏贵。",
        ms: "Sesuai untuk belajar.",
        ta: "படிப்பிற்கு சிறந்த இடம்."
    },
    image: "static/images/starbucks_drink.jpg"
}]
},

"fc6-drinks": {
name: {
    en: "Thai Stall Drinks (FC6)",
    zh: "第六食阁 泰式饮料",
    ms: "Minuman Gerai Thai (FC6)",
    ta: "தாய் ஸ்டால் பானங்கள் (உணவகம் 6)"
},
items: [{
    name: {
        en: "Thai Milk Tea",
        zh: "泰式奶茶",
        ms: "Teh Susu Thai",
        ta: "தாய் பால் டீ"
    },
    price: "$2.50 - $3.50",
    rating: "4.6",
    comment: {
        en: "Often sells out by lunch. Authentic and not too sweet.",
        zh: "中午前常卖完，味道正宗。",
        ms: "Selalu habis awal.",
        ta: "மதியத்திற்கு முன் விற்றுத் தீரும்."
    },
    image: "static/images/thai_milk_tea.jpg"
}]
}

};

/* =========================
   TRANSLATIONS
========================= */
const translations = {
en: {
    title: "Drinks in SP",
    gpsTitle: "GPS Map of Singapore Polytechnic",
    gpsHint: "Tap a Food Court button to view its location",
    langLabel: "Language",
    fcButtons: ["Food Court 1","Food Court 2","Food Court 3","Food Court 4","Food Court 5","Food Court 6"],
    labels: { price: "Price", rating: "Rating" }
},
zh: {
    title: "SP 校园饮料",
    gpsTitle: "新加坡理工学院地图",
    gpsHint: "点击食阁查看位置",
    langLabel: "语言",
    fcButtons: ["第一食阁","第二食阁","第三食阁","第四食阁","第五食阁","第六食阁"],
    labels: { price: "价格", rating: "评分" }
},
ms: {
    title: "Minuman di SP",
    gpsTitle: "Peta GPS Politeknik Singapura",
    gpsHint: "Tekan dewan makan untuk lokasi",
    langLabel: "Bahasa",
    fcButtons: ["Dewan Makan 1","Dewan Makan 2","Dewan Makan 3","Dewan Makan 4","Dewan Makan 5","Dewan Makan 6"],
    labels: { price: "Harga", rating: "Penilaian" }
},
ta: {
    title: "SP பானங்கள்",
    gpsTitle: "SP GPS வரைபடம்",
    gpsHint: "உணவகத்தை தேர்வு செய்யவும்",
    langLabel: "மொழி",
    fcButtons: ["உணவகம் 1","உணவகம் 2","உணவகம் 3","உணவகம் 4","உணவகம் 5","உணவகம் 6"],
    labels: { price: "விலை", rating: "மதிப்பீடு" }
}
};

/* =========================
   LANGUAGE APPLY
========================= */
function applyLanguage(lang) {
    currentLang = lang;
    document.getElementById("drinkTitle").textContent = translations[lang].title;
    document.getElementById("gpsTitle").textContent = translations[lang].gpsTitle;
    document.getElementById("gpsHint").textContent = translations[lang].gpsHint;
    document.getElementById("langLabel").textContent = translations[lang].langLabel;

    fcButtons.forEach((btn, i) => {
        btn.textContent = translations[lang].fcButtons[i];
    });
}

/* =========================
   STALL CLICK
========================= */
stallButtons.forEach(btn => {
    btn.addEventListener("click", () => {

        const stall = drinkData[btn.dataset.stall];
        if (!stall) return;

        const gridClass = stall.items.length === 1 ? "cards-grid single" : "cards-grid";
        const labels = translations[currentLang].labels;

        foodCards.innerHTML = `<h3>${stall.name[currentLang]}</h3><div class="${gridClass}">`;

        stall.items.forEach(item => {
            foodCards.innerHTML += `
                <div class="food-card">
                    <img src="${item.image}">
                    <div class="food-name">${item.name[currentLang]}</div>
                    <div class="food-details">
                        <p><strong>${labels.price}:</strong> ${item.price}</p>
                        <p><strong>${labels.rating}:</strong> ${item.rating} ⭐</p>
                        <p><em>"${item.comment[currentLang]}"</em></p>
                    </div>
                </div>`;
        });

        foodCards.innerHTML += `</div>`;
        foodCards.classList.remove("fade-in","fade-out");
        void foodCards.offsetWidth;
        foodCards.style.display = "block";
        foodCards.classList.add("fade-in");
    });
});

/* =========================
   MAP + FILTER
========================= */
const foodCourtLocations = {
    "Food Court 1": "Singapore Polytechnic Food Court 1",
    "Food Court 2": "Singapore Polytechnic Food Court 2",
    "Food Court 3": "Food Court 3 (Foodgle)",
    "Food Court 4": "Koufu Food Court 4 Singapore Poly",
    "Food Court 5": "Singapore Polytechnic Food Court 5",
    "Food Court 6": "Food Canopy - Singapore Poly"
};

fcButtons.forEach(fcBtn => {
    fcBtn.addEventListener("click", () => {

        fcButtons.forEach(b => b.classList.remove("active"));
        fcBtn.classList.add("active");

        mapFrame.src =
            `https://www.google.com/maps?q=${encodeURIComponent(foodCourtLocations[fcBtn.dataset.fc])}&output=embed`;

        foodCards.classList.add("fade-out");
        setTimeout(() => foodCards.style.display = "none", 300);

        stallButtons.forEach(s => s.style.display = "none");
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