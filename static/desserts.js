document.addEventListener("DOMContentLoaded", () => {

if (!document.getElementById("dessertTitle")) return;

let currentLang = "en";

const foodCards = document.getElementById("food-cards");
const stallButtons = document.querySelectorAll(".stall-btn");
const fcButtons = document.querySelectorAll(".fc-btn");
const mapFrame = document.getElementById("spMap");
const languageDropdown = document.getElementById("languageDropdown");

/* =========================
   DESSERT DATA
========================= */
const dessertData = {

"fc1-waffles": {
name: {
en: "Waffles (FC1)",
zh: "华夫饼 (第一食阁)",
ms: "Wafel (Dewan Makan 1)",
ta: "வாஃபிள்ஸ் (உணவகம் 1)"
},
items: [{
name: {
en: "Waffles (Various Fillings)",
zh: "多种口味华夫饼",
ms: "Wafel Pelbagai Perisa",
ta: "பல்வேறு சுவை வாஃபிள்ஸ்"
},
price: "$1.80 - $2.50",
rating: "4.7",
comment: {
en: "Thick batter and generous peanut butter.",
zh: "面糊厚实，花生酱给得很足。",
ms: "Adunan tebal dan inti yang banyak.",
ta: "தடிமனான மாவும் நல்ல நிரப்புதலும்."
},
image: "static/images/waffle.jpg"
}]
},

"fc3-waffles": {
name: {
en: "Waffles & Ice Cream (FC3)",
zh: "华夫饼与冰淇淋 (第三食阁)",
ms: "Wafel & Ais Krim (Dewan Makan 3)",
ta: "வாஃபிள்ஸ் & ஐஸ் கிரீம் (உணவகம் 3)"
},
items: [{
name: {
en: "Plain / Ice Cream Waffle",
zh: "原味 / 冰淇淋华夫饼",
ms: "Wafel Kosong / Ais Krim",
ta: "வெற்று / ஐஸ் கிரீம் வாஃபிள்"
},
price: "$1.50 - $3.50",
rating: "4.6",
comment: {
en: "Crispy outside, fluffy inside.",
zh: "外脆内软，份量十足。",
ms: "Rangup di luar, lembut di dalam.",
ta: "வெளியே கரகரப்பாக, உள்ளே மென்மையாக."
},
image: "static/images/waffle_icecream.jpg"
}]
},

"fc3-soya": {
name: {
en: "Soya Bean & Grass Jelly (FC3)",
zh: "豆花与仙草 (第三食阁)",
ms: "Tau Fu & Cincau (Dewan Makan 3)",
ta: "சோயா பீன் & கிராஸ் ஜெல்லி (உணவகம் 3)"
},
items: [
{
name: {
en: "Beancurd (Tau Huay)",
zh: "豆花",
ms: "Tau Huay",
ta: "பீன் கர்ட்"
},
price: "$1.50 - $2.80",
rating: "4.5",
comment: {
en: "Silky smooth and not too sweet.",
zh: "口感顺滑，不会太甜。",
ms: "Lembut dan tidak terlalu manis.",
ta: "மிக மென்மையானதும் இனிப்பு குறைவு."
},
image: "static/images/tauhuay.jpg"
},
{
name: {
en: "Grass Jelly with Longan",
zh: "龙眼仙草",
ms: "Cincau dengan Longan",
ta: "லாஙான் கிராஸ் ஜெல்லி"
},
price: "$2.50",
rating: "4.3",
comment: {
en: "Refreshing and cooling dessert.",
zh: "清凉解暑。",
ms: "Menyegarkan dan sejuk.",
ta: "உடலை குளிர்ச்சியாக்கும்."
},
image: "static/images/grass_jelly.jpg"
}
]
},

"fc4-desserts": {
name: {
en: "Traditional Desserts (FC4)",
zh: "传统甜品 (第四食阁)",
ms: "Pencuci Mulut Tradisional (Dewan Makan 4)",
ta: "பாரம்பரிய இனிப்புகள் (உணவகம் 4)"
},
items: [
{
name: {
en: "Ice Kacang / Chendol",
zh: "红豆冰 / 煎蕊",
ms: "Ice Kacang / Chendol",
ta: "ஐஸ் கச்சாங் / செந்தோல்"
},
price: "$2.50 - $3.30",
rating: "4.4",
comment: {
en: "Classic Koufu dessert, durian option is great.",
zh: "经典Koufu口味, 榴莲款很好吃。",
ms: "Pencuci mulut klasik Koufu.",
ta: "பாரம்பரிய Koufu சுவை."
},
image: "static/images/desserts.jpg"
},
{
name: {
en: "Mango Pomelo Sago / Mango Pudding",
zh: "芒果西米露 / 芒果布丁",
ms: "Sago Pomelo Mangga / Puding Mangga",
ta: "மாம்பழ சாகோ / மாம்பழ புட்டிங்"
},
price: "$3.30 - $4.00",
rating: "4.2",
comment: {
en: "Best way to cool down in air-con.",
zh: "冷气环境下最解暑。",
ms: "Sesuai untuk cuaca panas.",
ta: "குளிர்ச்சிக்கு சிறந்தது."
},
image: "static/images/mango_dessert.jpg"
},
{
name: {
en: "Fruit Cups",
zh: "水果杯",
ms: "Cawan Buah",
ta: "பழக் கிண்ணம்"
},
price: "$0.50 - $1.50",
rating: "4.3",
comment: {
en: "50-cent watermelon saves lives.",
zh: "50分西瓜太救命了。",
ms: "Tembikai 50 sen sangat berbaloi.",
ta: "50 சென்ட் தர்பூசணி அருமை."
},
image: "static/images/fruit_cup.jpg"
}
]
},

"fc5-cafes": {
name: {
en: "Cafes & Fast Food Desserts (FC5)",
zh: "咖啡馆与快餐甜点 (第五食阁)",
ms: "Kafe & Pencuci Mulut (Dewan Makan 5)",
ta: "கஃபே & ஃபாஸ்ட் ஃபுட் இனிப்புகள் (உணவகம் 5)"
},
items: [
{
name: {
en: "Starbucks Cakes & Frappes",
zh: "星巴克蛋糕与星冰乐",
ms: "Kek & Frappe Starbucks",
ta: "ஸ்டார்பக்ஸ் கேக் & ஃப்ராப்பே"
},
price: "$5.00 - $9.00",
rating: "4.0",
comment: {
en: "Good for mugging, bad for wallet.",
zh: "适合读书，不适合钱包。",
ms: "Sesuai belajar, mahal.",
ta: "படிப்பிற்கு நல்லது, விலை அதிகம்."
},
image: "static/images/starbucks.jpg"
},
{
name: {
en: "KFC Egg Tarts & Soft Serve",
zh: "肯德基蛋挞与冰淇淋",
ms: "Tart Telur & Aiskrim KFC",
ta: "KFC முட்டை டார்ட் & ஐஸ் கிரீம்"
},
price: "$1.00 - $2.50",
rating: "4.4",
comment: {
en: "Best quick sugar rush between lectures.",
zh: "上课间最好的甜点补给。",
ms: "Gula pantas antara kelas.",
ta: "விரைவான இனிப்பு சக்தி."
},
image: "static/images/kfc_dessert.jpg"
}
]
},

"fc6-waffles": {
name: {
    en: "Thai-Stall Waffles (FC6)",
    zh: "泰式摊位华夫饼（第六食阁）",
    ms: "Wafel Gerai Thai (Dewan Makan 6)",
    ta: "தாய் ஸ்டால் வாஃபிள்ஸ் (உணவகம் 6)"
},
items: [{
    name: {
        en: "Waffles (Various Fillings)",
        zh: "多种口味华夫饼",
        ms: "Wafel Pelbagai Inti",
        ta: "பல்வேறு நிரப்புதலுடன் வாஃபிள்ஸ்"
    },
    price: "$1.80 - $2.50",
    rating: "4.6",
    comment: {
        en: "Worth the 5-minute walk. They stay crispy even if you tapao back to the classroom.",
        zh: "值得走5分钟路程, 打包回教室依然酥脆。",
        ms: "Berbaloi berjalan 5 minit. Masih rangup walaupun dibungkus balik ke kelas.",
        ta: "5 நிமிட நடைப்பயணத்திற்கு மதிப்புள்ளது. வகுப்பிற்கு எடுத்துச் சென்றாலும் கரகரப்பாகவே இருக்கும்."
    },
    image: "static/images/thai_waffle.jpg"
}]
}

};

/* =========================
   TRANSLATIONS
========================= */
const translations = {
en: {
    title: "Desserts in SP",
    gpsTitle: "GPS Map of Singapore Polytechnic",
    gpsHint: "Tap a Food Court button to view its location",
    langLabel: "Language",
    fcButtons: ["Food Court 1","Food Court 2","Food Court 3","Food Court 4","Food Court 5","Food Court 6"],
    labels: { price: "Price", rating: "Rating" }
},
zh: {
    title: "SP 校园甜品",
    gpsTitle: "新加坡理工学院地图",
    gpsHint: "点击食阁查看位置",
    langLabel: "语言",
    fcButtons: ["第一食阁","第二食阁","第三食阁","第四食阁","第五食阁","第六食阁"],
    labels: { price: "价格", rating: "评分" }
},
ms: {
    title: "Pencuci Mulut di SP",
    gpsTitle: "Peta GPS Politeknik Singapura",
    gpsHint: "Tekan dewan makan untuk lokasi",
    langLabel: "Bahasa",
    fcButtons: ["Dewan Makan 1","Dewan Makan 2","Dewan Makan 3","Dewan Makan 4","Dewan Makan 5","Dewan Makan 6"],
    labels: { price: "Harga", rating: "Penilaian" }
},
ta: {
    title: "SP இனிப்புகள்",
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
    document.getElementById("dessertTitle").textContent = translations[lang].title;
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

        const stall = dessertData[btn.dataset.stall];
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
   FOOD COURT MAP + FILTER
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

        foodCards.style.display = "none";

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