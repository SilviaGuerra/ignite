(function(){
  var api = {
    url: 'http://10.0.0.3:8080/people/'
  }

  var anoActual = new Date().getFullYear();
  var mesActual = new Date().getMonth();
  var diaActual = new Date().getDate();


  var cargarPagina = function(){
    $(".llamandoApi").click(peticionApi);
  }

  var peticionApi = function(){
    $.getJSON(api.url, function (datos){
      datos.forEach(crearPublicaciones);
    });
  }

  var crearPublicaciones = function (dato){
    var nombre = dato.first_name;
    var apellido = dato.last_name;
    var fecha = dato.birth_date;


    var nombreImpreso = '<tr><td>'+ nombre + '</td>';
    var apellidoImpreso = '<td>'+ apellido + '</td>';
    var fechaImpresa = '<td>'+ fecha + '</td>';

    var cumple = new Date(fecha);

    var anoCumple = cumple.getFullYear();
    var mesCumple = cumple.getMonth();
    var diaCumple = cumple.getDate();


    var edad = anoActual - anoCumple;

    if(mesCumple >= mesActual){
      if(diaCumple >= diaActual){
        edad -= 1;
      }
    }

    var edadImpresa = '<td>'+ edad + '</td></tr>';
    

    $("#body").append(nombreImpreso + apellidoImpreso + fechaImpresa + edadImpresa);



  }


  $(document).ready(cargarPagina);
})();
