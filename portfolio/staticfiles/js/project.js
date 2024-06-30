// shows the first image
let slideIndex = 1;
showSlides(slideIndex)

// changes the images as we navigate
function moveSlide(n) {
    slideIndex += n
    showSlides(slideIndex)
}

// function to display slides
function showSlides(n) {
    console.log(n)
    let index;
    let slides = document.getElementsByClassName("carousel-item")
    if (n > slides.length) {
        slideIndex = slides.length
    }
    if (n < 1) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"
    }

    slides[slideIndex - 1].style.display = "block"
}