let gameContainer = document.querySelector('.wholegame');
let boxes = document.querySelectorAll('.box');
let msgContainer = document.querySelector('.message-container');
let winnerMsg = document.querySelector('#winner-message');
let resetGame = document.querySelector('#resetgame');
let playGame = document.querySelector('#play');

let playerTurn = true; // first player O and second player X

const winCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        if (playerTurn) {
            box.textContent = 'O';
            playerTurn = false;
        }
        else {
            box.textContent = 'X';
            playerTurn = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

let checkWinner = () => {
    for (let pattern of winCondition) {

        let pos1 = boxes[pattern[0]].textContent;
        let pos2 = boxes[pattern[1]].textContent;
        let pos3 = boxes[pattern[2]].textContent;

        if (pos1 != "" && pos2 != "" && pos3 != "") {
            if (pos1 === pos2 && pos2 === pos3) {
                disWinner(pos1);
            }
        }
    }
}

let disWinner = (win) => {
    winnerMsg.textContent = `${win} win the match`;
    msgContainer.classList.remove('hide');
    gameContainer.classList.add('hide');
    boxDisable();
}

let boxDisable = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

let newGame = ()=>
    {
        playerTurn = true;
        msgContainer.classList.add('hide');
        gameContainer.classList.remove('hide');

        enBox();
    }

let enBox = ()=>
    {
        boxes.forEach((box)=>
        {
            box.disabled = false;
            box.textContent = "";
        })
    }

playGame.addEventListener('click',newGame);
resetGame.addEventListener('click',newGame);