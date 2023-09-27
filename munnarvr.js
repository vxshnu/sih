const videoContainer = document.getElementById('video-container');
const video = document.getElementById('360-video');

let isDragging = false;
let startPositionX = 0;
let currentTranslateX = 0;

videoContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startPositionX = e.clientX;
  currentTranslateX = video.style.transform
    ? parseInt(video.style.transform.split('translateX(')[1], 10)
    : 0;
  video.style.transition = 'none';
  video.style.cursor = 'grabbing';
});

videoContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const deltaX = e.clientX - startPositionX;
  video.style.transform = `translateX(${currentTranslateX + deltaX}px)`;
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    video.style.transition = 'transform 0.5s ease';
    video.style.cursor = 'grab';
  }
});
