// Data detail unit usaha berdasarkan deskripsi pada petunjuk tugas.
const unitDetails = {
    food: {
        category: "FOOD & DRINK",
        title: "Unit F&B",
        description: "Unit F&B menyediakan berbagai pilihan makanan dan minuman untuk kebutuhan mahasiswa."
    },
    print: {
        category: "PRINT & DOCUMENT",
        title: "Unit Percetakan & Dokumen",
        description: "Unit ini melayani kebutuhan print, fotokopi, serta pengetikan dokumen."
    },
    consign: {
        category: "TITIP JUAL",
        title: "Unit Konsinyasi",
        description: "Unit Konsinyasi menyediakan fasilitas titip jual barang atau produk mahasiswa."
    },
    creative: {
        category: "CREATIVE SERVICES",
        title: "Unit Jasa Kreatif",
        description: "Unit Jasa Kreatif menawarkan layanan desain grafis, fotografi, hingga videografi."
    }
};

const modal = document.getElementById("detailModal");
const modalCategory = document.getElementById("modalCategory");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeButton = document.getElementById("modalClose");
const doneButton = document.getElementById("modalDone");

function openModal(unitKey) {
    const unit = unitDetails[unitKey];

    if (!unit) return;

    modalCategory.textContent = unit.category;
    modalTitle.textContent = unit.title;
    modalDescription.textContent = unit.description;
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    closeButton.focus();
}

function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
}

document.querySelectorAll(".detail-button").forEach((button) => {
    button.addEventListener("click", () => {
        openModal(button.dataset.unit);
    });
});

closeButton.addEventListener("click", closeModal);
doneButton.addEventListener("click", closeModal);

modal.addEventListener("click", (event) => {
    if (event.target.hasAttribute("data-close-modal")) {
        closeModal();
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
    }
});

// Menu navigasi untuk layar kecil.
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
