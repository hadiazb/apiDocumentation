'use strict';

var utils = require('../utils/writer.js');
var Gasolinerias = require('../service/GasolineriasService');

module.exports.gasolineriasGET = function gasolineriasGET (req, res, next, place_id, cre_id) {
  Gasolinerias.gasolineriasGET(place_id, cre_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gasolineriasPOST = function gasolineriasPOST (req, res, next, gasolinera) {
  Gasolinerias.gasolineriasPOST(gasolinera)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.gasolineriasPlace_idGET = function gasolineriasPlace_idGET (req, res, next, place_id) {
  Gasolinerias.gasolineriasPlace_idGET(place_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
