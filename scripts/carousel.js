const items = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let current = 0;

function updateCarousel() {
items.forEach((item, index) => {
    item.classList.remove('active');
    if (index === current) item.classList.add('active');
});
}

nextBtn.addEventListener('click', () => {
current = (current + 1) % items.length;
updateCarousel();
});

prevBtn.addEventListener('click', () => {
current = (current - 1 + items.length) % items.length;
updateCarousel();
});

updateCarousel();