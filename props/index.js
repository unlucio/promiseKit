Promise.props = function(map) {
  var requests = [];
  var keys = Object.keys(map);

  keys.forEach(function(key) {
    requests.push(map[key]);
  });

  return Promise.all(requests).then(function(results) {
    var resultsMap = {};

    results.forEach(function(value, index) {
      resultsMap[keys[index]] = value;
    });

    return resultsMap;
  });
};
