'use strict';

var utils = require('../utils/writer.js');
var Reportes = require('../service/ReportesService');

module.exports.reportesGET = function reportesGET (req, res, next, place_id, cre_id) {
  Reportes.reportesGET(place_id, cre_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportesIdDELETE = function reportesIdDELETE (req, res, next, id) {
  Reportes.reportesIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportesIdGET = function reportesIdGET (req, res, next, id) {
  Reportes.reportesIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportesPOST = function reportesPOST (req, res, next, place_id) {
  Reportes.reportesPOST(place_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.reportesPUT = function reportesPUT (req, res, next, id) {
  Reportes.reportesPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
