//Take the access ofa all required elements
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#resetbtn");
let newBtn = document.querySelector("#newbtn");
let msgContainer = document.querySelector(".msg-container");
let Msg = document.querySelector("#msg");
let turnO = true;//PlayerX , PlayerO
let count = 0;
//Wining condition array
const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
//To take input from user whose turn is first and after that alternate the turn
boxes.forEach((box) => {
    box.addEventListener("click",() => {
      if(turnO){
        box.innerText = "O";
        box.style.color = "#ef0439"
        turnO = false;
      }else{
        box.innerText = "X";
        box.style.color = "blue"
        turnO = true;
      }
      box.disabled = true;
//When game is draw 
      count ++;
      let isWinner = checkWinner();
      if(count === 9 && !isWinner){
        gameOver();
      }

    });
});
//To reset the game 
const resetBtn = () =>{
    turnO = true; 
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
   
}
//After reseting the game Enable all the boxes
const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
//To print the winner on the screen
const showWinner = (winner) => {
      Msg.innerText = `Congratulations , Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      disableBoxes();
}
//after printing the winner disable the all boxes
const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}
//When game has no any winner 
const gameOver = () => {
    Msg.innerText = `Match Draw! Try again`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
//Conditions that decide who is winner
const checkWinner = () =>{
    for(let patterns of winPatterns){
        let posiVal1 = boxes[patterns[0]].innerText;
        let posiVal2 = boxes[patterns[1]].innerText;
        let posiVal3 = boxes[patterns[2]].innerText;
        if(posiVal1 != "" && posiVal2 != "" && posiVal3 != ""){
            if(posiVal1 === posiVal2 && posiVal2 === posiVal3){
                showWinner(posiVal1);
            }
        }
    }
}
//To invoke the reset button
reset.addEventListener("click",resetBtn);
//To invoke the New game button
newBtn.addEventListener("click",resetBtn);
