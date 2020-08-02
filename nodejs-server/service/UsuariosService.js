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

