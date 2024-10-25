
// Carousel data
const manhwas = [
    { title: "Leviathan", image: "image/leviathan.jpg" },
    { title: "Tower of God", image: "image/tower-of-god.jpg" },
    { title: "Levelling up the gods", image: "image/levelling-up-the-gods.jpg" },
    { title: "Existence", image: "image/existence.jpg" },
    { title: "The Breaker", image: "image/the breaker.jpg" },
    { title: "The First Hunter", image: "image/the-first-hunter.jpg" },
    { title: "Noblesse", image: "image/noblesse.jpg" },
    { title: "Ultimate Outcast", image: "image/ultimate-outcast.jpg" },
    { title: "Unholy Blood", image: "image/unholy-blood.jpg" },
    { title: "dice-the Club that changes everything", image: "image/dice-the club that changes everything.jpg" },
    // Add more manhwas as needed
];

// Function to display carousel items
function displayCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    manhwas.forEach(manhwa => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.backgroundImage = `url(${manhwa.image})`;
        item.innerHTML = `<h4>${manhwa.title}</h4>`;
        carouselContainer.appendChild(item);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayCharacters();
    displayCarousel();
});
