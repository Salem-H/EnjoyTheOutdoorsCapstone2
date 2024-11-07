
let slideIndex = 0;
const slides = document.getElementsByClassName("slides");

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;  // Loop back to the first slide
    }
    slides[slideIndex].style.display = "block";  // Show the current slide
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

document.addEventListener("DOMContentLoaded", function() {
    showSlides(); 
});
