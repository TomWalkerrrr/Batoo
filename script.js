const squaredown = document.querySelector(".viewmoney");
const bubble = document.querySelector(".bubble");

let startY = 0;
let isDragging = false;
const maxTranslate = 50;
const dragThreshold = 30;

// Applique la couleur foncée
function applyDraggingStyle(deltaY) {
  if (deltaY > dragThreshold) {
    squaredown.style.backgroundColor = "rgb(13, 116, 139)"; // Bleu marine très foncé
    bubble.style.opacity = 1;
  } else {
    squaredown.style.backgroundColor = "rgb(158, 158, 158)";
    bubble.style.opacity = 0;
  }
}

// TOUCH EVENTS
squaredown.addEventListener('touchstart', (e) => {
  startY = e.touches[0].clientY;
  isDragging = true;
  squaredown.style.transition = "none";
});

squaredown.addEventListener('touchmove', (e) => {
  if (!isDragging) return;
  const currentY = e.touches[0].clientY;
  let deltaY = currentY - startY;
  if (deltaY < 0) deltaY = 0;
  if (deltaY > maxTranslate) deltaY = maxTranslate;
  squaredown.style.transform = `translateY(${deltaY}px)`;
  applyDraggingStyle(deltaY);
});

squaredown.addEventListener('touchend', () => {
  isDragging = false;
  squaredown.style.transition = "transform 0.3s ease, background-color 0.3s ease";
  squaredown.style.transform = "translateY(0)";
  squaredown.style.backgroundColor = "rgb(158, 158, 158)";
  bubble.style.opacity = 0;
});

// MOUSE EVENTS
squaredown.addEventListener('mousedown', (e) => {
  startY = e.clientY;
  isDragging = true;
  squaredown.style.transition = "none";
});

window.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  const currentY = e.clientY;
  let deltaY = currentY - startY;
  if (deltaY < 0) deltaY = 0;
  if (deltaY > maxTranslate) deltaY = maxTranslate;
  squaredown.style.transform = `translateY(${deltaY}px)`;
  applyDraggingStyle(deltaY);
});

window.addEventListener('mouseup', () => {
  if (isDragging) {
    isDragging = false;
    squaredown.style.transition = "transform 0.3s ease, background-color 0.3s ease";
    squaredown.style.transform = "translateY(0)";
    squaredown.style.backgroundColor = "rgb(158, 158, 158)";
    bubble.style.opacity = 0;
  }
});