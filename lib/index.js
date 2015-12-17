const Snake = require('./snake');
const Game = require('./game');
const Target = require('./target');

// init the game
  // find canvas
  // create snake
  // add event listeners

// loop to animate and run game
  // draw the snake

// end game
  // end the animation loop
  // restart game
    // create a new snake

// Define Canvas Components

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var game = new Game(canvas);

window.addEventListener('keydown', function(e) {
  var key = e.keyCode;
   game.snake.turn(key);
});

function init() {
  requestAnimationFrame(function loop() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    game.start();
    game.play();
    game.gameOver();
    requestAnimationFrame(loop);
  })
}

init();
