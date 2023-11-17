import { getInputDirection } from "./input.js";
import { getMobileControlsInput} from "./mobileControl.js"

export const SNAKE_SPEED = 7;
const snakeBody = [{ x: 11, y: 11 }];
let newSegments =  0;
let score = 0;
let highScore = getHighScore();

export function update() {
    addSegments()
    const inputDirection = window.innerWidth > 600 ? getInputDirection() : getMobileControlsInput();
  for (let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] };
  }
  snakeBody[0].x += inputDirection.x;
  snakeBody[0].y += inputDirection.y;

  updateScore(0);
}

export function draw(gameBoard) {
  snakeBody.forEach((segment , index) => {
    const snakeElement = document.createElement("div");
    snakeElement.style.gridRowStart = segment.y;
    snakeElement.style.gridColumnStart = segment.x;


    if(index==0){
        snakeElement.classList.add("snake-head")
    }
    else{
        snakeElement.classList.add("snake");
    }
    
    gameBoard.appendChild(snakeElement);
  });


}

export function expandSnake(amount){
      newSegments += amount
      updateScore(1);
      displayScore(Number(newSegments));
}

export function onSnake(position , {ignoreHead = false}={}){

     return snakeBody.some((segment, index) => {
        if(ignoreHead && index === 0) return false
        return equalPositions(segment , position )
     })
}

export function getSnakeHead(){
    return snakeBody[0]
}

export function snakeIntersection(){
    return onSnake(snakeBody[0] , {ignoreHead: true} )
}


function equalPositions(pos1 , pos2){
    return pos1.x === pos2.x && pos1.y === pos2.y
}


function addSegments(){

    for(let i = 0 ; i < newSegments ; i++){
        snakeBody.push({...snakeBody[snakeBody.length-1]})
    }

    newSegments = 0
}

function updateScore(points){
    score += points;
    const scoreElement = document.getElementById("score");
    const highScoreElement = document.getElementById("displayed-high-score");

    if (scoreElement && highScoreElement) {
        scoreElement.textContent = "Score: " + score;

        if (score > highScore) {
            highScore = score;
            setHighScore(highScore);
        }

        highScoreElement.textContent = highScore;
    }

    return score;
}


export function displayScore(){
    const scoreElement = document.getElementById("score")
     const highScoreElement = document.getElementById("high-score")
    if(scoreElement && highScoreElement){
        scoreElement.textContent  = "Score: " + score; 

        if(score > highScore){
            highScore = score
            setHighScore(highScore)
        }

        highScoreElement.textContent = `High Score: ${highScore}`
    }
   return score
}


export function getHighScore(){
     return localStorage.getItem("highScore") || 0;
}

function setHighScore(score){
      localStorage.setItem("highScore" , score)
}