Promise.props = function(map) {
  var keys = Object.keys(map);
  var requests = keys.map(function(key) {
    return map[key];
  });

  return Promise.all(requests).then(function(results) {
    return results.reduce(function(map, res, index) {
      map[keys[index]] = res;
      return map;
    }, {});
  });
};
