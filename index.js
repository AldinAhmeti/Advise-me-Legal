const sliderTrack = document.querySelector('.blog-section');
let isPlaying = true;

function moveSlider() {
    blog-section.style.transform ; 'translateX(-100%)'; // Moves to the left
    blog-section.addEventListener('transitionend', () => {
        blog-section .style.transition ; 'none'; // Remove transition for reset
        blog-section .style.transform ;'translateX(0)'; // Reset position
    setTimeout(() => {
       blog-section .style.transition ; 'transform 0.5s ease-in-out'; // Add transition back
      moveSlider(); // Loop again
    }, 100);
  });
}

moveSlider();
 