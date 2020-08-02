'use strict';


/**
 * Trae todos los usuarios que existen por id
 *
 * id String Identifiación del usuario
 * returns List
 **/
exports.usuariosGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2018-05-26-3TD",
  "password" : "hjlifh342jnj",
  "id" : 1,
  "telefono" : "52-221-234-8976",
  "nombre" : "Carlos Arturo Dueñas",
  "email" : "miemail@correo.com",
  "username" : "alibaba"
}, {
  "date" : "2018-05-26-3TD",
  "password" : "hjlifh342jnj",
  "id" : 1,
  "telefono" : "52-221-234-8976",
  "nombre" : "Carlos Arturo Dueñas",
  "email" : "miemail@correo.com",
  "username" : "alibaba"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite eliminar un usuario.
 *
 * id Integer Codigo de id del usuario
 * returns String
 **/
exports.usuariosIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Usuario eliminado\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite traer usuario por Id
 *
 * id Integer Identificación id del usuario
 * returns List
 **/
exports.usuariosIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "date" : "2018-05-26-3TD",
  "password" : "hjlifh342jnj",
  "id" : 1,
  "telefono" : "52-221-234-8976",
  "nombre" : "Carlos Arturo Dueñas",
  "email" : "miemail@correo.com",
  "username" : "alibaba"
}, {
  "date" : "2018-05-26-3TD",
  "password" : "hjlifh342jnj",
  "id" : 1,
  "telefono" : "52-221-234-8976",
  "nombre" : "Carlos Arturo Dueñas",
  "email" : "miemail@correo.com",
  "username" : "alibaba"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite crear nuevo reporte
 *
 * id String Crea usuario (optional)
 * returns String
 **/
exports.usuariosPOST = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Usuario creado\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

