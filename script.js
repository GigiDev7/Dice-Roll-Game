var btnRoll = document.querySelector('.btn-roll');
var btnNew = document.querySelector('.btn-new');
var btnHold = document.querySelector('.btn-hold');
var dice = document.querySelector('.dice');
var input = document.querySelector('.final-score');
var award = document.querySelector('.award')
var closeAward = document.querySelector('.award-close')

var score, currentScore, activePlayer, activePlayerPanel;


var init = function(){
    score = [0,0];
    currentScore = 0;
    activePlayer = 0;
    activePlayerPanel = document.querySelector('.player-'+ activePlayer +'-panel')
    input.value = ''

    award.style.display = 'none'
    dice.style.display = 'none'

    document.querySelector('.player-0-panel .player-name').textContent = 'Player 1'
    document.querySelector('.player-1-panel .player-name').textContent = 'Player 2'
    document.querySelector('.player-0-panel .player-score').textContent = 0
    document.querySelector('.player-1-panel .player-score').textContent = 0
    document.querySelector('.player-0-panel .player-current-score').textContent = 0
    document.querySelector('.player-1-panel .player-current-score').textContent = 0
    document.querySelector('.player-0-panel').className = 'player-0-panel active'
    document.querySelector('.player-1-panel').className = 'player-1-panel'

};

init();

function next(){
    currentScore = 0;
    activePlayerPanel.querySelector('.player-current-score').textContent = 0;
    activePlayerPanel.classList.remove('active')
    activePlayer = activePlayer == 0 ? 1 : 0
    activePlayerPanel = document.querySelector('.player-'+ activePlayer +'-panel')
    activePlayerPanel.querySelector('.player-current-score').textContent = currentScore
    activePlayerPanel.classList.add('active')
    dice.style.display = 'none';
};

 
btnRoll.addEventListener('click',function(){

    var randomNumber = Math.floor(Math.random() * 6 + 1);
    currentScore += randomNumber
    dice.src = "img/dice-" + randomNumber + ".png" ;
    dice.style.display = 'block';

    if(input.value == false){
        alert('Please write winner score')
        init()
        randomNumber = 0
    }

    
    if (randomNumber !== 1) {
        activePlayerPanel.querySelector('.player-current-score').textContent = currentScore
    } else {
       next()
    };

});


btnHold.addEventListener('click',function(){
    score[activePlayer] += currentScore
    activePlayerPanel.querySelector('.player-score').textContent = score[activePlayer]
    activePlayerPanel.querySelector('.player-current-score').textContent = 0;

    if(input.value == false){
        alert('Please write winner score')
        init()
    }else if(score[activePlayer] >= input.value){
        activePlayerPanel.classList.remove('active')
        activePlayerPanel.classList.add('winner')
        award.style.display = 'block'
        award.querySelector('p').textContent = activePlayerPanel.querySelector('.player-name').textContent + ' WON!'
        activePlayerPanel.querySelector('.player-name').textContent = 'WINNER'
        dice.style.display = 'none'
        input.value = ''
    }else{ 
        next()
    }


});



btnNew.addEventListener('click',function(){
    init()
});
     
closeAward.onclick = function(){
    award.style.display = 'none'
};

    


    