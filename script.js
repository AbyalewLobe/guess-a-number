'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('❌ No Number');
    //when the player win
  } else if (guess == secretnumber) {
    displayMessage('✔ Correct Number');
    document.querySelector('body').style.backgroundColor = '#001F3F';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretnumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when the guess high
  } else if (guess !== secretnumber) {
    if (score > 1) {
      displayMessage(guess > secretnumber ? 'Too High ' : 'Too Low ');
      // guess > secretnumber ? 'Too High ' : 'Too Low ';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Loss The Game😌');
    }
  }
});

// To play again

document.querySelector('.again').addEventListener('click', function () {
  //   window.location.reload();
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').value = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
