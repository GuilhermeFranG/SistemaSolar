function toggleZoom() {
    this.classList.toggle('zoom');
}

const planetElements = document.querySelectorAll(".astro");

planetElements.forEach(function (planetElement) {
    planetElement.addEventListener('click', toggleZoom);
});

function toggleHidden() {
    const description = this.nextElementSibling;

    description.classList.toggle('visible');
    description.classList.toggle('hidden');
}

const planetText = document.querySelectorAll(".planetText");

planetText.forEach(function (planetText) {
    planetText.addEventListener('click', toggleHidden);
});