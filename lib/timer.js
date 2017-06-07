(function(exports) {
  'use strict';

  var timer = {
    startTime: 0,
    stopTime: 0,
    totalTime: 0
  };

  var startListeners = function() {
    document.getElementById('start').addEventListener('click', function() {
      timer.startTime = Date.now();
      var timerDisplay = setInterval(function() {
        document.getElementById('timer').innerHTML = Math.floor((Date.now() - timer.startTime)/1000);
      }, 1000);
    });
    document.getElementById('stop').addEventListener('click', function() {
      timer.stopTime = Date.now();
      timer.totalTime = Math.round((timer.stopTime - timer.startTime)/1000.0);
      document.getElementById('total').innerHTML = timer.totalTime + ' seconds';
      clearInterval(timerDisplay);
      document.getElementById('timer').innerHTML = '';
    });
  };



  exports.timer = timer;
  exports.startListeners = startListeners;1
})(this);
