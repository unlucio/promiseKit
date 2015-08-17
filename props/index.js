Promise.props = function(map) {
  var requests = [];
  var keys = Object.keys(map);
  
  requests = keys.map(function(key){ return map[key];})

  return Promise.all(requests).then(function(results) {
    
    var resultsMap = results.reduce(function(map, res, index){
      map[keys[index]] = res;
      return map;
    }, {});

    return resultsMap;
  });
};
