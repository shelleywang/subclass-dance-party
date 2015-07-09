// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);

  this.moving = true;

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

Dancer.prototype.slide = function(){
  this.speed = this.speed || 50;
  var speed = this.direction === 'right' ? '+=' : '-=';
  speed += this.speed;
  var bodywidth = ($('body').width() -100);
  if (this.direction === 'right' && this.$node.position()['left'] > bodywidth) {
    this.$node.css({
      left: -150,
    });
  } else if (this.direction === 'left' && this.$node.position()['left'] < 0 ) {
    this.$node.css({
      left: bodywidth+100,
    });
  } else {
    this.$node.animate({
      left: speed
    }, 100);
  }
};

Dancer.prototype.flipBack = function(){
  this.$node.animate({
    textIndent: '+=360' // random assignment
  }, {duration: 1000,
    step: function(now, fx) {
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

Dancer.prototype.lineUp = function(totalDancers,index) {
  var windowWidth = $('body').width();
  var width = windowWidth * index/totalDancers;
  var windowHeight = $('body').height();
  var level = Math.abs(totalDancers/2-(index+1));
  var height = windowHeight*.25+(level*windowHeight*.5/totalDancers); 
  


  this.$node.animate({
    top: height,
    left: width
  }, 100);
};