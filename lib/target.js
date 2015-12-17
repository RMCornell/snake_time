///**
// * Created by alchemy on 12/16/15.
// */
//

function Target(canvas) {
  this.width = canvas.width;
  this.height = canvas.height;
  this.cellSize = 10;
  this.x = ~~(Math.random() * (this.width - this.cellSize) / this.cellSize);
  this.y = ~~(Math.random() * (this.height - this.cellSize) / this.cellSize);
  this.context = canvas.getContext('2d');
}

Target.prototype.draw = function() {
  this.context.fillStyle = 'blue';
  this.context.fillRect(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize);

};

module.exports = Target;
