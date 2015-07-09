$(document).ready(function(){
  window.dancers = [];
  window.nyanCatDancers = [];
  window.blinkyDancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerDirection = $(this).data("dancer-direction");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    var top = $("body").height() * Math.random();
    var left = $("body").width() * Math.random();
    var timeBetweenSteps = Math.random() * 1000;

    if (dancerMakerFunctionName === "CatDancer"){
      timeBetweenSteps = timeBetweenSteps*7 + 1000;
    } else if (dancerMakerFunctionName === "GrumpyCatDancer"){
      timeBetweenSteps = timeBetweenSteps*2 + 500;
    }

    var dancer = new dancerMakerFunction(top, left, timeBetweenSteps, dancerDirection);
    dancers.push(dancer);
    $('body').append(dancer.$node);

    if (dancerMakerFunctionName === "NyanCatDancer") {
      dancer.$node.click(function() {
        dancer.speed *= 5;
      });
      nyanCatDancers.push(dancer);
    } else if (dancerMakerFunctionName === "BlinkyDancer") {
      blinkyDancers.push(dancer);
    }

  });

  $(".lineUpButton").on("click", function(event){
    var totalDancers = dancers.length;
    dancers.forEach(function(dancer, index) {
      dancer.moving = false;
      dancer.lineUp(totalDancers, index);
    });
  });

  $(".disperseButton").on("click", function(event) {
    dancers.forEach(function(dancer) {
      var top = $("body").height() * Math.random();
      var left = $("body").width() * Math.random();
      var timeBetweenSteps = Math.random() * 1000;

      if (dancer instanceof NyanCatDancer) {
        dancer.moving = true;
      } else if (dancer instanceof CatDancer){
        timeBetweenSteps = timeBetweenSteps*7 + 1000;
      } else if (dancer instanceof BlinkyDancer){
        timeBetweenSteps = timeBetweenSteps*2 + 500;
      }
      dancer.setPosition(top,left);
      dancer.timeBetweenSteps = timeBetweenSteps;
    });

  });



});

