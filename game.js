import {update as updateSnake , draw as drawSnake , SNAKE_SPEED} from './snake.js' 
import { update as updateFood , draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'
import { getSnakeHead } from './snake.js';
import { snakeIntersection } from './snake.js';
import {displayScore} from './snake.js';
import { getHighScore } from './snake.js';

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime){

  if(gameOver){

    const finalScore = Number(displayScore());
    const finalHighScore = Number(getHighScore())
    if(confirm(`Game Over.\nYour score is: ${finalScore}\nHigh Score is: ${finalHighScore}\nPress OK to restart.` ))
      {
        window.location.reload()
      }
      return
  }

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime)/1000

  if(secondsSinceLastRender < 1/SNAKE_SPEED) return

  lastRenderTime = currentTime;

  update()
  draw()
}


window.requestAnimationFrame(main);

function update(){
  updateSnake()
  updateFood()
  checkDeath()
}

function draw(){
  gameBoard.innerHTML = ''
  drawSnake(gameBoard)
  drawFood(gameBoard)

}

function checkDeath(){
   gameOver =  outsideGrid(getSnakeHead()) || snakeIntersection() 

 }

