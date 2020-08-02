'use strict';

var utils = require('../utils/writer.js');
var Usuarios = require('../service/UsuariosService');

module.exports.usuariosGET = function usuariosGET (req, res, next, id) {
  Usuarios.usuariosGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosIdDELETE = function usuariosIdDELETE (req, res, next, id) {
  Usuarios.usuariosIdDELETE(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosIdGET = function usuariosIdGET (req, res, next, id) {
  Usuarios.usuariosIdGET(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosIdPUT = function usuariosIdPUT (req, res, next, id) {
  Usuarios.usuariosIdPUT(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.usuariosPOST = function usuariosPOST (req, res, next, id) {
  Usuarios.usuariosPOST(id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
