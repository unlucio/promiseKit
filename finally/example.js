require('./index.js');

function p1() {
  return new Promise(function(resolve) {
    resolve({data: 'p3'});
  });
}

p1()
.finally(function() {
  console.log('native promises:: p2 finally: ', arguments);
})
.then(function(result) {
  console.log('p3 then:', result);
  result['p3-2'] = true;
  return result;
})
.then(function(result) {
  console.log('p3 then2:', result);
  result['p3-3'] = true;
  return result;
})
.then(function(result) {
  console.log('p3 then3:', result);
  result['p3-4'] = true;
  return result;
})
.then(function(result) {
  console.log('p3 then4:', result);
  result['p3-5'] = true;
  return result;
})
.then(function(result) {
  console.log('p3 then5:', result);
  return result;
})
.then(function(result) {
  console.log('p3 then6 throw:', result);
  throw Error('Strep6 error');
})
.catch(function(error) {
  console.log('native promises:: p3 catch:', error);
  throw error;
})
.catch(function(error) {
  console.log('native promises:: p3 catch2:', error);
})
.finally(function() {
  console.log('native promises:: p3 finally: ', arguments);
});
