'use strict';
var turf = require('turf');
// Filter by name:ja
module.exports = function(tileLayers, tile, writeData, done) {
  var layer = tileLayers.osm.osm;
  var result = layer.features.filter(function(obj) {
    if (obj.properties['name:ja']) {
      var props = {
        "name:ja": obj.properties['name:ja']
      };
      obj.properties = props;
      return true;
    }
  });

  if (result.length > 0) {
    var fc = turf.featurecollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }

  done(null, null);
};