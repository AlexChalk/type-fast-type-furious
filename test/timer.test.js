describe('Timer', function() {

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<button id="start">Start</button><button id="start">Start</button>');
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
});
