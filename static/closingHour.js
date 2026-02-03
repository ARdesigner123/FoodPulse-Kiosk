const API_BASE = "https://foodpulse-backend.onrender.com/api";
const grid = document.getElementById("discountGrid");

fetch(`${API_BASE}/closing-discounts`)
    .then(res => res.json())
    .then(data => {
        if (!Array.isArray(data) || data.length === 0) {
            grid.innerHTML = "<p>No closing-hour discounts available</p>";
            return;
        }

        grid.innerHTML = ""; // clear grid before rendering

        data.forEach(d => {
            const card = document.createElement("div");
            card.className = "menu-card";

            const foodCourtNo = d.foodCourt
                ? d.foodCourt.replace("Food Court ", "")
                : "—";

            card.innerHTML = `
                <div class="menu-overlay">
                    <span>
                        <strong>${d.foodName}</strong><br>
                        ${d.stall} (FC ${foodCourtNo})<br>
                        ${d.quantity} left @ $${Number(d.price).toFixed(2)}<br>
                        ${d.time}
                    </span>
                </div>
            `;

            grid.appendChild(card);
        });
    })
    .catch(err => {
        console.error("❌ Closing hour fetch error:", err);
        grid.innerHTML = "<p>Error loading discounts</p>";
    });