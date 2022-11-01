var makeGrowingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="growingDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeGrowingDancer.prototype = Object.create(makeDancer.prototype);
makeGrowingDancer.prototype.constructor = makeGrowingDancer;

makeGrowingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  this.$node.animate({width: '20px'});
  this.$node.animate({width: '150px'});
};