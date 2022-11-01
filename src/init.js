$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
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
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);

    $('.fadingDancer').on('mouseover', function(event) {
      var min = Number.MAX_SAFE_INTEGER;
      var target, targetPlace, index;
      for (var i = 0; i < window.dancers.length; i++) {
        if (window.dancers[i] !== $(this) && window.dancers[i].position() !== $(this).position()) {
          var dist = Math.pow(($(this).position().top - window.dancers[i].position().top), 2) + Math.pow(($(this).position().left - window.dancers[i].position().left), 2);
          if (dist < min && dist !== 0) {
            min = dist;
            index = i;
            target = window.dancers[i];
          }
        }
      }
      $(this).animate({'top': target.css('top'), 'left': target.css('left')});
      //$(this).animate(targetPlace);
    });

  });

  $('.lineUpButton').on('click', function(event) {
    makeDancer.prototype.lineUp();
  });

});

