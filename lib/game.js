/**
 * Created by alchemy on 12/17/15.
 */
const Snake = require('./snake');
const Target = require('./target');


function Game(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext('2d');
  this.snake = new Snake(canvas, 'right');
  this.target = new Target(this.canvas);
}

Game.prototype.start = function() {
  this.snake.move();
  this.target.draw();
};

Game.prototype.play = function() {
  this.snake.collisionTarget();
};

Game.prototype.gameOver = function() {
  this.snake.collisionCheck();
  this.snake.inBounds();
};



module.exports = Game;
