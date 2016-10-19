var assert = require('assert');

require('../../finally');

function resolvingPromise() {
  return new Promise(function(resolve) {
    resolve({
      data: '0'
    });
  });
}

function failingPromise() {
  return new Promise(function(resolve, reject) {
    reject(new Error('Whatever Error'));
  });
}

describe('finally', function() {
  it('should be a function', function() {
    assert.equal(typeof Promise.prototype.finally, 'function');
  });

  it('should be called at the end', function(done) {
    resolvingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .finally(function() {
        done();
      });
  });

  it('should be called at the end of the then series', function(done) {
    resolvingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .then(function(result) {
        result.data++;
        return result;
      })
      .then(function(result) {
        result.data++;
        console.log('last then, data: ', result.data);
        return result;
      })
      .finally(function() {
        done();
      });
  });

  it('should be called if eny error occurs in a then', function(done) {
    resolvingPromise().then(function(result) {
        result.data++;
        throw new Error('Whatever Error');
      })
      .catch(function(error) {
        console.error('catched error: ', error);
      })
      .finally(function() {
        done();
      });
  });

  it('should be called if the promise is rejected', function(done) {
    failingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .catch(function(error) {
        console.error('catched error: ', error);
      })
      .finally(function() {
        done();
      });
  });

  it('shouldn\'t go bonk if no finally is given', function(done) {
    failingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .catch(function(error) {
        console.error('catched error: ', error);
        done();
      });
  });

  it('shouldn\'t go bonk if no callback is given to finally()', function() {
    failingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .catch(function(error) {
        console.error('catched error: ', error);
      }).finally();
  });

  it('shouldn\'t go bonk if no callback is given to then()', function() {
    resolvingPromise().then();
  });

  it('shouldn\'t go bonk if no callback is given to catch()', function() {
    failingPromise().catch();
  });

  it('shouldn\'t go bonk if no callback is given to catch() before a finally', function(done) {
    failingPromise().then(function(result) {
        result.data++;
        return result;
      })
      .catch(function(error) {
        console.error('catched error: ', error);
        throw error;
      })
      .catch()
      .finally(function() {
        done();
      });
  });

});
