/* =========================
   PROFILE & VENDOR LOGIC
========================= */
const profileBtn = document.getElementById("profileBtn");
const vendorModal = document.getElementById("vendorModal");

const authSection = document.getElementById("authSection");
const profileSection = document.getElementById("profileSection");

const actionBtn = document.getElementById("actionBtn");
const toggleAuth = document.getElementById("toggleAuth");
const errorText = document.getElementById("errorText");

const vendorNameInput = document.getElementById("vendorName");
const vendorFoodCourt = document.getElementById("vendorFoodCourt");
const vendorStall = document.getElementById("vendorStall");

const profileName = document.getElementById("profileName");
const profileFoodCourt = document.getElementById("profileFoodCourt");
const profileStall = document.getElementById("profileStall");

const logoutBtn = document.getElementById("logoutBtn");

let isLoginMode = false;

const API_BASE = "https://foodpulse-backend.onrender.com/api";

/* =========================
   FOOD COURT → STALL DATA
========================= */
const foodCourtStalls = {
    "Food Court 1": [
        "Japanese Curry",
        "Western Food",
        "Chicken Rice",
        "Ban Mian / Fish Soup",
        "Drinks & Snacks Stall"
    ],
    "Food Court 2": [
        "Indonesian Express",
        "Japanese Food",
        "Yong Tau Foo",
        "Vegetarian",
        "Malay / Indian"
    ],
    "Food Court 3": [
        "SP Mini Wok",
        "Chicken Rice / Nasi Lemak",
        "Mala Xiang Guo",
        "Indonesian Express",
        "Thai Food",
        "Chinese Cuisine / Dumplings",
        "Western Food",
        "Waffles Store",
        "Drinks & Fruits Stall"
    ],
    "Food Court 4": [
        "M&B Western",
        "Tamagood (Bake & Bowl)",
        "Taiwanese Cuisine",
        "Thai Food",
        "Ban Mian / Fish Soup",
        "Breakfast & Toast Stall",
        "Fruit Stall",
        "Drinks Stall"
    ],
    "Food Court 5": [
        "KFC",
        "Subway",
        "Starbucks",
        "Bang Deli",
        "Brunch Cafe",
        "Fruit Stall"
    ],
    "Food Court 6": [
        "Creamy Duck",
        "Chicken Rice Stall",
        "Japanese Stall",
        "Western Stall",
        "Thai Shop",
        "Malay Food",
        "Noodle / Soup Stall",
        "Drinks & Dessert Stall"
    ]
};

/* =========================
   OPEN PROFILE MODAL
========================= */
profileBtn.addEventListener("click", () => {
    vendorModal.style.display = "flex";

    const token = localStorage.getItem("token");

    if (!token) {
        profileSection.style.display = "none";
        authSection.style.display = "block";
        showRegisterMode();
        return;
    }

    fetch(`${API_BASE}/profile`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then(res => {
        if (!res.ok) throw new Error();
        return res.json();
    })
    .then(user => {
        authSection.style.display = "none";
        profileSection.style.display = "block";

        profileName.textContent = user.username;
        profileFoodCourt.textContent = user.foodCourt || "";
        profileStall.textContent = user.stall || "";
    })
    .catch(() => {
        localStorage.removeItem("token");
        showRegisterMode();
    });
});

/* =========================
   CLOSE MODAL
========================= */
vendorModal.addEventListener("click", (e) => {
    if (e.target === vendorModal) {
        vendorModal.style.display = "none";
    }
});

/* =========================
   DYNAMIC STALL DROPDOWN
========================= */
vendorFoodCourt.addEventListener("change", () => {
    const selectedFC = vendorFoodCourt.value;

    vendorStall.innerHTML = `<option value="">Select Food Stall</option>`;
    vendorStall.disabled = true;

    if (!selectedFC || !foodCourtStalls[selectedFC]) return;

    foodCourtStalls[selectedFC].forEach(stall => {
        const option = document.createElement("option");
        option.value = stall;
        option.textContent = stall;
        vendorStall.appendChild(option);
    });

    vendorStall.disabled = false;
});

function isValidUsername(name) {
    return /^[A-Za-z](?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{4,29}$/.test(name);
}

function showError(message) {
    errorText.textContent = message;
    errorText.style.display = "block";
}

/* =========================
   REGISTER / LOGIN
========================= */
actionBtn.addEventListener("click", () => {
    errorText.style.display = "none";

    const name = vendorNameInput.value.trim();
    const foodCourt = vendorFoodCourt.value;
    const stall = vendorStall.value;

    if (!isValidUsername(name)) {
        showError("Invalid username format.");
        return;
    }

    /* ========= REGISTER ========= */
    if (!isLoginMode) {
        if (!foodCourt || !stall) {
            showError("Please select Food Court and Food Stall.");
            return;
        }

        fetch(`${API_BASE}/register`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: name, foodCourt, stall })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                showError(data.error);
                return;
            }
            localStorage.setItem("token", data.token);
            vendorModal.style.display = "none";
        })
        .catch(() => showError("Server error. Please try again."));
    }

    /* ========= LOGIN ========= */
    else {
        fetch(`${API_BASE}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username: name })
        })
        .then(res => res.json())
        .then(data => {
            if (data.error) {
                showError(data.error);
                return;
            }
            localStorage.setItem("token", data.token);
            vendorModal.style.display = "none";
        })
        .catch(() => showError("Server error. Please try again."));
    }
});

function showLoginMode() {
    isLoginMode = true;

    actionBtn.textContent = "Login";
    toggleAuth.textContent = "Not a member? Register";

    vendorFoodCourt.style.display = "none";
    vendorStall.style.display = "none";

    errorText.style.display = "none";
}

function showRegisterMode() {
    isLoginMode = false;

    actionBtn.textContent = "Register";
    toggleAuth.textContent = "Already a member? Sign In";

    vendorFoodCourt.style.display = "block";
    vendorStall.style.display = "block";

    vendorNameInput.value = "";
    vendorFoodCourt.value = "";
    vendorStall.innerHTML = `<option value="">Select Food Stall</option>`;
    vendorStall.disabled = true;

    errorText.style.display = "none";
}

/* =========================
   TOGGLE LOGIN / REGISTER
========================= */
toggleAuth.addEventListener("click", () => {
    isLoginMode ? showRegisterMode() : showLoginMode();
});

/* =========================
   LOG OUT
========================= */
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("token");
    vendorModal.style.display = "none";
});