// JavaScript for Hero Background Slideshow 
const heroImages = document.querySelector(".hero-images");
const heroImgs = document.querySelectorAll(".hero-img");
let index = 0;
const totalImages = heroImgs.length;

// Clone the first image and append it to the end
const firstClone = heroImgs[0].cloneNode(true);
heroImages.appendChild(firstClone);


const slideWidth = 100; // Each slide takes 100vw

function slideHeroImage() {
    index++;

    // Apply sliding effect
    heroImages.style.transition = "transform 1s ease-in-out";
    heroImages.style.transform = `translateX(-${index * slideWidth}vw)`;

    // Reset to first image instantly after last one
    if (index === totalImages) {
        setTimeout(() => {
            heroImages.style.transition = "none"; // Remove animation
            heroImages.style.transform = `translateX(0)`; // Jump to first image
            index = 0; // Reset index
        }, 1000); // Wait until the slide transition completes
    }
}

// Start automatic slideshow after 5seconds the time below is in milliseconds
setInterval(slideHeroImage, 5000);