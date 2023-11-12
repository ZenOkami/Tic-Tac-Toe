// Select HTML Elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players');

// Start Window
window.onload = () => {
    for (let i = 0; i < allBox.length; i++) {
        allBox[i].addEventListener("click", () => {
            clickedBox(allBox[i]);
        }, false);
    }
    
    selectXBtn.addEventListener('click', () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
    });
    selectOBtn.addEventListener('click', () => {
        selectBox.classList.add("hide");
        playBoard.classList.add("show");
        players.setAttribute('class', 'players active player');
    });
};

// Player Icon and Sign
let playerXIcon = 'fas fa-times';
let playerOIcon = 'far fa-circle'
let playerSign = 'X';
let runBot = true;

// Clicked Box Function
function clickedBox(element) {
    if (players.classList.contains("player")) {
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add('active');
        element.setAttribute("id", playerSign)
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add('active');
        element.setAttribute("id", playerSign)
    }
    playBoard.computedStyleMap.pointerEvents = "none";
    element.style.pointerEvents = "none";
};