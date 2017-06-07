describe('Timer', function() {

  beforeEach(function(){
    fixture.base = 'test/fixtures';
    fixture.load('/index.html');
    startListeners();
  });

  afterEach(function(){
    fixture.cleanup();
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
    jasmine.clock().install();
    var baseTime = Date.now;
    jasmine.clock().mockDate(baseTime);
    document.getElementById('start').click();
    jasmine.clock().tick(2100);
    document.getElementById('stop').click();
    expect(document.getElementById('total').innerHTML).toEqual('2 seconds');
    jasmine.clock().uninstall();
  });

  it('displays total elapsed time', function(){
    jasmine.clock().install();
    var baseTime = Date.now;
    jasmine.clock().mockDate(baseTime);
    document.getElementById('start').click();
    jasmine.clock().tick(5500);
    expect(document.getElementById('timer').innerHTML).toEqual('5 seconds');
    jasmine.clock().uninstall();
  });
});
