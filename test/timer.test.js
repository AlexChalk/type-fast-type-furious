jasmine.clock().install();
describe('Timer', function() {

  beforeEach(function(){
    fixture.base = 'test';
    fixture.load('/index.html');
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
    var baseTime = Date.now;
    jasmine.clock().mockDate(baseTime);
    document.getElementById('start').click();
    jasmine.clock().tick(2100);
    document.getElementById('stop').click();
    expect(document.getElementById('total').innerHTML).toEqual('2 seconds');
  });
});
