var expect = require('chai').expect;
var lib = require('./index.js');

describe('simpletest', function() {
  it('good test', function() {
    expect(lib.addNumbers(10,20) == 30).to.be.true;
  });
});
