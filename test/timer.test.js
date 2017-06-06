describe('Timer', function() {

  // inject the HTML fixture for the tests
  // beforeEach(function() {
  //   var fixture = '<div id="fixture"><input id="x" type="text">'
  // });

  it('should have a start button', function() {
    document.getElementById('start').click();
    expect(window.timer.startTime).toEqual(Date.getTime());
  });
});
