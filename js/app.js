let btn1 = document.querySelector(".btn__one")
let btn2 = document.querySelector(".btn__two")
let score1 = document.querySelector(".Score__one")
let score2 = document.querySelector(".Score__two")
let random1 = document.querySelector(".random__one")
let random2 = document.querySelector(".random__two")
let playerOneBg = document.querySelector(".player__one")
let playerTwoBg = document.querySelector(".player__two")
let player1 = document.querySelector(".player__name1")
let player2 = document.querySelector(".player__name2")

let name1 = player1.innerHTML = prompt("Ismingiz yoki nikingizni kiriting (Player 1):")
let name2 = player2.innerHTML = prompt("Ismingizni yoki nikingizni kiriting (Player 2):")

let isPlayerOneTurn = true
let isPlayerTwoTurn = false


const maxScore = 100


function Winner(player) {
    alert(`${player} g'olib bo'ldi! O'yin tugadi.`);
    btn1.disabled = true;
    btn2.disabled = true;
    playerOneDiv.style.backgroundColor = "";
    playerTwoDiv.style.backgroundColor = "";
}

btn1.addEventListener("click", function () {
    if (isPlayerOneTurn) {
        let number1 = Math.floor(Math.random() * 10)
        random1.innerHTML = number1
        score1.innerHTML = +score1.innerHTML + number1
        if (+score1.innerHTML >= maxScore) {
            Winner(name1);
            return;
        }

        btn2.disabled = false
        btn1.disabled = true

        playerTwoBg.style.backgroundColor = "#0ead69"
        playerOneBg.style.backgroundColor = ""

        isPlayerOneTurn = false
        isPlayerTwoTurn = true
    }
});

btn2.addEventListener("click", function () {
    if (isPlayerTwoTurn) {
        let number2 = Math.floor(Math.random() * 10)
        random2.innerHTML = number2
        score2.innerHTML = +score2.innerHTML + number2
        if (+score2.innerHTML >= maxScore) {
            Winner(name2);
            return;
        }

        btn1.disabled = false
        btn2.disabled = true

        playerOneBg.style.backgroundColor = "#0ead69"
        playerTwoBg.style.backgroundColor = ""

        isPlayerOneTurn = true
        isPlayerTwoTurn = false
    }
});
