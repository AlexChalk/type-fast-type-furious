(function(exports) {
  'use strict';

  var timer = {
    startTime: 0,
    stopTime: 0
  };

  var startListeners = function() {
    document.getElementById('start').addEventListener('click', function() {
      timer.startTime = Date.now();
    });
    document.getElementById('stop').addEventListener('click', function() {
      timer.stopTime = Date.now();
    });
  };

  exports.timer = timer;
  exports.startListeners = startListeners;
})(this);
