'use strict';


/**
 * Trae todos los reportes que existen por id
 *
 * place_id String Codigo de id de la gasolinera
 * cre_id String Codigo de id para la creación de la gasolinera
 * returns List
 **/
exports.reportesGET = function(place_id,cre_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photo" : "https://firestore/images/image_1.png",
  "id" : 1,
  "comentario" : "Reporte realizado por precios elevados"
}, {
  "photo" : "https://firestore/images/image_1.png",
  "id" : 1,
  "comentario" : "Reporte realizado por precios elevados"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite eliminar un reporte.
 *
 * id String Codigo de id de la gasolinera
 * returns String
 **/
exports.reportesIdDELETE = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Reporte eliminado\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite traer reporte por Id
 *
 * id String Codigo de id de la gasolinera
 * returns List
 **/
exports.reportesIdGET = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "photo" : "https://firestore/images/image_1.png",
  "id" : 1,
  "comentario" : "Reporte realizado por precios elevados"
}, {
  "photo" : "https://firestore/images/image_1.png",
  "id" : 1,
  "comentario" : "Reporte realizado por precios elevados"
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
 * place_id String Codigo de id de la gasolinera
 * returns String
 **/
exports.reportesPOST = function(place_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Reporte creado\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite actualizar un reporte.
 *
 * id String Codigo de id de la gasolinera
 * returns String
 **/
exports.reportesPUT = function(id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Reporte creado\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

