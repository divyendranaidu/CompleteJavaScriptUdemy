'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '👑 Correct Number';
document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 13;
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function() {
    //console.log(document.querySelector('.guess').value);
    const guess = Number(document.querySelector('.guess').value);
    if(!guess) {
        document.querySelector('.message').textContent = 'No number';
    } else if(guess === secretNumber) {
        document.querySelector('.message').textContent = '👑 Correct Number';
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.check').disabled = true;
        if(score > Number(document.querySelector('.highscore').textContent)) {
            document.querySelector('.highscore').textContent = score;
        }        

    } else if(guess > secretNumber) {
        
            document.querySelector('.message').textContent = '👆 Too High';
            score--;
            document.querySelector('.score').textContent = score;        

    } else if(guess < secretNumber) {
        document.querySelector('.message').textContent = '👇 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
    }
    if(score === 0) {
        document.querySelector('.check').disabled = true;
        document.querySelector('.message').textContent = '🤯 You lost!'
    } 


});

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.number').textContent = secretNumber;
    score = 20;
    document.querySelector('.score').textContent = score;   
    document.querySelector('.check').disabled = false;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';

});