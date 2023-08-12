// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.
document.addEventListener("DOMContentLoaded", function() {
    // Get the container for the slider and the individual slide elements
    const slider = document.querySelector(".product-slider");
    const slides = document.querySelectorAll(".product-slide");
    const slideWidth = slides[0].clientWidth; // Get the width of a single slide
    let currentIndex = 0; // Keep track of the currently displayed slide index

    // Function to display a specific slide by translating the slider container
    function showSlide(index) {
        const translateX = -index * slideWidth; // Calculate the translation amount
        slider.style.transform = `translateX(${translateX}px)`; // Apply the translation
    }

    // Function to show the next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length; // Calculate the next slide index
        showSlide(currentIndex); // Display the next slide
    }

    // Function to show the previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Calculate the previous slide index
        showSlide(currentIndex); // Display the previous slide
    }

    // Get the left and right arrow buttons for slide navigation
    const leftArrow = document.querySelector(".product-left");
    const rightArrow = document.querySelector(".product-right");

    // Attach click event listeners to the arrow buttons
    leftArrow.addEventListener("click", prevSlide); // Go to the previous slide
    rightArrow.addEventListener("click", nextSlide); // Go to the next slide

    // Display the initial slide
    showSlide(currentIndex);

    // Collapsible functionality
    var coll = document.getElementsByClassName("collapsible");
    var i;

    // Loop through each collapsible element
    for (i = 0; i < coll.length; i++) {
        // Attach a click event listener to toggle the "active" class and show/hide content
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active"); // Toggle the "active" class
            var content = this.nextElementSibling; // Get the content element
            if (content.style.display === "block") {
                content.style.display = "none"; // Hide the content if it's currently displayed
            } else {
                content.style.display = "block"; // Show the content if it's currently hidden
            }
        });

        // Set the collapsible content to start closed
        var content = coll[i].nextElementSibling; // Get the content element
        content.style.display = "none"; // Hide the content initially
    }
});
// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.