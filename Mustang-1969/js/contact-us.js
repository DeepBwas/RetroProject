// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.
document.addEventListener('DOMContentLoaded', function() {
    var slideIndex = 0; // Initialize the index of the currently displayed slide
    showSlides(); // Start the slideshow

    // Function to display the slides in a timed slideshow
    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("img-slides"); // Get all slide elements
        var dots = document.getElementsByClassName("dot"); // Get all dot indicators

        // Hide all slides initially
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        slideIndex++; // Move to the next slide
        if (slideIndex > slides.length) {
            slideIndex = 1; // Reset index if it exceeds the number of slides
        }

        // Remove the "active" class from all dot indicators
        for (i = 0; i < dots.length; i++) {
            dots[i].classList.remove("active");
        }

        slides[slideIndex - 1].style.display = "block"; // Display the current slide
        dots[slideIndex - 1].classList.add("active"); // Highlight the corresponding dot

        // Call the showSlides function recursively after a delay of 3000ms (3 seconds)
        setTimeout(showSlides, 2000);
    }
});
// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.