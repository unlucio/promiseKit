var assert = require('assert');

require('../../props');

describe('props', function() {

  it('should be a function', function() {
    assert.equal(typeof Promise.props, 'function');
  });

  it('should return a res object with the given keys', function(done) {
    var data1 = {data: '1'};
    var promise1 = function() {
      return new Promise(function(resolve) {
        resolve(data1);
      });
    };

    var data2 = {data: '2'};
    var promise2 = function() {
      return new Promise(function(resolve) {
        resolve(data2);
      });
    };

    var promises = {
      data1: promise1(),
      data2: promise2()
    };

    Promise.props(promises).then(function(res) {
      assert.equal(res.data1, data1);
      assert.equal(res.data2, data2);
    }).then(done, done);

  });

  it('should return a res object with the given keys (no matter the order)', function(done) {
    var data1 = {data: '1'};
    var promise1 = function() {
      return new Promise(function(resolve) {
        setTimeout(resolve.bind(undefined, data1), 1000);
      });
    };

    var data2 = {data: '2'};
    var promise2 = function() {
      return new Promise(function(resolve) {
        setTimeout(resolve.bind(undefined, data2), 500);
      });
    };

    var promises = {
      data1: promise1(),
      data2: promise2()
    };

    Promise.props(promises).then(function(res) {
      assert.equal(res.data1, data1);
      assert.equal(res.data2, data2);
    }).then(done, done);

  });

});
