var NyanCatDancer = function(top, left, timeBetweenSteps, dancerDirection){
  CatDancer.call(this,top, left, timeBetweenSteps);


  this.$node = $('<span class="nyanCatDancer"></span>');
  this.setPosition(top,left);
  this.speed = 50;
  this.direction = dancerDirection || 'right';
  if (this.direction === 'left'){
    this.$node.css({transform: 'scaleX(-1)'});
  }
}

NyanCatDancer.prototype = Object.create(CatDancer.prototype);

NyanCatDancer.prototype.constructor = NyanCatDancer;

NyanCatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  if (this.moving) {
    this.slide();
  }
}
