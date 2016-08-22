var expect = require('chai').expect;
var lib = require('./index.js');

describe('minlibjstest', function() {
  describe('addNumbers', function(){
    it('is a good result', function() {
      expect(lib.addNumbers(10,20) == 30).to.be.true;
    });
    it('is a wrong result', function(){
      expect(lib.addNumbers(3,4)==10).not.to.be.true;
    });
  });
  describe('mulNumbers',function(){
    it('is a good result', function() {
      expect(lib.mulNumbers(10,20) == 200).to.be.true;
    });
    it('is a wrong result', function(){
      expect(lib.mulNumbers(3,4)==10).to.be.false;
    });
  });
});
