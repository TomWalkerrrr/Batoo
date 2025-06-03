const squaredown = document.querySelector(".viewmoney");

squaredown.addEventListener('touchstart', (e) => {
    squaredown.style.backgroundColor = "red";
});

squaredown.addEventListener('touchend', () => {
    squaredown.style.backgroundColor = "white";
});
