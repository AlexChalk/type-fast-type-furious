(function(exports) {
  'use strict';
  
  var timer = {
    startTime: 0
  };

  var startListeners = function() {
    document.getElementById('start').addEventListener('click', function() {
      timer.startTime = Date.now();
    });
  };

  exports.timer = timer;
  exports.startListener = startListener;
})(this);
