require('./index.js');

function p1() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({data: 'p1'});
    }, 2000);
  });
}

function p2() {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve({data: 'p2'});
    }, 1000);
  });
}

var proms = {
  foo: p1(),
  bar: p2()
};

Promise.props(proms).then(function(res) {
  console.log('res: ', res);
});
