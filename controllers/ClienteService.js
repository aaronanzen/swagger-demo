'use strict';

exports.clientePOST = function(args, res, next) {
  /**
   * /Cliente
   * Realiza la consulta de el cliente
   *
   * cliente Cliente Respuesta de datos del cliente
   * returns inline_response_200
   **/
  var examples = {};
  examples['application/json'] = {
  
  "CodigoRespuesta" : 0,
  "DescripcionResp" : "cliente encontrado",
  "NumCliente" : "7687668687" ,
  "Nombre" : "Agustin",
  "Poblacion" : "polanco",
  "Telefono2" : "5556262626",
  "Telefono1" : "55556262672",
  "CodigoRespuesta" : 1,
  "Ciudad" : "mexico",
  "Estatus" : "",
  "CP" : "50010",
  "RFC" : "RYTUYT7867687",
  "Estado" : "mexico",
  "Sucursal" : "1",
  "Celular" : "555762272",
  "Mail" : "agusting@hormail.com",
  "Direccion" : "5 de mayo",
  "ESVIP" : "1",
  "DescripcionResp" : "Datos del clinete",
  "TipoPersona" : "Fisica",
  "NumCliente" : "1234"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

