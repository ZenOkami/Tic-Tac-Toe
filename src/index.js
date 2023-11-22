// Select HTML Elements
const selectBox = document.querySelector(".select-box"),
selectXBtn = selectBox.querySelector(".playerX"),
selectOBtn = selectBox.querySelector(".playerO"),
playBoard = document.querySelector(".play-board"),
allBox = document.querySelectorAll('section span'),
players = document.querySelector('.players'),
resultBox = document.querySelector('.result-box'),
wonText = document.querySelector('.won-text'),
replayBtn = resultBox.querySelector('button');

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
        playerSign = "O";
        element.innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.add('active');
        playerSign = "O";
        element.setAttribute("id", playerSign)
    } else {
        element.innerHTML = `<i class="${playerXIcon}"></i>`;
        players.classList.add('active');
        element.setAttribute("id", playerSign)
    }
    selectWinner()
    playBoard.computedStyleMap.pointerEvents = "none";
    element.style.pointerEvents = "none";
    let randomDelayTime = ((Math.random() * 1000) + 200).toFixed();
    setTimeout(() => {
        bot(runBot);
    }, randomDelayTime)
};

// Bot Function

function bot(runBot) {
    if (runBot) {
        playerSign = "O";
        let array = [];
        for (let i = 0; i < allBox.length; i++) {
            if (allBox[i].childElementCount === 0) {
                array.push(i);
            };
        }
        let randomBox = array[Math.floor(Math.random() * array.length)];
        if (array.length > 0) {
            if (players.classList.contains("player")) {
                allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
                players.classList.remove('active');
                playerSign = "X";
                allBox[randomBox].setAttribute("id", playerSign);
            } else {
                allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
                players.classList.remove('active');
                allBox[randomBox].setAttribute("id", playerSign);
            }
            selectWinner();
        }
        allBox[randomBox].style.pointerEvents = "none";
        playBoard.style.pointerEvents = "auto";
        playerSign = "X";
    }
}

// Winner 
function getClass(idname) {
    return document.querySelector('.box' + idname).id;
}

// Check for 3 cells
function checkClass(val1, val2, val3, sign) {
    if (getClass(val1) === sign && getClass(val2) === sign && getClass(val3) === sign) {
        return true;
    }
}

// Select Winner Function
function selectWinner() {
    if (checkClass(1, 2, 3, playerSign) || checkClass(4, 5, 6, playerSign) || checkClass(7, 8, 9, playerSign) || checkClass(1, 4, 7, playerSign) || checkClass(2, 5, 8, playerSign) || checkClass(3, 6, 9, playerSign) || checkClass(1, 5, 9, playerSign) || checkClass(3, 5, 7, playerSign)) {
        runBot = false;
        bot(runBot);
        setTimeout(() => {
            playBoard.classList.remove('show');
            resultBox.classList.add('show');
        }, 700);
        wonText.innerHTML = `Player<p>${playerSign}</p> Wins!`;
    } else {
        if (getClass(1) !== "" && getClass(2) !== "" && getClass(3) !== "" && getClass(4) !== "" && getClass(5) !== "" && getClass(6) !== "" && getClass(7) !== "" && getClass(8) !== "" && getClass(9) !== "") {
            runBot = false;
            bot(runBot);
            setTimeout(() => {
                playBoard.classList.remove('show');
                resultBox.classList.add('show');
            }, 700);

            wonText.textContent = `It's a Tie!`;
        }
    }
}

// Replay 
replayBtn.onclick = () => {
    window.location.reload();
}

// Completed Project