var makeFadingDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="fadingDancer"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

makeFadingDancer.prototype = Object.create(makeDancer.prototype);
makeFadingDancer.prototype.constructor = makeFadingDancer;

makeFadingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  makeDancer.prototype.step.call(this);

  this.$node.fadeIn(this.timeBetweenSteps);
  this.$node.fadeOut(this.timeBetweenSteps);
};