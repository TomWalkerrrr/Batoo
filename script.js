let startY = 0;
let pulling = false;

const squaredown = document.querySelector(".viewmoney");

squaredown.addEventListener('touchstart', (e) => {
    startY = e.touches[0].clientY;
    pulling = false;
});

squaredown.addEventListener('touchmove', (e) => {
    const currentY = e.touches[0].clientY;
    if (currentY - startY > 50) {
        pulling = true;
        squaredown.style.backgroundColor="red";
    }
})

squaredown.addEventListener('touchend', () => {
    if(pulling) {
        console.log("Pulling");
        squaredown.style.backgroundColor="white";
    }
})