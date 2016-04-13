'use strict';
var time = require('time')(Date);
var turf = require('turf');

// Filter by japannes labels
module.exports = function(tileLayers, tile, writeData, done) {
  var layer = tileLayers.osm.osm;
  var result = layer.features.filter(function(obj) {
    return (obj.properties.name_ja);
  });

  if (result.length > 0) {
    var fc = turf.featurecollection(result);
    writeData(JSON.stringify(fc) + '\n');
  }

  done(null, null);
};
