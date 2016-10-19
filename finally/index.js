Promise.prototype.__catch = Promise.prototype.catch;
Promise.prototype.__then = Promise.prototype.then;

Promise.prototype.finally = function(callback) {
  this.finallyCb = this.finallyCb || [];
  if (callback) {
    this.finallyCb.push(callback);
  }
  return this;
};

Promise.prototype.fireFinally = function() {
  this.finallyCb.forEach(function(fcb) {
    fcb();
  });
};

Promise.prototype.then = function(callback, errorCb) {
  this.finallyCb = this.finallyCb || [];
  var self = this;

  function thenCallback(result) {
    var cbReturn = callback(result);
    self.thenCounter.count--;

    if (self.thenCounter.count < 1) {
      self.fireFinally();
    }

    return cbReturn;
  }

  this.thenCounter = this.thenCounter || {count: 0};

  if (!errorCb) {
    this.thenCounter.count++;
  }

  var next = this.__then((callback !== undefined) ? thenCallback : callback, errorCb);
  next.thenCounter = this.thenCounter;
  next.finallyCb = this.finallyCb;

  return next;
};

Promise.prototype.catch = function(callback) {
  var self = this;

  function erroCallback(error) {
    if(callback) {
      callback(error);
    }

    self.fireFinally();
  }

  this.__catch(erroCallback);

  return this;
};
