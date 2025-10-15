const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextBtn = document.querySelector('.carousel__btn.next');
const prevBtn = document.querySelector('.carousel__btn.prev');

let currentIndex = 0;

function updateSlidePosition() {
    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        const offset = (index - currentIndex) * 100;
        slide.style.transform = `translateX(${offset}%) scale(${index === currentIndex ? 1 : 0.8})`;
        slide.style.opacity = index === currentIndex ? 1 : 0.5;
    });
    slides[currentIndex].classList.add('active');
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
});

slides.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        currentIndex = index;
        updateSlidePosition();
    });
});

updateSlidePosition();