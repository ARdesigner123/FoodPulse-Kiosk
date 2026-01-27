const translations = {
    en: {
        menuTitle: "Menu Categories",
        chinese: "Chinese",
        malay: "Malay",
        korean: "Korean",
        japanese: "Japanese",
        desserts: "Desserts",
        drinks: "Drinks",
        fruits: "Fruits & Vegetables",
        scheduleBtn: "Student Schedule",
        trackerBtn: "Food Tracker",
        langLabel: "Language"
    },
    zh: {
        menuTitle: "菜单分类",
        chinese: "中餐",
        malay: "马来餐",
        korean: "韩餐",
        japanese: "日餐",
        desserts: "甜点",
        drinks: "饮料",
        fruits: "水果与蔬菜",
        scheduleBtn: "学生课程表",
        trackerBtn: "剩余食物追踪",
        langLabel: "语言"
    },
    ta: {
        menuTitle: "மெனு வகைகள்",
        chinese: "சீன",
        malay: "மலாய்",
        korean: "கொரிய",
        japanese: "ஜப்பானிய",
        desserts: "இனிப்புகள்",
        drinks: "பானங்கள்",
        fruits: "பழங்கள் & காய்கறிகள்",
        scheduleBtn: "மாணவர் அட்டவணை",
        trackerBtn: "உணவு கண்காணிப்பு",
        langLabel: "மொழி"
    },
    ms: {
        menuTitle: "Kategori Menu",
        chinese: "Cina",
        malay: "Melayu",
        korean: "Korea",
        japanese: "Jepun",
        desserts: "Pencuci Mulut",
        drinks: "Minuman",
        fruits: "Buah & Sayur",
        scheduleBtn: "Jadual Pelajar",
        trackerBtn: "Penjejak Makanan",
        langLabel: "Bahasa"
    }
};

const infoTranslations = {
    en: {
        selectDate: "Select a date to see details.",
        academicDay: "Academic Day",
        vacation: "Vacation Period",
        midTests: "Mid-Semester Tests",
        midVacation: "Mid-Semester Vacation",
        term2: "Term 2 Classes Begin",
    },
    zh: {
        selectDate: "选择日期以查看详细信息。",
        academicDay: "上课日",
        vacation: "假期",
        midTests: "期中考试",
        midVacation: "期中假期",
        term2: "第二学期开始",
    },
    ta: {
        selectDate: "விவரங்களை பார்க்க தேதியைத் தேர்ந்தெடுக்கவும்.",
        academicDay: "கல்வி நாள்",
        vacation: "விடுமுறை",
        midTests: "நடுத்தர பரீட்சைகள்",
        midVacation: "நடுத்தர விடுமுறை",
        term2: "2ஆம் பருவ வகுப்புகள் துவங்கும்",
    },
    ms: {
        selectDate: "Pilih tarikh untuk melihat butiran.",
        academicDay: "Hari Akademik",
        vacation: "Tempoh Cuti",
        midTests: "Ujian Pertengahan Semester",
        midVacation: "Cuti Pertengahan Semester",
        term2: "Kelas Semester 2 Bermula",
    }
};

