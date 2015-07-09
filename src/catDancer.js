var CatDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this,top, left, timeBetweenSteps);


  this.$node = $('<span class="catDancer"></span>');
  this.setPosition(top,left);
}

CatDancer.prototype = Object.create(Dancer.prototype);
CatDancer.prototype.constructor = CatDancer;

CatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.flipBack();
}
