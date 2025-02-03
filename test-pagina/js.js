// script.js
document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("home");
    const produtosLink = document.getElementById("produtos");
    const contatoLink = document.getElementById("contato");

    const principalSection = document.getElementById("principal");
    const secundariaSection = document.getElementById("secundaria");
    const contactoSection = document.getElementById("contacto");

    function showSection(sectionToShow) {
        [principalSection, secundariaSection, contactoSection].forEach(section => {
            section.classList.add("hidden");
            section.classList.remove("active");
        });
        sectionToShow.classList.add("active");
        sectionToShow.classList.remove("hidden");
    }

    homeLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(principalSection);
    });

    produtosLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(secundariaSection);
    });

    contatoLink.addEventListener("click", (e) => {
        e.preventDefault();
        showSection(contactoSection);
    });
});
