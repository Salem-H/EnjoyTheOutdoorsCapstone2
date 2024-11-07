
let slideIndex = 0;
const slides = document.getElementsByClassName("slideshow");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) { slideIndex = 0; }
    slides[slideIndex].style.display = "block";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

showSlides(); 
