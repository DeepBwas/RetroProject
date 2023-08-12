// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.
document.addEventListener('DOMContentLoaded', function() {
  // Get the elements by their IDs
  const hoverDiv = document.getElementById('hover-div');
  const detailsDiv = document.getElementById('details-div');

  // Change the cursor style to indicate clickable content
  hoverDiv.style.cursor = 'pointer';
  detailsDiv.style.cursor = 'pointer';

  // Attach a click event listener to the hoverDiv
  hoverDiv.addEventListener('click', function() {
      // Redirect to 'product.html' when the hoverDiv is clicked
      window.location.href = 'product.html';
  });

  // Attach a click event listener to the detailsDiv
  detailsDiv.addEventListener('click', function() {
      // Redirect to 'product.html' when the detailsDiv is clicked
      window.location.href = 'product.html';
  });
});
// JS Done by Deep Biswas & Arshpreet Singh Guray.
//Georgian College, ON, Canada.