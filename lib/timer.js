(function(exports) {
  'use strict';

  var timer = {
    startTime: 0,
    stopTime: 0,
  };
  var finalTime;
  var timerDisplay;
  var keyDownFired = false;

  var startTimer = function() {
    if (keyDownFired) return;
    keyDownFired = true;
    timer.startTime = Date.now();
    timerDisplay = setInterval(calculateElapsedTime, 1000);
  };

  var stopTimer = function(numberOfCharacters) {
    timer.stopTime = Date.now();
    clearInterval(timerDisplay);
    if (timer.startTime) {
      finalTime = ((timer.stopTime - timer.startTime)/1000).toFixed(2);
      document.getElementById('timer').innerHTML = finalTime + ' seconds';
      document.getElementById('wpm').innerHTML = ((numberOfCharacters / 5) / (finalTime/60)).toFixed(2);
      timer.startTime = 0;
      keyDownFired = false;
    }
  };

  var getKeyDownFired = function() {
    return keyDownFired;
  };

  var calculateElapsedTime = function() {
    document.getElementById('timer').innerHTML = Math.floor((Date.now() - timer.startTime)/1000) + ' seconds';
  };

  exports.timer = timer;
  exports.calculateElapsedTime = calculateElapsedTime;
  exports.startTimer = startTimer;
  exports.stopTimer = stopTimer;
  exports.getKeyDownFired = getKeyDownFired;
})(this);
