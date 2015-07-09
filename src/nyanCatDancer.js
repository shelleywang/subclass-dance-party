var NyanCatDancer = function(top, left, timeBetweenSteps){
  CatDancer.call(this,top, left, timeBetweenSteps);


  this.$node = $('<span class="nyanCatDancer"></span>');
  this.setPosition(top,left);

}

NyanCatDancer.prototype = Object.create(CatDancer.prototype);

NyanCatDancer.prototype.constructor = NyanCatDancer;

NyanCatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), 100);
  if (moving) {
    this.slideRight();
    //this.jump();
  }
}
