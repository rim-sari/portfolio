// Année dynamique dans le footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Effet "reveal" au scroll
const reveals = document.querySelectorAll(".reveal");

function handleReveal() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((el) => {
        const rectTop = el.getBoundingClientRect().top;
        if (rectTop < triggerBottom) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

// Filtres projets (Tous / Académiques / Personnels)
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        const filter = btn.getAttribute("data-filter");

        // bouton actif
        filterButtons.forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");

        // filtrage
        projectCards.forEach((card) => {
            const type = card.getAttribute("data-type");
            if (filter === "all" || filter === type) {
                card.style.display = "flex";
            } else {
                card.style.display = "none";
            }
        });
    });
});
