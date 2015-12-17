///**
// * Created by alchemy on 12/15/15.
// */

const Target = require('./target');

function Snake(canvas, direction) {
  this.canvas = canvas;
  this.body = [{x: 10, y: 10 }];
  this.direction = direction;
  this.width = canvas.width;
  this.height = canvas.height;
  this.context = canvas.getContext('2d');
  this.cellSize = 10;
  this.snakeHead = {x: this.body[0].x, y: this.body[0].y };
}

Snake.prototype.turn = function(key) {
  console.log(key, this.direction);
  switch(key){
    case 37:
      this.direction = 'left';
      break;
    case 38:
      this.direction = 'up';
      break;
    case 39:
      this.direction = 'right';
      break;
    case 40:
      this.direction = 'down';
      break;
  }
};

Snake.prototype.draw = function() {
  for(var i = 0; i < this.body.length; i++) {
    var c = this.body[i];
    this.drawCell(c.x, c.y);
  }
  return this;
};

Snake.prototype.move = function() {
  console.log(this.inBounds());
  if (this.inBounds()) {
    if(this.direction == 'right') {
      this.snakeHead.x++;
    } else if(this.direction == 'left') {
      this.snakeHead.x--;
    } else if(this.direction == "up") {
      this.snakeHead.y--;
    } else if(this.direction == 'down') {
      this.snakeHead.y++;
    }
  }
  this.drawCell(this.snakeHead.x, this.snakeHead.y);
  return this;
};

Snake.prototype.inBounds = function() {
  return this.snakeHead.x >= 0 && this.snakeHead.x <= (this.width - this.cellSize) && this.snakeHead.y >= 0 && this.snakeHead.y <= (this.height - this.cellSize);
}

Snake.prototype.collisionCheck = function() {
  // this.emit('game-over')

  for(var i = 1; i < this.body.length; i++)
    {
      if(this.body[i].x == this.snakeHead.x && this.body[i].y == this.snakeHead.y)
        return true;
    }
    return false;
};

Snake.prototype.collisionTarget = function() {
  var tail;
  var target = new Target(this.canvas);

  if(this.snakeHead.x == target.x && this.snakeHead.y == target.y) {
    this.body.unshift({ x: this.snakeHead.x, y: this.snakeHead.y });
    new Target(this.canvas);

  } else {
    var tail = this.body.pop();
    //tail.x = this.snakeHead.x;
    //tail.y = this.snakeHead.y;
  }

  for(var i = 0; i < this.body.length; i++) {
    var cell = this.body[i];

    this.drawCell(cell.x, cell.y);
  }
};

Snake.prototype.drawCell = function(x, y) {
  this.context.fillStyle = 'blue';
  this.context.fillRect(x, y, this.cellSize, this.cellSize);
};

module.exports = Snake;
