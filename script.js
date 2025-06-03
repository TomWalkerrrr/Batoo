let startY = 0;
let pulling = false;

window.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    pulling = false;
});

window.addEventListener('touchmove' (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 50) {
        pulling = true;
    }
})

window.addEventListener('touchend', () => {
    if(pulling) {
        console.log("Pulling");
    }
})