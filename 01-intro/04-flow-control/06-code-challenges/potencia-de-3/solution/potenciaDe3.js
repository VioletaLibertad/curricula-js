function potencia (b, e) {

  var respuesta = 1;

  for (var i = 1; i <= e; i++) {
    respuesta *= b;
  }
  return respuesta;

  for (var i = 1; ; i++) {

    var resultado = potencia (3, i);

    if (resultado < 10000)
    console.log(resultado);
    else
    break;
  }

}


module.exports = potencia;
