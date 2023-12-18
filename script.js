
const score1 = document.getElementById("player1");
const score2 = document.getElementById("player2");

const player1Score = document.getElementById("player1score");
const player2Score = document.getElementById("player2score");

const btnRoll1 = document.getElementById("btnRoll1");
const btnRoll2 = document.getElementById("btnRoll2");

let player1Turn = true;

let sum1 = 0;
btnRoll1.addEventListener("click", function (){
    let diceRoll1 = document.querySelector(".diceroll")
    const diceroll1 = Math.floor(Math.random() * 6) + 1;
    diceRoll1.src = `./Images/Dice-${diceroll1}.png`;
    
       sum1 = sum1 + diceroll1;
       player1Score.textContent = sum1;
    
       btnRoll1.disabled = true;
       btnRoll2.disabled = false;

    if(sum1 >= 30){
        announceWinner("Player 1");
        return;
    }

    })

let sum2 = 0;
btnRoll2.addEventListener("click", function (){
    let diceRoll2 = document.querySelector(".diceroll")
    
    const diceroll2 = Math.floor(Math.random() * 6) + 1;
    diceRoll2.src = `./Images/Dice-${diceroll2}.png`;
    
       sum2 = sum2 + diceroll2;
       player2Score.textContent = sum2;
       
       btnRoll1.disabled = false;
       btnRoll2.disabled = true;

    if(sum2 >= 30){
        announceWinner("Player 2");
        return;
    }
    })

function announceWinner(winner){
    alert(`${winner} wins the Game!🏆`);
    btnRoll1.disabled = true;
    btnRoll2.disabled = true;
}

const resetAll = document.getElementById("resetbtn") 
resetAll.addEventListener("click", function(){
    player1Score.textContent = 0;
    player2Score.textContent = 0;
    sum1 = 0;
    sum2 = 0;
    player1Turn = true;
    btnRoll1.disabled = false;
    btnRoll2.disabled = true;
})  