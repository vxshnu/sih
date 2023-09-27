

const panorama = document.querySelector('.panorama');
let isDragging = false;
let previousX = 0;

panorama.addEventListener('mousedown', (e) => {
  isDragging = true;
  previousX = e.clientX;
  panorama.style.transition = 'none'; // Disable transition for smooth scrolling
});

panorama.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - previousX;
  panorama.style.transform = `translateX(${deltaX}px)`;
  previousX = e.clientX;
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  panorama.style.transition = 'transform 0.5s ease'; // Restore transition
});

// Scroll handling
panorama.addEventListener('wheel', (e) => {
  const scrollSpeed = 5; // Adjust scroll speed as needed
  panorama.scrollLeft += e.deltaY * scrollSpeed;
  e.preventDefault(); // Prevent the default scroll behavior
});