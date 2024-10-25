document.addEventListener('DOMContentLoaded', () => {
    displayCharacters();
    displayCarousel();
});

// Character data
const characters = [
    { name: "Persephone", image: "image/persephone.jpg", details: "Goddess of spring." },
    { name: "Hades", image: "image/hades.jpg", details: "God of the underworld." },
    { name: "Zeus", image: "image/zeus.jpg", details: "God of thunder." },
    { name: "Poseidon", image: "image/posiden.jpg", details: "God of the sea." },
    { name: "Eros", image: "image/eros.jpg", details: "God of love." },
    { name: "Hermes", image: "image/hermes.jpg", details: "Messenger of the gods." },
    { name: "Apollo", image: "image/apollo.jpg", details: "God of the sun." },
    { name: "Artemis", image: "image/artemis.jpg", details: "Goddess of the hunt." },
    { name: "Demeter", image: "image/demeter.jpg", details: "Goddess of the harvest." },
    { name: "Ares", image: "image/ares.jpg", details: "God of war." }
];

function displayCharacters() {
    const characterList = document.querySelector('.character-list');
    characters.forEach(character => {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}" />
            <h3>${character.name}</h3>
            <p>${character.details}</p>
        `;
        characterList.appendChild(card);
    });
}

// Carousel data
const manhwas = [
    { title: "Leviathan", image: "image/leviathan.jpg" },
    { title: "Tower of God", image: "image/tower of god.jpg" },
    { title: "Leveling Up the Gods", image: "image/leveling up the god.jpg" },
    { title: "Existence", image: "image/existance.jpg" },
    { title: "The Breaker", image: "image/the breaker.jpg" },
    { title: "The First Hunter", image: "image/the first hunter.jpg" },
    { title: "Noblesse", image: "image/nobless.jpg" },
    { title: "Ultimate Outcast", image: "image/ultimate outcast.jpg" },
    { title: "Unholy Blood", image: "image/unholy blood.jpg" },
    { title: "Dice: The Club That Changes Everything", image: "image/The cube that changes everything.jpg" }
];

let currentIndex = 0;

function displayCarousel() {
    const carouselContainer = document.querySelector('.carousel-container');
    manhwas.forEach(manhwa => {
        const item = document.createElement('div');
        item.className = 'carousel-item';
        item.style.backgroundImage = `url(${manhwa.image})`;
        item.innerHTML = `<h4>${manhwa.title}</h4>`;
        carouselContainer.appendChild(item);
    });

    // Create carousel navigation buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-button prev';
    prevButton.innerHTML = '&lt;';
    prevButton.onclick = () => moveCarousel(-1);

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-button next';
    nextButton.innerHTML = '&gt;';
    nextButton.onclick = () => moveCarousel(1);

    carouselContainer.parentElement.appendChild(prevButton);
    carouselContainer.parentElement.appendChild(nextButton);
}

function moveCarousel(direction) {
    const carouselContainer = document.querySelector('.carousel-container');
    currentIndex = (currentIndex + direction + manhwas.length) % manhwas.length;
    carouselContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}
