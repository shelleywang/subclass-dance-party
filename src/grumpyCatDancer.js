var GrumpyCatDancer = function(top, left, timeBetweenSteps){
  CatDancer.call(this,top, left, timeBetweenSteps);


  this.$node = $('<span class="grumpyCatDancer"></span>');
  this.setPosition(top,left);

}

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);

GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), 100);
  this.jump();
  
}
