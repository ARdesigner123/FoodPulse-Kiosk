document.addEventListener("DOMContentLoaded", () => {

let currentLang = "en";

const foodCards = document.getElementById("food-cards");
const stallButtons = document.querySelectorAll(".stall-btn");
const fcButtons = document.querySelectorAll(".fc-btn");
const mapFrame = document.getElementById("spMap");
const languageDropdown = document.getElementById("languageDropdown");

/* =========================
   DATA
========================= */
const foodData = {

"fc1-fruit": {
name: { en:"Fruit Stall (FC1)", zh:"第一食阁水果摊", ms:"Gerai Buah (FC1)", ta:"பழக் கடை (FC1)" },
items: [{
    name:{ en:"Mixed Fruit Platter", zh:"混合水果拼盘", ms:"Buah Campur", ta:"கலந்த பழங்கள்" },
    price:"$1.70 - $2.60",
    rating:"4.4",
    comment:{
        en:"Good variety in one plate. Sweet and refreshing.",
        zh:"种类多，清爽解渴。",
        ms:"Pelbagai jenis buah.",
        ta:"பல வகை பழங்கள்."
    },
    image:"static/images/mixed_fruit.jpg",
}]
},

"fc1-ytf": {
name:{ en:"Yong Tau Foo (FC1)", zh:"第一食阁酿豆腐", ms:"Yong Tau Foo (FC1)", ta:"யோங் டாவ் ஃபூ (FC1)" },
items:[{
    name:{ en:"Vegetable Selection", zh:"蔬菜配料", ms:"Pilihan Sayur", ta:"காய்கறி தேர்வு" },
    price:"$0.60 - $0.80 / piece",
    rating:"4.6",
    comment:{
        en:"Very fresh vegetables. Clear soup recommended.",
        zh:"蔬菜新鲜，清汤最健康。",
        ms:"Sayur sangat segar.",
        ta:"மிகவும் تازா காய்கறிகள்."
    },
    image:"static/images/yong_tau_foo.jpg",
}]
},

"fc3-fruit": {
name:{ en:"Fruit & Juice (FC3)", zh:"第三食阁水果饮料", ms:"Buah & Jus (FC3)", ta:"பழம் & ஜூஸ் (FC3)" },
items:[{
    name:{ en:"Mango Milkshake", zh:"芒果奶昔", ms:"Milkshake Mangga", ta:"மாம்பழ மில்க்ஷேக்" },
    price:"$2.20 - $4.00",
    rating:"4.8",
    comment:{
        en:"Legendary mango shake made from real fruits.",
        zh:"真芒果制作，非常浓郁。",
        ms:"Diperbuat daripada buah sebenar.",
        ta:"உண்மையான பழங்கள்."
    },
    image:"static/images/mango_milkshake.jpg",
}]
},

"fc4-fruit": {
name:{ en:"Fruit Stall (FC4)", zh:"第四食阁水果摊", ms:"Gerai Buah (FC4)", ta:"பழக் கடை (FC4)" },
items:[{
    name:{ en:"Watermelon Slices", zh:"西瓜片", ms:"Tembikai", ta:"தர்பூசணி" },
    price:"$0.50",
    rating:"4.3",
    comment:{
        en:"Ultimate budget snack.",
        zh:"最便宜的解暑水果。",
        ms:"Snek bajet terbaik.",
        ta:"மிகவும் மலிவு."
    },
    image:"static/images/watermelon.jpg",
}]
},

"fc4-ytf": {
name:{ en:"Yong Tau Foo (FC4)", zh:"第四食阁酿豆腐", ms:"Yong Tau Foo (FC4)", ta:"யோங் டாவ் ஃபூ (FC4)" },
items:[{
    name:{ en:"Vegetable Stuffed Items", zh:"蔬菜酿料", ms:"Sayur Berinti", ta:"காய்கறி நிரப்பு" },
    price:"$0.70 / piece",
    rating:"4.5",
    comment:{
        en:"Healthy and customizable.",
        zh:"健康又自由搭配。",
        ms:"Sihat dan fleksibel.",
        ta:"ஆரோக்கியமானது."
    },
    image:"static/images/yong_tau_foo.jpg"
}]
},

"fc5-fruit": {
name:{ en:"Fruit Store (FC5)", zh:"第五食阁水果店", ms:"Kedai Buah (FC5)", ta:"பழக் கடை (FC5)" },
items:[{
    name:{ en:"Pre-packed Fruit", zh:"预包装水果", ms:"Buah Pek", ta:"பேக் செய்யப்பட்ட பழம்" },
    price:"$1.50 - $3.00",
    rating:"4.2",
    comment:{
        en:"Clean and fresh daily.",
        zh:"干净又新鲜。",
        ms:"Segar setiap hari.",
        ta:"தினமும் تازா."
    },
    image:"static/images/prepacked_fruit.jpg"
}]
},

"fc5-acai": {
name:{ en:"Acai & Smoothie Bowls", zh:"巴西莓果碗", ms:"Mangkuk Acai", ta:"அசாய் பவுல்" },
items:[{
    name:{ en:"Acai Bowl", zh:"巴西莓果碗", ms:"Acai Bowl", ta:"அசாய் பவுல்" },
    price:"$2.50 - $6.00+",
    rating:"4.7",
    comment:{
        en:"Healthy but a bit of a splurge.",
        zh:"健康但稍贵。",
        ms:"Sihat tetapi mahal sedikit.",
        ta:"ஆரோக்கியமான ஆனால் விலை அதிகம்."
    },
    image:"static/images/acai_bowl.jpg"
}]
},

"fc6-ytf": {
name:{ en:"Yong Tau Foo (FC6)", zh:"第六食阁酿豆腐", ms:"Yong Tau Foo (FC6)", ta:"யோங் டாவ் ஃபூ (FC6)" },
items:[{
    name:{ en:"Vegetable Soup Set", zh:"蔬菜汤组合", ms:"Set Sup Sayur", ta:"காய்கறி சூப்" },
    price:"$4.00 - $5.00",
    rating:"4.4",
    comment:{
        en:"Light and filling.",
        zh:"清淡又饱足。",
        ms:"Ringan tetapi mengenyangkan.",
        ta:"இலகுவான உணவு."
    },
    image:"static/images/vegetable_soup.jpg"
}]
}

};

/* =========================
   TRANSLATIONS
========================= */
const translations = {
en:{ title:"Fruits & Vegetables in SP", gpsTitle:"GPS Map of Singapore Polytechnic", gpsHint:"Tap a Food Court button to view its location", langLabel:"Language", labels:{price:"Price", rating:"Rating"} },
zh:{ title:"SP 校园水果与蔬菜", gpsTitle:"新加坡理工学院地图", gpsHint:"点击食阁查看位置", langLabel:"语言", labels:{price:"价格", rating:"评分"} },
ms:{ title:"Buah & Sayur di SP", gpsTitle:"Peta GPS Politeknik Singapura", gpsHint:"Tekan dewan makan untuk lokasi", langLabel:"Bahasa", labels:{price:"Harga", rating:"Penilaian"} },
ta:{ title:"SP பழங்கள் & காய்கறிகள்", gpsTitle:"SP GPS வரைபடம்", gpsHint:"உணவகத்தை தேர்வு செய்யவும்", langLabel:"மொழி", labels:{price:"விலை", rating:"மதிப்பீடு"} }
};

/* =========================
   LANGUAGE
========================= */
function applyLanguage(lang){
    currentLang = lang;
    document.getElementById("pageTitle").textContent = translations[lang].title;
    document.getElementById("gpsTitle").textContent = translations[lang].gpsTitle;
    document.getElementById("gpsHint").textContent = translations[lang].gpsHint;
    document.getElementById("langLabel").textContent = translations[lang].langLabel;
}

/* =========================
   STALL CLICK
========================= */
stallButtons.forEach(btn=>{
    btn.addEventListener("click",()=>{
        const stall = foodData[btn.dataset.stall];
        if(!stall) return;

        const labels = translations[currentLang].labels;

        foodCards.innerHTML = `<h3>${stall.name[currentLang]}</h3><div class="cards-grid single">`;

        stall.items.forEach(item=>{
    foodCards.innerHTML += `
    <div class="food-card">

        <img src="${item.image}"
             alt="${item.name[currentLang]}"
             onerror="this.src='static/images/placeholder.jpg'">

        <div class="food-name">${item.name[currentLang]}</div>

        <div class="food-details">
            <p><strong>${labels.price}:</strong> ${item.price}</p>
            <p><strong>${labels.rating}:</strong> ${item.rating} ⭐</p>
            <p><em>"${item.comment[currentLang]}"</em></p>
        </div>
    </div>`;
});

        foodCards.innerHTML += `</div>`;
        foodCards.classList.remove("fade-out");
        foodCards.style.display="block";
        foodCards.classList.add("fade-in");
    });
});

/* =========================
   FOOD COURT FILTER + MAP
========================= */
const locations = {
"Food Court 1":"Singapore Polytechnic Food Court 1",
"Food Court 3":"Food Court 3 (Foodgle)",
"Food Court 4":"Koufu Food Court 4 Singapore Poly",
"Food Court 5":"Singapore Polytechnic Food Court 5",
"Food Court 6":"Food Canopy Singapore Poly"
};

fcButtons.forEach(fc=>{
    fc.addEventListener("click",()=>{
        mapFrame.src=`https://www.google.com/maps?q=${encodeURIComponent(locations[fc.dataset.fc])}&output=embed`;

        foodCards.classList.add("fade-out");
        setTimeout(()=>foodCards.style.display="none",300);

        stallButtons.forEach(s=>{
            s.style.display = s.dataset.fc===fc.dataset.fc ? "inline-block" : "none";
        });
    });
});

if(languageDropdown){
    languageDropdown.addEventListener("change",e=>applyLanguage(e.target.value));
}

applyLanguage("en");

});