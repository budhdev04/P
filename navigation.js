// Carousel navigation
let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');

function moveCarousel(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = carouselItems.length - 1;
    } else if (currentSlide >= carouselItems.length) {
        currentSlide = 0;
    }
    carouselItems.forEach((item, index) => {
        item.style.display = index === currentSlide ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', () => moveCarousel(-1));
nextButton.addEventListener('click', () => moveCarousel(1));