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
    });
    document.getElementById('stop').addEventListener('click', function() {
      timer.stopTime = Date.now();
      timer.totalTime = Math.round((timer.stopTime - timer.startTime)/1000.0);
      document.getElementById('total').innerHTML = timer.totalTime + ' seconds';
    });
  };

  exports.timer = timer;
  exports.startListeners = startListeners;
})(this);
