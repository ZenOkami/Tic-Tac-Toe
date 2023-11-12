// Select HTML Elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board");


// Start Window
function initGame() {
    console.log('Button clicked');
    selectBox.classList.add("hide");
    playBoard.classList.add("show");
}

window.onload = () => {
    console.log("window loaded");
    selectXBtn.addEventListener('click', initGame);
    selectOBtn.addEventListener('click', initGame);
};