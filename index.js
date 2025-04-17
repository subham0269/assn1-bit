const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");

const carouselImages = document.querySelectorAll(".carousel-container > div");
let counter = 0;


const updateCarousel = () => {
    carouselImages.forEach( (image, index) => {
        // addActiveImageStyle(index);
        image.style.transform = `translateX(-${counter * 432}px)`;
        carouselImages[index].classList.toggle("active", index === counter);
    })
}

nextBtn.addEventListener("click", () => {
    if (counter >= carouselImages.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    updateCarousel();    
});

prevBtn.addEventListener("click", () => {
    if (counter <= 0) {
        counter = 0;
    } else {
        counter--;
    }
    console.log(counter);
    updateCarousel();
});


updateCarousel();