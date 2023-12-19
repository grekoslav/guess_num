'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let hightScore = 0;
const displayGuessMessage = function (message) {
  document.querySelector('.guess-message').textContent = message;
};

document.querySelector('.check').addEventListener(
  'click',
  function () {
    let quessingNumber = Number(document.querySelector('.number-input').value);
    // no imput
    if (!quessingNumber) {
      displayGuessMessage('Введите число от 1-20');
      // Игрок угадал число
    } else if (quessingNumber === secretNumber) {
      displayGuessMessage('Верно!');
      document.querySelector('.h1').textContent = 'ВЫ ВЫИГРАЛИ!';
      document.querySelector('.h1').style.fontSize = '8rem';
      document.querySelector('.h1').style.color = '#FF4500';
      document.querySelector('body').style.backgroundColor = '#000';
      document.querySelector('.question').textContent = secretNumber;
      document.querySelector('.question').style.width = '40rem';
      document.querySelector('.question').style.fontSize = '8rem';
      if (score > hightScore) {
        hightScore = score;
        document.querySelector('.highscore').textContent = hightScore;
      }
    }
    // Если число больше или меньше
    else if (quessingNumber !== secretNumber) {
      if (score > 1) {
        document.querySelector('.guess-message').textContent =
          quessingNumber > secretNumber ? 'Много!' : 'Мало!';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        displayGuessMessage('Игра окончена!');
        document.querySelector('.h1').textContent = 'GAME OVER';
        document.querySelector('.h1').style.fontSize = '8rem';
        document.querySelector('.h1').style.color = '#FF4500';
        document.querySelector('body').style.backgroundColor = '#000';
        document.querySelector('.score').textContent = 0;
      }
    }
  },
  // reset

  document.querySelector('.again').addEventListener('click', function () {
    document.querySelector('body').style.backgroundColor = 'Indigo';
    document.querySelector('.question').textContent = '???';
    document.querySelector('.question').style.width = '25rem';
    document.querySelector('.question').style.fontSize = '4rem';
    displayGuessMessage('Начни угадывать!');
    score = 10;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number-input').value = '';
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.h1').textContent = 'Отгадай число от 1-10';
    document.querySelector('.h1').style.fontSize = '3rem';
    document.querySelector('.h1').style.color = 'Lime';
  })
);
