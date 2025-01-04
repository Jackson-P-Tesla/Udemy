'use strict';

let textMessage = document.querySelector('.message');

const checkButton = document.querySelector('.check');

let scoreNumber = document.querySelector('.score');
let overallNumber = document.querySelector('.number');
let highScore = document.querySelector('.highscore');

const secretNumber = Math.trunc(Math.random() * 20);

checkButton.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //No input or not a number
  if (!guess) {
    textMessage.textContent = '⛔️ No Number!';
    //Guess too high
  } else if (guess > secretNumber) {
    if (scoreNumber.textContent === '0') {
      textMessage.textContent = '💥 You Lost the Game!';
    } else {
      textMessage.textContent = '📈 Too High!';
      scoreNumber.textContent--;
    }
    //Guess too low
  } else if (guess < secretNumber) {
    if (scoreNumber.textContent === '0') {
      textMessage.textContent = '💥 You Lost the Game!';
    } else {
      textMessage.textContent = '📉 Too Low!';
      scoreNumber.textContent--;
    }
    //When Player Wins
  } else if (guess === secretNumber) {
    textMessage.textContent = '🎉 Correct Number!';
    highScore.textContent = scoreNumber.textContent;
    document.querySelector('body').style.backgroundColor = '#60b347';
    overallNumber.style.width = '30rem';
    overallNumber.textContent = secretNumber;
  }
});

const againButton =

// console.log(textMessage);
// console.log(guess);
