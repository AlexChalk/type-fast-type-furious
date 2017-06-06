describe('Timer', function() {

  // inject the HTML fixture for the tests
  // beforeEach(function() {
  //   var fixture = '<div id="fixture"><input id="x" type="text">'
  // });

  beforeEach(function() {
    document.body.insertAdjacentHTML('afterbegin', '<button id="start">Start</button>')
  });
  afterEach(function() {
    document.body.removeChild(document.getElementById('start'));
  });

  it('should have a start button', function() {
    document.getElementById('start').click();
    expect(window.timer.startTime).toEqual(Date.getTime());
  });
});
