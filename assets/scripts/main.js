const slidesContainer = document.getElementById('slides-container');
const btnLeft = document.getElementById('button-left');
const btnRight = document.getElementById('button-right');

function getSlideWidthWithGap() {
    const slide = slidesContainer.querySelector('img');
    const slideWidth = slide.offsetWidth;

    const containerStyles = getComputedStyle(slidesContainer);
    const gap = parseInt(containerStyles.columnGap || containerStyles.gap || 0, 10);

    return slideWidth + gap;
}

function scrollSlides(direction) {
    slidesContainer.scrollBy({
        left: direction * getSlideWidthWithGap(),
        behavior: 'smooth'
    });
}

btnLeft.addEventListener('click', () => {
    scrollSlides(-1);
});

btnRight.addEventListener('click', () => {
    scrollSlides(1);
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        scrollSlides(-1);
    } else if (e.key === 'ArrowRight') {
        scrollSlides(1);
    }
});