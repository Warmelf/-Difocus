const imageSlider = document.querySelector('.slides');
const image = document.querySelector('img');

let count = 0;
const arrOfImagesUrl = [
    'http://newshop.kupikupi.org/alboms/3/195/00002.jpeg',
    'http://newshop.kupikupi.org/alboms/3/193/00006.jpeg',
    'http://newshop.kupikupi.org/alboms/3/140/60-375.jpeg'
];

imageSlider.addEventListener('click', () => {
    count++;
    if (count < arrOfImagesUrl.length) {
        image.setAttribute('src', arrOfImagesUrl[count]);
    } else {
        count = 0;
        image.setAttribute('src', arrOfImagesUrl[count]);
    }
});