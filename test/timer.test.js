var tk = require('timekeeper');
var time = new Date(0);
var time2 = new Date(1050);

describe('Timer', function() {

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin',
      '<button id="start">Start</button>' +
      '<button id="stop">Stop</button>' +
      'Total: <span id="total"></span>');
    startListeners();
  });
  afterEach(function() {
    document.body.removeChild(document.getElementById('start'));
  });

  it('has a start button that sets starting time', function() {
    spyOn(Date, 'now').and.returnValue('perfect');
    document.getElementById('start').click();
    expect(timer.startTime).toEqual('perfect');
  });

  it('has a stop button that sets end time', function() {
    spyOn(Date, 'now').and.returnValue('swish');
    document.getElementById('stop').click();
    expect(timer.stopTime).toEqual('swish');
  });

  it('displays total time when stopped', function() {
    tk.freeze(time);
    document.getElementById('start').click();
    tk.travel(time2);
    document.getElementById('stop').click();
    tk.reset();
    expect(document.getElementById('total').innerHTML).toEqual(1000);
  });
});
