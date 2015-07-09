var NyanCatDancer = function(top, left, timeBetweenSteps){
  CatDancer.call(this,top, left, timeBetweenSteps);


  this.$node = $('<span class="nyanCatDancer"></span>');
  this.setPosition(top,left);

}

NyanCatDancer.prototype = Object.create(CatDancer.prototype);

NyanCatDancer.prototype.constructor = NyanCatDancer;

NyanCatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), 100);
  this.slideRight();
  
}

// NyanCatDancer.prototype.slideRight = function(){
//   var bodywidth = ($('body').width() -100);
//   if (this.$node.position()['left'] > bodywidth) {
//     this.$node.css({
//       left: -100,
//     });
//   } else {
//     this.$node.animate({
//       left: '+=50'
//     }, 100);
//   }
// }