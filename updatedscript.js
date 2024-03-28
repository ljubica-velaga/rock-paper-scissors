const USER_WINS = 0;
const COMPUTER_WINS = 1;
const NOBODY_WINS = 2;

let playerScore = 0;
let computerScore = 0;

let playerResult = document.getElementById('playerScore');
let computerResult = document.getElementById('computerScore');

let rockBtn = document.getElementById('rock');
let paperBtn = document.getElementById('paper');
let scissorsBtn = document.getElementById('scissors');
let playerChoice = document.getElementById('playerChoice');

let btn = document.getElementById("playBtn");

let computerChoiceText = document.getElementById("computerChoice");
let roundOutputText = document.getElementById("roundOutput");
let winnerText = document.getElementById("winner");

playerResult.innerText = playerScore;
computerResult.innerText = computerScore;

function computerWeaponSelection() {
    let options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * options.length);
    computerChoiceText.innerText = "Computer\'s choice is: " + options[randomIndex];
    return options[randomIndex];
}

let userChoice = '';

rockBtn.addEventListener('click', function () {
    changeUserChoice('Rock');
});
paperBtn.addEventListener('click', function () {
    changeUserChoice('Paper');
});
scissorsBtn.addEventListener('click', function () {
    changeUserChoice('Scissors');
});

function changeUserChoice(choice) {
    userChoice = choice;
    playerChoice.innerText = userChoice;
}

btn.onclick = game;

function game() {
    if (playerScore < 3 && computerScore < 3) {
        let result = battle();

        if (result === USER_WINS) {
            playerScore += 1;
            roundOutputText.innerText = 'You won this round!';
            playerResult.innerText = playerScore;
        } else if (result === COMPUTER_WINS) {
            computerScore += 1;
            roundOutputText.innerText = 'You lost this round!';
            computerResult.innerText = computerScore;
        } else if (result === NOBODY_WINS) {
            roundOutputText.innerText = 'Nobody wins! Play again!';
        }
    }
    if (playerScore === 3) {
        gameEnd('player');
    }
    if (computerScore === 3) {
        gameEnd('computer');
    }
}

function battle() {
    let result = NOBODY_WINS;

    playersWeapon = userChoice;
    if (userChoice === '') {
        alert('Please pick "Rock", "Paper" or "Scissors"!');
        console.log('Player\'s selection is empty');
    } else {
        computersWeapon = computerWeaponSelection();
    }

    if (computersWeapon.toLowerCase() === 'rock') {
        if (playersWeapon.toLowerCase() === 'rock') {
            result = NOBODY_WINS;
        } else if (playersWeapon.toLowerCase() === "paper") {
            result = USER_WINS;
        } else if (playersWeapon.toLowerCase() === "scissors") {
            result = COMPUTER_WINS;
        }
    }

    if (computersWeapon.toLowerCase() === 'paper') {
        if (playersWeapon.toLowerCase() === 'rock') {
            result = COMPUTER_WINS;
        } else if (playersWeapon.toLowerCase() === "paper") {
            result = NOBODY_WINS;
        } else if (playersWeapon.toLowerCase() === "scissors") {
            result = USER_WINS;
        }
    }

    if (computersWeapon.toLowerCase() === 'scissors') {
        if (playersWeapon.toLowerCase() === 'rock') {
            result = USER_WINS;
        } else if (playersWeapon.toLowerCase() === "paper") {
            result = COMPUTER_WINS;
        } else if (playersWeapon.toLowerCase() === "scissors") {
            result = NOBODY_WINS;
        }
    }

    return result;
}

function gameEnd(winner) {
    btn.disabled = true;
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;

    if (winner === 'player') {
        winnerText.innerText = 'Game is over! You won 3 rounds, you are winner of the game!';
    }
    if (winner === 'computer') {
        winnerText.innerText = 'Game is over! You lost 3 rounds, computer is winnerof the game!';
    }
}


