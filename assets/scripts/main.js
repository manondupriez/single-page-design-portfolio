const slidesContainer = document.getElementById('slides-container');
const [btnLeft, btnRight] = ['button-left', 'button-right'].map(id => document.getElementById(id));

const getSlideWidthWithMargin = () => {
    const slide = slidesContainer.querySelector('div');
    if (!slide) return 0;
    const style = getComputedStyle(slide);
    return slide.offsetWidth + parseInt(style.marginRight || 0, 10);
};

const scrollSlides = dir => {
    slidesContainer.scrollBy({
        left: dir * getSlideWidthWithMargin(),
        behavior: 'smooth'
    });
};

[btnLeft, btnRight].forEach((btn, i) =>
    btn.addEventListener('click', () => scrollSlides(i ? 1 : -1))
);

document.addEventListener('keydown', ({ key }) => {
    if (key === 'ArrowLeft') scrollSlides(-1);
    if (key === 'ArrowRight') scrollSlides(1);
});

const centerMiddleSlide = () => {
    const slides = slidesContainer.querySelectorAll('div');
    if (!slides.length) return;

    const midIndex = Math.floor(slides.length / 2);
    const slideWidth = getSlideWidthWithMargin();
    const offset = (midIndex * slideWidth) - (slidesContainer.offsetWidth / 2) + (slideWidth / 2);

    slidesContainer.scrollTo({ left: offset, behavior: 'smooth' });
};

window.addEventListener('load', centerMiddleSlide);

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(centerMiddleSlide, 150);
});