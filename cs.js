const hamburgerBtn = document.getElementById("hamburger-btn");
const ultraPanel = document.getElementById("ultra-panel");
const ultraOverlay = document.getElementById("ultra-overlay");

hamburgerBtn.addEventListener("click", () => {
    ultraPanel.classList.toggle("active");
    ultraOverlay.classList.toggle("active");
});

ultraOverlay.addEventListener("click", () => {
    ultraPanel.classList.remove("active");
    ultraOverlay.classList.remove("active");
});
const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", () => {
    const query = searchInput.value.toLowerCase().trim();

    if (!query) {
        // If search box is empty, show all sections
        document.querySelectorAll("section").forEach(s => s.classList.add("active"));
        document.querySelectorAll(".model-wrapper").forEach(m => m.style.display = "flex");
        return;
    }

    // Filter sections
    document.querySelectorAll("section").forEach(section => {
        if (section.dataset.search && section.dataset.search.toLowerCase().includes(query)) {
            section.classList.add("active");
        } else {
            section.classList.remove("active");
        }
    });

    // Filter models
    document.querySelectorAll(".model-wrapper").forEach(model => {
        if (model.dataset.search && model.dataset.search.toLowerCase().includes(query)) {
            model.style.display = "flex";
        } else {
            model.style.display = "none";
        }
    });
});
searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    });