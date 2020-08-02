'use strict';


/**
 * Permite obtener lista de gasolineras segun las condiciones.
 *
 * place_id String Codigo de id de la gasolinera (optional)
 * cre_id String Codigo de id de la creación de la gasolinera (optional)
 * returns List
 **/
exports.gasolineriasGET = function(place_id,cre_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cre_id" : 7098,
  "diesel" : 20.01,
  "longitud" : -99.72,
  "latitud" : 9.72,
  "premium" : 20.01,
  "city" : "Guadalajara",
  "name" : "Gasolineria Ciudad Morelos",
  "state" : "Jalisco",
  "place_id" : 12345,
  "regular" : 20.01
}, {
  "cre_id" : 7098,
  "diesel" : 20.01,
  "longitud" : -99.72,
  "latitud" : 9.72,
  "premium" : 20.01,
  "city" : "Guadalajara",
  "name" : "Gasolineria Ciudad Morelos",
  "state" : "Jalisco",
  "place_id" : 12345,
  "regular" : 20.01
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Crear Gasolinera en la base de datos
 *
 * gasolinera gasolinera Crear nueva gasolineria (optional)
 * returns String
 **/
exports.gasolineriasPOST = function(gasolinera) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{\"message\":\"Gasolinera creada\"}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Permite traer una gasolineria por Id
 *
 * place_id String Codigo de id de la gasolinera
 * returns List
 **/
exports.gasolineriasPlace_idGET = function(place_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "cre_id" : 7098,
  "diesel" : 20.01,
  "longitud" : -99.72,
  "latitud" : 9.72,
  "premium" : 20.01,
  "city" : "Leon",
  "name" : "ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.",
  "state" : "Guanajuato",
  "place_id" : 12345,
  "regular" : 20.01
}, {
  "cre_id" : 7098,
  "diesel" : 20.01,
  "longitud" : -99.72,
  "latitud" : 9.72,
  "premium" : 20.01,
  "city" : "Leon",
  "name" : "ESTACION DE SERVICIO CALAFIA, S.A. DE C.V.",
  "state" : "Guanajuato",
  "place_id" : 12345,
  "regular" : 20.01
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