document.addEventListener("DOMContentLoaded", () => {

    /* ==================
       INDEX PAGE LOGIC
    =====================*/

    const scheduleBtn = document.getElementById("scheduleBtn");
    if (scheduleBtn) {
        scheduleBtn.addEventListener("click", () => {
            window.location.href = "./schedule.html";
        });
    }

    const trackerBtn = document.getElementById("trackerBtn");
    if (trackerBtn) {
        trackerBtn.addEventListener("click", () => {
            window.location.href = "./foodcourt.html";
        });
    }

    /* ==================
       FOODCOURT PAGE LOGIC
    =====================*/
    const foodcourtGrid = document.querySelector(".foodcourt-grid");
    if (foodcourtGrid) {
        const foodcourtCards = document.querySelectorAll(".foodcourt-card");
        const fcInfoPanel = document.getElementById("fc-info-panel");
        const fcTitle = document.getElementById("fc-title");
        const stallList = document.querySelector(".stall-list");
        const timeButtons = document.querySelectorAll(".time-buttons button");

        // Data for Food Courts
        const fcData = {
            "Food Court 1": {
                stalls: ["Chicken Rice", "Japanese Curry / Rice Bowls", "Western Cuisine", "Ban Mian / Fish Soup", "Mala Hotpot", "Thai Cuisine", "Yong Tau Foo", "Desserts", "Drinks & Toast Stall"],
                descriptions: ["A student staple","Very popular","Pastas, chicken chops","","","Basil chicken, noodles","fish-paste stuffed tofu, vegetables, and fried items like bean curd skin etc","Ice Kacang etc.","Main anchor"],
                times: {
                    "8am-10am": [60, 50, 40, 30, 20, 25, 20, 50, 70],
                    "10am-12pm": [95, 90, 85, 80, 70, 75, 60, 90, 95],
                    "12pm-3pm": [100, 95, 90, 85, 80, 75, 70, 95, 100],
                    "3pm-5pm": [40, 30, 35, 25, 20, 30, 25, 40, 45],
                    "5pm-7pm": [20, 15, 25, 10, 5, 15, 10, 20, 25]
                }
            },
            "Food Court 2": {
                stalls: ["Vegetarian Stall", "Indonesian Express", "Japanese Stall", "Korean Stall", "Economic Rice (Cai Fan)", "Yong Tau Foo", "Fish Soup / Ban Mian", "Taiwanese Stall", "Malay / Indian Cuisine", "Drinks & Toast Stall"],
                descriptions: ["Highly rated, known for big portions","Famous for Ayam Penyet/Ayam Panggang","Known for affordable Chicken Don/Karaage Don","Recommended for Hot Stone Bibimbap","The budget staple","Each ingredient priced around $0.40 - $0.50","","","Known for Maggie Goreng","Main anchor"],
                times: {
                    "8am-10am": [50, 0, 0, 0, 40, 0, 30, 0, 20, 40],
                    "10am-12pm": [100, 95, 90, 90, 95, 60, 80, 50, 80, 95],
                    "12pm-3pm": [100, 80, 70, 70, 60, 50, 40, 30, 50, 80],
                    "3pm-5pm": [20, 0, 0, 0, 10, 5, 0, 0, 0, 15],
                    "5pm-7pm": [10, 0, 0, 0, 0, 0, 0, 0, 0, 5]
                }
            },
            "Food Court 3": {
                stalls: ["Indonesian Express","SP Mini Wok","Waffle Street","Mr Pasta","Crumbz Up","Mala Hotpot (Shu Xiang)","Chinese Cuisine","The Crowded Bowl","Nasi Lemak / Chicken Rice","Drinks & Toast Stall"],
                descriptions: ["Famous for Ayam Penyet and spicy chili","Salted Egg Chicken Rice, Mala Chicken Rice","Large, crispy waffles with various toppings/ice cream","Customizable cream and tomato-based pastas","Acai bowls and healthy granola treats","A student favorite with manageable queues","Known for Jiao Zi / pan-fried dumplings","Vegetarian salad bowls","Halal-certified options available","Known for large Ice Milo and breakfast sets"],
                times: {
                    "8am-10am": [60, 30, 60, 0, 0, 0, 20, 0, 50, 70],
                    "10am-12pm": [95, 90, 80, 85, 80, 70, 60, 50, 80, 95],
                    "12pm-3pm": [100, 100, 90, 85, 80, 75, 70, 60, 95, 100],
                    "3pm-5pm": [50, 40, 60, 30, 50, 40, 20, 30, 40, 50],
                    "5pm-7pm": [30, 25, 40, 20, 25, 30, 10, 20, 30, 35]
                }
            },
            "Food Court 4": {
                stalls: ["Mala Xiang Guo","Taiwanese Cuisine","Western Food","Japanese & Korean Cuisine","Ban Mian & Fish Soup","Yong Tau Foo","Nasi Padang / Malay Cuisine","Pao Fan / Seafood Rice","Waffle & Snack Store","Drinks & Breakfast Stall"],
                descriptions: ["Highly popular, often considered one of the best in SP","Famous for Chicken Cutlet and Braised Pork Rice","Generous portions of Chicken Chop and Pasta","Known for Rice Bowls and Bulgogi Beef","A student favorite for a $3.50 budget meal","Large variety of fresh ingredients","Wide selection of spicy side dishes","Specialized broth-based rice dishes","Famous for large waffles and ice cream","Stays open the longest, often until 9:00 PM"],
                times: {
                    "8am-10am": [50, 40, 30, 20, 50, 40, 30, 20, 50, 60],
                    "10am-12pm": [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
                    "12pm-3pm": [100, 95, 90, 85, 80, 75, 80, 70, 90, 100],
                    "3pm-5pm": [60, 50, 40, 40, 50, 50, 50, 40, 50, 60],
                    "5pm-7pm": [40, 35, 30, 30, 35, 35, 30, 25, 35, 50]
                }
            },
            "Food Court 5": {
                stalls: ["Starbucks","Subway","KFC","Brunch Cafe","Bang Deli","Japanese Stall","Fruit Stall","Drinks Stall"],
                descriptions: ["The main study hub with a 1-for-1 tradition","Healthy sandwich option","Fried chicken staple","Famous for Japanese Donburi like Pork and Beef bowls","Known for pastries, cakes, and quick lunch boxes","Rotating tenants serving Ramen or Katsu","Fresh juices and sliced fruits","Primary source for local Kopi and Teh"],
                times: {
                    "8am-10am": [60, 40, 0, 0, 50, 0, 50, 60],
                    "10am-12pm": [95, 95, 95, 90, 85, 80, 90, 100],
                    "12pm-2pm": [100, 100, 100, 100, 90, 80, 100, 100],
                    "3pm-5pm": [70, 60, 60, 50, 60, 50, 50, 70],
                    "5pm-7pm": [50, 50, 50, 40, 40, 35, 30, 60]
                }
            },
            "Food Court 6": {
                stalls: ["Creamy Duck","Western Food","Japanese Cuisine","Chicken Rice","Vegetarian Stall","Mixed Vegetable Rice","Yong Tau Foo / Fish Soup","Drinks & Toast Stall"],
                descriptions: ["Legendary waffles and ice cream, must try!","Famous for large chicken chops and cheap prices","Affordable Teriyaki Chicken and Curry Rice","Reliable daily staple","Healthy and budget-friendly options","Popular for nearby office staff","Variety of fresh ingredients for soups","Early-morning drinks and toast, stays open the longest"],
                times: {
                    "8am-10am": [40, 30, 30, 20, 20, 20, 20, 40],
                    "10am-12pm": [95, 95, 95, 90, 90, 90, 90, 95],
                    "12pm-2pm": [100, 100, 100, 100, 95, 95, 90, 100],
                    "3pm-5pm": [40, 40, 40, 30, 30, 30, 30, 40],
                    "5pm-7pm": [10, 10, 10, 10, 10, 10, 10, 20]
                }
            }
        };

        // Translation object for stalls and FC names
        const fcTranslations = {
            en: {},
            ms: {
                "Food Court 1": "Dewan Makan 1",
                "Food Court 2": "Dewan Makan 2",
                "Food Court 3": "Dewan Makan 3",
                "Food Court 4": "Dewan Makan 4",
                "Food Court 5": "Dewan Makan 5",
                "Food Court 6": "Dewan Makan 6",
                "Chicken Rice": "Nasi Ayam",
                "Japanese Curry / Rice Bowls": "Kari Jepun / Mangkuk Nasi",
                "Western Cuisine": "Makanan Barat",
                "Ban Mian / Fish Soup": "Ban Mian / Sup Ikan",
                "Mala Hotpot": "Hotpot Mala",
                "Thai Cuisine": "Masakan Thai",
                "Yong Tau Foo": "Yong Tau Foo",
                "Desserts": "Pencuci Mulut",
                "Drinks & Toast Stall": "Gerai Minuman & Roti Bakar",
                "Creamy Duck": "Creamy Duck",
                "Japanese Cuisine": "Masakan Jepun",
                "Chicken Rice": "Nasi Ayam",
                "Vegetarian Stall": "Gerai Vegetarian",
                "Mixed Vegetable Rice": "Nasi Sayur Campur",
                "Yong Tau Foo / Fish Soup": "Yong Tau Foo / Sup Ikan"
            },
            zh: {
                "Food Court 1": "食阁1",
                "Food Court 2": "食阁2",
                "Food Court 3": "食阁3",
                "Food Court 4": "食阁4",
                "Food Court 5": "食阁5",
                "Food Court 6": "食阁6",
                "Chicken Rice": "鸡饭",
                "Japanese Curry / Rice Bowls": "日式咖喱/饭",
                "Western Cuisine": "西餐",
                "Ban Mian / Fish Soup": "板面/鱼汤",
                "Mala Hotpot": "麻辣火锅",
                "Thai Cuisine": "泰式料理",
                "Yong Tau Foo": "酿豆腐",
                "Desserts": "甜品",
                "Drinks & Toast Stall": "饮料与吐司摊",
                "Creamy Duck": "Creamy Duck",
                "Japanese Cuisine": "日式料理",
                "Chicken Rice": "鸡饭",
                "Vegetarian Stall": "素食摊",
                "Mixed Vegetable Rice": "什菜饭",
                "Yong Tau Foo / Fish Soup": "酿豆腐/鱼汤"
            },
            ta: {
                "Food Court 1": "உணவக 1",
                "Food Court 2": "உணவக 2",
                "Food Court 3": "உணவக 3",
                "Food Court 4": "உணவக 4",
                "Food Court 5": "உணவக 5",
                "Food Court 6": "உணவக 6",
                "Chicken Rice": "கோழி சாதம்",
                "Japanese Curry / Rice Bowls": "ஜப்பானிய கறி / சாதம்",
                "Western Cuisine": "மேற்கத்திய உணவு",
                "Ban Mian / Fish Soup": "பான் மியன் / மீன் சூப்",
                "Mala Hotpot": "மாலா ஹாட்பாட்",
                "Thai Cuisine": "தை உணவு",
                "Yong Tau Foo": "யாங் டௌ ஃபூ",
                "Desserts": "இனிப்புகள்",
                "Drinks & Toast Stall": "பானங்கள் மற்றும் டோஸ்ட் ஸ்டால்",
                "Creamy Duck": "க்ரீமி டக்",
                "Japanese Cuisine": "ஜப்பானிய உணவு",
                "Chicken Rice": "கோழி சாதம்",
                "Vegetarian Stall": "சைவ உணவு ஸ்டால்",
                "Mixed Vegetable Rice": "காய்கறி கலந்த சாதம்",
                "Yong Tau Foo / Fish Soup": "யாங் டௌ ஃபூ / மீன் சூப்"
            }
        };

        let activeCard = null;
        let currentLang = "en";

        // Function to update stall list names and descriptions
        function updateStallList(fcName, timePeriod) {
            const fcStalls = fcData[fcName].stalls;
            const fcDesc = fcData[fcName].descriptions;
            const fcPercent = fcData[fcName].times[timePeriod];

            stallList.innerHTML = "";
            fcStalls.forEach((stall, i) => {
                const translatedStall = fcTranslations[currentLang][stall] || stall;
                const desc = fcDesc[i] || "";
                stallList.innerHTML += `
                    <li>
                        <span>${translatedStall}</span>
                        <span class="percent-text">${fcPercent[i] || 0}%</span>
                        ${desc ? `<small>${desc}</small>` : ""}
                        <div class="bar" style="width: ${fcPercent[i] || 0}%"></div>
                    </li>
                `;
            });
        }

        // Click on foodcourt cards
        foodcourtCards.forEach(card => {
            card.addEventListener("click", () => {
                const fcName = card.dataset.fc;
                const isRight = parseInt(fcName.match(/\d+/)[0]) % 2 === 1;

                if (activeCard === card) {
                    fcInfoPanel.classList.remove("show-left", "show-right");
                    fcInfoPanel.classList.add(isRight ? "off-right" : "off-left");
                    activeCard = null;
                    return;
                }

                fcInfoPanel.classList.remove("show-left", "show-right", "off-left", "off-right");
                fcInfoPanel.classList.add(isRight ? "show-right" : "show-left");

                const translatedFc = fcTranslations[currentLang][fcName] || fcName;
                fcTitle.innerText = translatedFc;

                // Default time period
                const defaultTime = "10am-12pm";
                updateStallList(fcName, defaultTime);

                // Time buttons
                timeButtons.forEach(btn => {
                    btn.classList.remove("active");
                    if (btn.dataset.time === defaultTime) btn.classList.add("active");
                    btn.onclick = () => {
                        timeButtons.forEach(b => b.classList.remove("active"));
                        btn.classList.add("active");
                        updateStallList(fcName, btn.dataset.time);
                    };
                });

                activeCard = card;
            });
        });

        // Language switcher
        const languageDropdown = document.getElementById("languageDropdown");
        if (languageDropdown) {
            languageDropdown.addEventListener("change", function () {
                currentLang = this.value;

                // Update foodcourt card labels
                foodcourtCards.forEach(card => {
                    const fcName = card.dataset.fc;
                    const translatedFc = fcTranslations[currentLang][fcName] || fcName;
                    card.querySelector(".foodcourt-overlay").innerText = translatedFc;
                });

                // Update info panel if active
                if (activeCard) {
                    const fcName = activeCard.dataset.fc;
                    const translatedFc = fcTranslations[currentLang][fcName] || fcName;
                    fcTitle.innerText = translatedFc;
                    // Update stall list
                    const activeTime = document.querySelector(".time-buttons button.active").dataset.time;
                    updateStallList(fcName, activeTime);
                }
            });
        }
    }

    let currentLang = "en"; // default

    const languageDropdown = document.getElementById("languageDropdown");
    if (languageDropdown) {
        languageDropdown.addEventListener("change", function () {
            currentLang = this.value;
            const t = translations[this.value];

            document.getElementById("menuTitle").innerText = t.menuTitle;
            document.querySelector("#chinese span").innerText = t.chinese;
            document.querySelector("#malay span").innerText = t.malay;
            document.querySelector("#korean span").innerText = t.korean;
            document.querySelector("#japanese span").innerText = t.japanese;
            document.querySelector("#desserts span").innerText = t.desserts;
            document.querySelector("#drinks span").innerText = t.drinks;
            document.querySelector("#fruits span").innerText = t.fruits;
            document.getElementById("scheduleBtn").innerText = t.scheduleBtn;
            document.getElementById("trackerBtn").innerText = t.trackerBtn;
            document.getElementById("langLabel").innerText = t.langLabel;

            // Update More Info default text
            document.getElementById("infoText").innerText = infoTranslations[currentLang].selectDate;
        });
    }

    /* =========================
       SCHEDULE PAGE LOGIC
    ========================== */

    const calendarGrid = document.getElementById("calendarGrid");
    const infoPanel = document.getElementById("infoPanel");
    const monthTitle = document.getElementById("monthTitle");

    if (!calendarGrid) return; // prevents JS crash on index page

    function getLocalDateKey(date) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, "0");
        const d = String(date.getDate()).padStart(2, "0");
        return `${y}-${m}-${d}`;
    }

    let currentMonth = 0; // January
    let currentYear = 2026;

    const events = {
        // ===== JANUARY =====
        "2026-01-05": {
            level: "high",
            title: "First Day of Semester",
            text: "All students return to campus.\nHigh crowd expected across all food courts."
        },
        
        "2026-01-08": {
            level: "high",
            title: "SP Open House & I&I Showcase",
            text: "Major campus event with public visitors, tours and exhibitions.\nVery high crowd."
        },
        
        "2026-01-09": {
            level: "high",
            title: "SP Open House & I&I Showcase",
            text: "Second day of Open House.\nHeavy footfall across campus."
        },
        
        "2026-01-10": {
            level: "high",
            title: "SP Open House & I&I Showcase",
            text: "Final day of Open House.\nPublic visitors + student ambassadors."
        },
        
        "2026-01-14": {
            level: "high",
            title: "GCE O-Level Results Release",
            text: "Prospective students and parents visit campus for JAE counselling.\nCrowded Convention Centre."
        },
        
        "2026-01-26": {
            level: "high",
            title: "Exam Timetable Release",
            text: "Start of intensive revision period.\nLibraries and study areas very crowded."
        },
        // ===== FEBRUARY =====
        "2026-02-07": {
            level: "high",
            title: "ABEC Grow & Green Initiative",
            text: "Community and sustainability event by Architecture & Built Environment Club.\nStudent volunteers active around ABE blocks and Jurong East area."
        },
        "2026-02-09": {
            level: "high",
            title: "Release of Final Exam Seats",
            text: "Students receive official exam seat numbers.\nHigh stress levels and heavy library usage expected."
        },
        "2026-02-13": {
            level: "high",
            title: "Decision Deadline",
            text: "Final deadline for course/module deferments or withdrawals.\nStudent Service Centre and school offices are crowded."
        },
        "2026-02-16": {
            level: "low",
            title: "Chinese New Year Eve",
            text: "Most students leave campus early for reunion dinners.\nCampus likely to be quiet by noon."
        },
        "2026-02-17": {
            level: "low",
            title: "Chinese New Year",
            text: "Public Holiday.\nEntire campus, including food courts and libraries, is closed."
        },
        "2026-02-18": {
            level: "low",
            title: "Chinese New Year",
            text: "Public Holiday.\nEntire campus, including food courts and libraries, is closed."
        },
        "2026-02-26": {
            level: "high",
            title: "Semester 2 Examinations Begin",
            text: "Exams officially begin.\nLarge waves of students gather near exam halls before paper start times."
        },
        // ===== MARCH =====
        "2026-03-01": {
            level: "high",
            title: "Final Exams - Mugging Period",
            text: "Peak revision period.\nLibraries and study areas reach maximum capacity from early morning."
        },
        "2026-03-02": {
            level: "high",
            title: "Final Exams - Mugging Period",
            text: "Heavy student presence in libraries and study zones.\nFood courts quieter outside exam windows."
        },
        "2026-03-03": {
            level: "high",
            title: "Final Exams - Mugging Period",
            text: "Students concentrate around study areas and exam venues."
        },
        "2026-03-04": {
            level: "high",
            title: "Final Exams - Mugging Period",
            text: "Last stretch of intensive revision before final papers."
        },
        "2026-03-05": {
            level: "high",
            title: "Final Exams End",
            text: "Final examination day.\nLarge student waves near exam halls before paper timings."
        },
        "2026-03-10": {
            level: "high",
            title: "BusinessPlan 2026",
            text: "Signature competition hosted by SP School of Business.\nHigh influx of secondary school students and faculty around Block W and Convention Centre."
        },
        "2026-03-16": {
            level: "low",
            title: "Internship Programme Begins",
            text: "Many Year 2 and Year 3 students begin internships.\nCampus becomes noticeably quieter."
        },
        "2026-03-21": {
            level: "low",
            title: "Hari Raya Puasa",
            text: "Public Holiday.\nCampus closed with zero student activity."
        },
        "2026-03-23": {
            level: "medium",
            title: "Result Release Day",
            text: "Results released online.\nSmall wave of students return for celebrations, appeals and admin matters."
        },
        // ===== APRIL =====
        // Good Friday – Campus Closed
        "2026-04-03": {
            level: "low",
            title: "Good Friday (Public Holiday)",
            text: "Public holiday.\nCampus is closed with zero student activity."
        },
        
        // Release of Class Timetable
        "2026-04-06": {
            level: "low",
            title: "Release of Class Timetable",
            text: "Students check timetables online.\nMinimal physical crowd on campus."
        },
        
        // Freshmen Orientation Programme (FOP)
        "2026-04-13": {
            level: "high",
            title: "Freshmen Orientation Programme (FOP)",
            text: "Orientation activities for Year 1 students.\nHigh crowd levels around SP Plaza and food courts."
        },
        
        "2026-04-14": {
            level: "high",
            title: "Freshmen Orientation Programme (FOP)",
            text: "Campus filled with freshies and student facilitators.\nMass games, cheers, and campus tours ongoing."
        },
        "2026-04-15": {
            level: "high",
            title: "Freshmen Orientation Programme (FOP)",
            text: "Orientation continues.\nLunch hours are especially crowded at food courts."
        },
        "2026-04-16": {
            level: "high",
            title: "Freshmen Orientation Programme (FOP)",
            text: "High-energy orientation activities across campus.\nExpect noise and heavy foot traffic."
        },
        "2026-04-17": {
            level: "high",
            title: "Freshmen Orientation Programme (FOP)",
            text: "Final day of orientation.\nCelebratory atmosphere and peak crowd levels."
        },
        
        // First Day of Term 1
        "2026-04-20": {
            level: "high",
            title: "First Day of Term 1",
            text: "All students return to campus.\nExtremely crowded MRT, food courts, and walkways."
        },

        // ===== MAY =====
        // Labour Day – Campus Closed
        "2026-05-01": {
            level: "low",
            title: "Labour Day (Public Holiday)",
            text: "Public holiday.\nCampus is closed with zero student activity."
        },
        
        // Graduation Ceremonies (Early May)
        "2026-05-04": {
            level: "high",
            title: "Graduation Ceremonies",
            text: "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded, lots of photos at Red Bridge."
        },
        
        "2026-05-05": {
            level: "high",
            title: "Graduation Ceremonies",
            text: "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded, lots of photos at Red Bridge."
        },
        "2026-05-06": {
            level: "high",
            title: "Graduation Ceremonies",
            text: "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded, lots of photos at Red Bridge."
        },
        
        "2026-05-07": {
            level: "high",
            title: "Graduation Ceremonies",
            text: "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded, lots of photos at Red Bridge."
        },
        
        "2026-05-08": {
            level: "high",
            title: "Graduation Ceremonies",
            text: "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded, lots of photos at Red Bridge."
        },
        
        // Project & Assignment Crunch (Mid-May)
        "2026-05-11": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-12": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-13": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-14": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        "2026-05-15": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-16": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-17": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-18": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-19": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-20": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-21": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        "2026-05-22": {
            level: "high",
            title: "Project & Assignment Crunch",
            text: "Students in labs and libraries working intensively.\nFood courts remain busy."
        },
        
        // SP Excellence Awards – May 26
        "2026-05-26": {
            level: "medium",
            title: "SP Excellence Awards",
            text: "Recognition ceremony for top students and CCA leaders.\nSome facilities booked, moderate crowd expected."
        },
        
        // Hari Raya Haji – May 27
        "2026-05-27": {
            level: "low",
            title: "Hari Raya Haji (Public Holiday)",
            text: "Campus is closed for public holiday.\nZero student activity."
        },

        // Pre-Test Revision Days – May 28–29
        "2026-05-28":{
            level: "high",
            title: "Pre-Test Revision Days",
            text: "Intense library usage.\nStudents prepare for upcoming tests."
        
        },
        
        "2026-05-29": {
            level: "high",
            title: "Pre-Test Revision Days",
            text: "Intense library usage.\nStudents prepare for upcoming tests."
        },
        
        // Vesak Day – May 31 (PH on June 1)
        "2026-05-31": {
            level: "low",
            title: "Vesak Day (Public Holiday)",
            text: "Campus closed.\nZero student activity."
        },

        // ===== JUNE =====
        // Vesak Day (In Lieu) – June 1
        "2026-06-01": {
            level: "low",
            title: "Vesak Day (Public Holiday)",
            text: "Campus is closed for public holiday.\nZero student activity."
        },

        // Mid-Semester Tests – June 2–5
        "2026-06-02": {
            level: "high",
            title: "Mid-Semester Tests",
            text: "Large groups arrive for their test slots.\nFood Courts (FC1, FC5) and libraries very crowded 11AM–2PM."
        },
        
        "2026-06-03": {
            level: "high",
            title: "Mid-Semester Tests",
            text: "Large groups arrive for their test slots.\nFood Courts (FC1, FC5) and libraries very crowded 11AM–2PM."
        },
        
        "2026-06-04": {
            level: "high",
            title: "Mid-Semester Tests",
            text: "Large groups arrive for their test slots.\nFood Courts (FC1, FC5) and libraries very crowded 11AM–2PM."
        },
        
        "2026-06-05": {
            level: "high",
            title: "Mid-Semester Tests",
            text: "Large groups arrive for their test slots.\nFood Courts (FC1, FC5) and libraries very crowded 11AM–2PM."
        },

        // "Go Eco" Week – June 15–19
        "2026-06-15": {
            level: "low",
            title: "Go Eco Week",
            text: "Campus-wide sustainability initiatives or staff workshops.\nGeneral student attendance is near zero."
        },

        "2026-06-16": { level: "low", title: "Go Eco Week", text: "Campus-wide sustainability initiatives.\nGeneral student attendance is near zero." },
        "2026-06-17": { level: "low", title: "Go Eco Week", text: "Campus-wide sustainability initiatives.\nGeneral student attendance is near zero." },
        "2026-06-18": { level: "low", title: "Go Eco Week", text: "Campus-wide sustainability initiatives.\nGeneral student attendance is near zero." },
        "2026-06-19": { level: "low", title: "Go Eco Week", text: "Campus-wide sustainability initiatives.\nGeneral student attendance is near zero." },
        
        // Term 2 Classes Begin – June 29
        "2026-06-29": {
            level: "medium",
            title: "Term 2 Classes Begin",
            text: "All students return to campus.\nFood courts and walkways busy, semester starts."
        }
    };

    function isBetween(date, start, end) {
        return date >= new Date(start) && date <= new Date(end);
    }
    
    function getCrowdLevel(date) {
        const key = getLocalDateKey(date);
        
        // Specific event override
        if (events[key]) return events[key].level;

        // Vacation periods → GREEN
        if (
            isBetween(date, "2025-12-13", "2026-01-04") ||
            isBetween(date, "2026-03-07", "2026-04-19")
        ) return "low";

        // Examination period → GREEN
        if (isBetween(date, "2026-02-23", "2026-03-06")) return "low";

        // Home-based learning → GREEN
        if (key === "2026-01-08" || key === "2026-01-09") return "high";

        // Chinese New Year (Green / Low)
        if (isBetweenLocal(date, "2026-02-16", "2026-02-18")) return "low";

        // Study Week & Mugging Period (Red)
        if (isBetweenLocal(date, "2026-02-16", "2026-02-22")) return "high";

        // A-Level Results Release window (Red)
        if (isBetweenLocal(date, "2026-02-25", "2026-02-27")) return "high";

        // Mugging & Final Exams (Mar 1–5)
        if (isBetweenLocal(date, "2026-03-01", "2026-03-05")) return "high";

        // End of Vacation (Apr 1–12)
        if (isBetweenLocal(date, "2026-04-01", "2026-04-12")) return "low";

        // Freshmen Orientation Programme (Apr 13–17)
        if (isBetweenLocal(date, "2026-04-13", "2026-04-17")) return "high";

        // Labour Day – May 1
        if (key === "2026-05-01") return "low";

        // Graduation Ceremonies – May 4–8
        if (isBetweenLocal(date, "2026-05-04", "2026-05-08")) return "high";

        // Project & Assignment Crunch – May 11–22
        if (isBetweenLocal(date, "2026-05-11", "2026-05-22")) return "high";

        // SP Excellence Awards – May 26
        if (key === "2026-05-26") return "medium";

        // Hari Raya Haji – May 27
        if (key === "2026-05-27") return "low";

        // Pre-Test Revision Days – May 28–29
        if (isBetweenLocal(date, "2026-05-28", "2026-05-29")) return "high";

        // Vesak Day – May 31
        if (key === "2026-05-31") return "low";

        // Vesak Day (In Lieu) – June 1
        if (key === "2026-06-01") return "low";
        
        // Mid-Semester Tests (June 2–5)
        if (isBetweenLocal(date, "2026-06-02", "2026-06-05")) return "high";

        // Mid-Semester Vacation (Phase 1) June 6–21 → GREEN
        if (isBetweenLocal(date, "2026-06-06", "2026-06-21")) return "low";

        // "Go Eco" Week – June 15–19 → GREEN
        if (isBetweenLocal(date, "2026-06-15", "2026-06-19")) return "low";

        // Mid-Semester Vacation (Phase 2) June 22–28 → GREEN
        if (isBetweenLocal(date, "2026-06-22", "2026-06-28")) return "low";

        // Term 2 Classes Begin – June 29
        if (key === "2026-06-29") return "medium";

        // Term 1 general period (Apr 20 onwards) → RED
        // Put at the END so it doesn't override May/June vacations
        if (date >= new Date("2026-04-20") && date <= new Date("2026-05-31")) return "high";

        // Weekend → WHITE
        const day = date.getDay();
        if (day === 0 || day === 6) return "weekend";

        // Normal school day → YELLOW
        return "medium";
    }

    function isBetweenLocal(date, start, end) {
        const key = getLocalDateKey(date);
        return key >= start && key <= end;
    }

    function generateCalendar() {
        calendarGrid.innerHTML = "";

        const days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
        days.forEach(d => {
            const div = document.createElement("div");
            div.className = "day-header";
            div.innerText = d;
            calendarGrid.appendChild(div);
        });

        const firstDay = new Date(currentYear, currentMonth, 1).getDay();
        const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();

        for (let i = 0; i < firstDay; i++) {
            calendarGrid.appendChild(document.createElement("div"));
        }

        for (let day = 1; day <= totalDays; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dateKey = getLocalDateKey(date);

            const div = document.createElement("div");
            div.className = "day";

            const level = getCrowdLevel(date);
            div.classList.add(level);

            div.innerText = day;

            div.onclick = () => {
    const key = getLocalDateKey(date);

    // Default
    let title = infoTranslations[currentLang].academicDay;
    let text = infoTranslations[currentLang].selectDate;

    // Vacation explanation (1–4 Jan)
    if (isBetweenLocal(date, "2026-01-01", "2026-01-04")) {
        title = infoTranslations[currentLang].vacation;
        text = "Semester break from 1-4 January. Campus activity is minimal, hence low crowd levels are expected.";
    }

    // Study Week (except CNY)
    if (isBetweenLocal(date, "2026-02-16", "2026-02-22")) {
        title = infoTranslations[currentLang].academicDay;
        text = "No formal classes.\nFood courts are quieter, but libraries are at maximum capacity throughout the day.";
    }

    // A-Level Results Release window
    if (isBetweenLocal(date, "2026-02-25", "2026-02-27")) {
        title = infoTranslations[currentLang].academicDay;
        text = "Increase in external visitors at the Student Service Centre.\nModerate crowd surge expected.";
    }

    // Final Exams & Mugging Period
    if (isBetweenLocal(date, "2026-03-01", "2026-03-05")) {
        title = infoTranslations[currentLang].midTests;
        text = "Extreme demand for library seats.\nStudents gather near exam halls before paper timings.";
    }

    // Vacation Ghost Town
    if (isBetweenLocal(date, "2026-03-07", "2026-04-19")) {
        title = infoTranslations[currentLang].vacation;
        text = "Most students are away.\nMany food stalls operate shorter hours or close temporarily.";
    }

    // End of Vacation (Apr 1–12)
    if (isBetweenLocal(date, "2026-04-01", "2026-04-12")) {
        title = infoTranslations[currentLang].vacation;
        text = "Semester break continues.\nCampus is quiet with minimal student presence.";
    }

    // Freshmen Orientation Programme
    if (isBetweenLocal(date, "2026-04-13", "2026-04-17")) {
        title = infoTranslations[currentLang].academicDay;
        text = "Orientation week for Year 1 students.\nExpect loud cheers, mass games, campus tours, and busy lunch hours.";
    }

    // Term 1 Classes Begin
    if (date >= new Date("2026-04-20")) {
        title = infoTranslations[currentLang].term2;
        text = "All students return to campus.\nFood courts experience long queues, and main walkways are heavily congested.";
    }

    // Labour Day – May 1
    if (key === "2026-05-01") {
        title = infoTranslations[currentLang].vacation;
        text = "Campus is closed for public holiday.\nZero student activity.";
    }

    // Graduation Ceremonies
    if (isBetweenLocal(date, "2026-05-04", "2026-05-08")) {
        title = infoTranslations[currentLang].academicDay;
        text = "Thousands of graduates return.\nFC1 and SP Plaza extremely crowded.\nLots of photos at Red Bridge.";
    }

    // Project & Assignment Crunch
    if (isBetweenLocal(date, "2026-05-11", "2026-05-22")) {
        title = infoTranslations[currentLang].academicDay;
        text = "Students in labs and libraries working intensively.\nFood courts remain busy.";
    }

    // SP Excellence Awards
    if (key === "2026-05-26") {
        title = infoTranslations[currentLang].academicDay;
        text = "Recognition ceremony for top students and CCA leaders.\nModerate crowd expected in certain areas.";
    }

    // Hari Raya Haji
    if (key === "2026-05-27") {
        title = infoTranslations[currentLang].vacation;
        text = "Campus is closed for public holiday.\nZero student activity.";
    }

    // Pre-Test Revision Days
    if (isBetweenLocal(date, "2026-05-28", "2026-05-29")) {
        title = infoTranslations[currentLang].midTests;
        text = "Intense library usage.\nStudents prepare for upcoming tests.";
    }

    // Vesak Day – May 31 & June 1
    if (key === "2026-05-31" || key === "2026-06-01") {
        title = infoTranslations[currentLang].vacation;
        text = "Campus is closed for public holiday.\nZero student activity.";
    }

    // Mid-Semester Tests
    if (isBetweenLocal(date, "2026-06-02", "2026-06-05")) {
        title = infoTranslations[currentLang].midTests;
        text = "Large groups arrive for test slots.\nFood Courts (FC1, FC5) and libraries very crowded 11AM–2PM.";
    }

    // Mid-Semester Vacation
    if (isBetweenLocal(date, "2026-06-06", "2026-06-28")) {
        title = infoTranslations[currentLang].midVacation;
        text = "Most students are away.\nCampus is quiet with very low activity.";
    }

    // Term 2 Classes Begin
    if (key === "2026-06-29") {
        title = infoTranslations[currentLang].term2;
        text = "All students return to campus.\nFood courts and walkways busy, semester starts.";
    }

    // Override with custom events if exists
    if (events[key]) {
        title = events[key].title;
        text = events[key].text;
    }

    document.getElementById("infoDate").innerText = date.toDateString();
    document.getElementById("infoTitle").innerHTML = `<strong>${title}</strong>`;
    document.getElementById("infoText").innerText = text;
};

            calendarGrid.appendChild(div);
        }

        monthTitle.innerText = new Date(currentYear, currentMonth)
            .toLocaleString("default", { month: "long", year: "numeric" });
    }

    window.changeMonth = function (dir) {
        currentMonth += dir;

        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        } else if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }

        generateCalendar();
    };

    generateCalendar();

});

