(function(exports) {
  'use strict';

  var timer = {
    startTime: 0,
    stopTime: 0,
  };

  var timerDisplay;
  var keyDownFired = false;

  var startTimer = function() {
    if (keyDownFired) return;
    keyDownFired = true;
    timer.startTime = Date.now();
    timerDisplay = setInterval(calculateElapsedTime, 1000);
  };

  var stopTimer = function() {
    timer.stopTime = Date.now();
    clearInterval(timerDisplay);
    if (timer.startTime) {
      document.getElementById('timer').innerHTML = ((timer.stopTime - timer.startTime)/1000).toFixed(2) + ' seconds';
      timer.startTime = 0;
      keyDownFired = false;
    }
  }
  var getKeyDownFired = function() {
    return keyDownFired;
  };

  var startListeners = function() {

    document.getElementById('userInput').addEventListener('keydown', function(){
      startTimer();
    });

    document.getElementById('stop').addEventListener('click', function() {
      stopTimer();
    });
  };

  var calculateElapsedTime = function() {
    document.getElementById('timer').innerHTML = Math.floor((Date.now() - timer.startTime)/1000) + ' seconds';
  };

  exports.timer = timer;
  exports.startListeners = startListeners;
  exports.calculateElapsedTime = calculateElapsedTime;
  exports.startTimer = startTimer;
  exports.stopTimer = stopTimer;
  exports.getKeyDownFired = getKeyDownFired;
})(this);
