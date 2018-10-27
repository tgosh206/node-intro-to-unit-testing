const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {
  it('should return "fizz-buzz" on multiples of 15', function() {
    [15, 30, 45, 60].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return "fizz" on multiples of 3', function() {
    [3, 6, 9, 12].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should return "buzz" on multiples of 5', function() {
    [5, 10, 15, 20].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return a number if not multiple of 3 or 5', function() {
    [1, 2, 4, 7].forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should produce an error if input is not a number', function() {
    const badInputs = [true, false, 'fish', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});