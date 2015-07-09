var GrumpyCatDancer = function(top, left, timeBetweenSteps){
  CatDancer.call(this, top, left, timeBetweenSteps);


  this.$node = $('<span class="grumpyCatDancer"></span>');
  this.setPosition(top,left);
  this.smile = false;

}

GrumpyCatDancer.prototype = Object.create(CatDancer.prototype);

GrumpyCatDancer.prototype.constructor = GrumpyCatDancer;

GrumpyCatDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  this.jump();
  

  var width = 100;
  var height = 100;

  var thisDancer = this;

  //iterate through dancers
  nyanCatDancers.forEach(function(nyanCat) {
    var nyanCatTop = parseFloat(nyanCat.$node.css('top'));
    var nyanCatLeft = parseFloat(nyanCat.$node.css('left'));

    // placement of bliny dancer:
    var top = parseFloat(thisDancer.$node.css('top'));
    var left = parseFloat(thisDancer.$node.css('left'));
    // vertical range of nyan cat is between top and top+height
    if ((nyanCatTop >=top &&nyanCatTop <= top+height) || 
      (nyanCatTop +height >= top && nyanCatTop +height <= top+height)) {

      // or horizontal range of nyan cat is between left and left+width
      if ((nyanCatLeft >=left &&nyanCatLeft <= left+width) || 
        (nyanCatLeft +width >= left && nyanCatLeft +width <= left+width)) {
        // if (!thisDancer.smile) {
        //   var newgif = 'grumpycat.gif';

        // } else {
        //   var newgif = 'dancecat.gif';
        // }
        var newgif = 'dancecat.gif';
        thisDancer.$node.css({'background-image': 'url("assets/'+newgif+'")'});
        thisDancer.smile = !thisDancer.smile;
      }
    }

  });

}
