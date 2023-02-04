// const score1El = document.getElementById("score--1");
// const score0El = document.querySelector('#score--0');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1')
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');



// let scores, currentScore, activePlayer, winnerEl;

// const init = function(){
//     scores = [0,0];
//     currentScore = 0;
//     activePlayer = 0;
//     winnerEl = true;

//     score1El.textContent = 0;
//     score0El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;

//     diceEl.classList.add('hidden');
//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     current0El.classList.add('player--active');
//     current1El.classList.remove('player--active')
// }
// init();



// const switchPlayer = function () {
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
// }

// btnRoll.addEventListener('click', function(){
//     if(winnerEl) {
//     let dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`
//     if(dice !== 1){
//         currentScore += dice;
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore

//     }else{
//         switchPlayer()
//     }
// }
    
// });


// btnHold.addEventListener('click', function(){
//     if(winnerEl) {
//     scores[activePlayer] += currentScore;
//     document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

//     if(scores[activePlayer] >= 100){
//        winnerEl = false;
//        document.querySelector(`#name--${activePlayer}`).textContent = "winner"
//        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//        document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
//        diceEl.classList.add('hidden')
//     }else{
//         switchPlayer();
//     }
// }    
// })


// btnNew.addEventListener('click', init);



// repeat code

// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const diceEl = document.querySelector('.dice');
// const btnNew = document.querySelector('.btn--new');
// const btnRoll = document.querySelector('.btn--roll');
// const btnHold = document.querySelector('.btn--hold');
// const current0El = document.querySelector('#current--0');
// const current1El = document.querySelector('#current--1');
// const player0El = document.querySelector('.player--0');
// const player1El = document.querySelector('.player--1');


// let currentScore, activePlayer, scores, winnerEl;

// const init = function () {
//     currentScore = 0;
//     activePlayer = 0;
//     scores = [0,0];
//     winnerEl = true;

//     score0El.textContent = 0;
//     score1El.textContent = 0;
//     current0El.textContent = 0;
//     current1El.textContent = 0;

//     player0El.classList.remove('player--winner');
//     player1El.classList.remove('player--winner');
//     current0El.classList.add('player--active');
//     current1El.classList.remove('player--active');
//     diceEl.classList.add('hidden');
// }
// init()


// const switchPlayer = function(){
//    document.getElementById(`current--${activePlayer}`).textContent = 0;
//    currentScore = 0;
//    activePlayer = activePlayer === 0 ? 1 : 0;
//    player0El.classList.toggle('player--active');
//    player1El.classList.toggle('player--active');
// }

// btnRoll.addEventListener('click', function(){
//     if(winnerEl){
//     let dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if(dice !== 1){
//         currentScore += dice;
//         document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
//     }else{
//         switchPlayer();
//     }
// }

// })

// btnHold.addEventListener('click', function(){
//     if(winnerEl){
//       scores[activePlayer] += currentScore;
//       document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
//       currentScore = 0;
//       document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

//       if(scores[activePlayer] >= 100){
//         winnerEl = false;
//         document.querySelector(`#name--${activePlayer}`).textContent = 'Winner';
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//         diceEl.classList.add('hidden');
//         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
//       }else{
//         switchPlayer()
//       }
//     }

// })


// btnNew.addEventListener('click', init)



// repeat 3
// const score0El = document.querySelector('#score--0');
// const score1El = document.querySelector('#score--1');
// const current0El = document.querySelector('#current--0');
// const current1El = document.querySelector('#current--1');
// const diceEl = document.querySelector('.dice');
// const btnRoll = document.querySelector('.btn--roll');
// const btnNew = document.querySelector('.btn--new');
// const btnHold = document.querySelector('.btn--hold');
// const player0El = document.querySelector('.player--0')
// const player1El = document.querySelector('.player--1')

// score0El.textContent = 0;
// score1El.textContent = 0;
// diceEl.classList.add('hidden');

// let activePlayer, scores, currentScore, winnerEl;
// const init = function(){
    // activePlayer = 0;
    // scores = [0,0];
    // currentScore = 0;
    // winnerEl = true;

    // score0El.textContent = 0;
    // score1El.textContent = 0;

    // diceEl.classList.add('hidden');
    // player0El.classList.remove('player--winner');
    // player1El.classList.remove('player--winner');
    // player0El.classList.add('player--active');
   

// }
// init()

// const switchPlayer = function(){
//     document.getElementById(`current--${activePlayer}`).textContent = 0;
//     currentScore = 0;
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     player0El.classList.toggle('player--active');
//     player1El.classList.toggle('player--active');
//  }

// btnRoll.addEventListener('click', function(){
//     if(winnerEl){
//     let dice = Math.trunc(Math.random() * 6) + 1;
//     diceEl.classList.remove('hidden');
//     diceEl.src = `dice-${dice}.png`;

//     if(dice !== 1){
//         currentScore += dice;
//         document.querySelector(`#current--${activePlayer}`).textContent = currentScore
        
//   }else{
//     switchPlayer();
//   }
// }
   
// });

// btnHold.addEventListener('click', function(){
//     if(winnerEl){
//     scores[activePlayer] += currentScore;
//     document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
//     currentScore = 0;
//     document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    
//     if(scores[activePlayer] >= 10){
//         document.querySelector(`#name--${activePlayer}`).textContent = 'winner';
//         document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
//         diceEl.classList.add('hidden');
//         document.querySelector(`.player--${activePlayer}`).classList.remove('player--active')
//         winnerEl = false
//     }else{
//         switchPlayer()
//     }
// }
// })

// btnNew.addEventListener('click', init)



// repeat 4



const score0El = document.querySelector('#score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const btnRoll = document.querySelector('.btn--roll');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');




let currentScore , winnerEl, activePlayer, scores;

const init = function() {
    currentScore = 0;
    winnerEl = true;
    activePlayer = 0;
    scores = [0,0];

    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;

    diceEl.classList.add('hidden');
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    current0El.classList.add('player--active'); 
    current1El.classList.remove('player--active');
    
};
init();

const switchPlayer = function(){
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}


btnRoll.addEventListener('click', function(){
    if(winnerEl){
    let dice = Math.trunc(Math.random() *6 ) + 1;
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove('hidden');

    if(dice !== 1){
        currentScore += dice;
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    }else{
        switchPlayer();
    }
}
    
})

btnHold.addEventListener('click', function(){
    if(winnerEl){
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];
    currentScore = 0;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
    if(scores[activePlayer] >= 10) {
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
        winnerEl = false;
    }else{
        switchPlayer()
    }
}
});

btnNew.addEventListener('click', init )
