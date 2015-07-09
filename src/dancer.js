// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.slideRight = function(){
  var bodywidth = ($('body').width() -100);
  if (this.$node.position()['left'] > bodywidth) {
    this.$node.css({
      left: -100,
    });
  } else {
    this.$node.animate({
      left: '+=50'
    }, 100);
  }
};

Dancer.prototype.flipBack = function(){
  this.$node.animate({
    textIndent: '+=360' // random assignment
  }, {duration: 1000,
    step: function(now, fx) {
      console.log(now);
      $(this).css('transform', 'rotate(' + now + 'deg)')
    }
  });
};

Dancer.prototype.jump = function(){
  //console.dir(this.$node.effect);
  //this.$node.effect("bounce", { direction:'up', times:1 }, 300);
  this.$node.animate({
    top: '+=50'
  }, 150);
  this.$node.animate({
    top: '-=50'
  }, 200);
};