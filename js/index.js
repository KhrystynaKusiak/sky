setInterval(updateTime, 1000);
function updateTime() {
    const timeContainer = document.querySelector('.time');
    timeContainer.innerText = new Date().toLocaleString();
}

const carouselImages = ['images/slider-fre-fly.jpg', 'images/slider-kitesurfing.jpg', 'images/slider-paragliding.jpg', 'images/slider-wingsuit.jpg', ]

let currentIdx = 0;

function showCurrentImage() {
    const imgContainer1 = document.querySelector('.about-services .image-first');
    const imgContainer2 = document.querySelector('.about-services .image-second');

    const img2Idx = currentIdx + 1 > carouselImages.length - 1 ? 0 : currentIdx + 1;

    imgContainer1.src = carouselImages[currentIdx];
    imgContainer2.src = carouselImages[img2Idx];

}

function next() {
    currentIdx++;
    if (currentIdx > carouselImages.length - 1)
        currentIdx = 0;
    showCurrentImage();
}

function prev() {
    currentIdx--;
    if (currentIdx < 0)
        currentIdx = carouselImages.length - 1;
    showCurrentImage();
}

showCurrentImage();

setInterval(next, 2000);

document.querySelector('.carousel-discription-of-services .next').addEventListener('click', next);

document.querySelector('.carousel-discription-of-services .prev').addEventListener('click', prev);

const carouselImagesSmall = ['images/slider-fre-fly.jpg', 'images/slider-kitesurfing.jpg', 'images/slider-paragliding.jpg', 'images/slider-wingsuit.jpg', ]

let currentSmallIdx = 0;

function showCurrentImageSmall() {
    const imgSmallContainer1 = document.querySelector('.about-services-small .image-first');

    const imgSmall2Idx = currentSmallIdx + 1 > carouselImagesSmall.length - 1 ? 0 : currentSmallIdx + 1;

    imgSmallContainer1.src = carouselImagesSmall[currentIdx];

}

function nextSmall() {
    currentSmallIdx++;
    if (currentSmallIdx > carouselImagesSmall.length - 1)
        currentSmallIdx = 0;
    showCurrentImageSmall();
}

function prevSmall() {
    currentSmallIdx--;
    if (currentSmallIdx < 0)
        currentSmallIdx = carouselImagesSmall.length - 1;
    showCurrentImageSmall();
}

showCurrentImageSmall();

setInterval(nextSmall, 2000);

document.querySelector('.carousel-discription-of-services-small .next').addEventListener('click', nextSmall);

document.querySelector('.carousel-discription-of-services-small .prev').addEventListener('click', prevSmall);
