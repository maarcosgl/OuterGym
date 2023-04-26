document.getElementById("siguiente").onclick=function() {guardarDatos()};

function guardarDatos(){

    let f = document.forms[0];
    let valido = 0;

    let expresiones = {
        telefono: /[0-9]{9}/, //Numeros de telefono.
        numeroTarjeta: /[0-9]{4}[ ][0-9]{4}[ ][0-9]{4}[ ][0-9]{4}/,
        fecha: /([0-2][0-9]|3[0|1])\/(0[1-9]|1[0-2])\/[0-9]{2}/,
        cvv: /[0-9]{3}/
    }
    
    //Filtrado del telefono
    if(expresiones.telefono.test(f.telefono.value)==false){
        document.getElementById("errorTelefono").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("errorTelefono").style = "visibility:hidden";
    }

    //Filtrado de checkbox sobre la privacidad
    if(document.getElementById("checkPrivacidad").checked == false){
        document.getElementById("condUsuario").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("condUsuario").style = "visibility:hidden";
    }

    //Filtrado de selección de tipo de pago
    if(document.getElementById("op1").checked == false && document.getElementById("op2").checked == false && document.getElementById("op2").checked == false ){
        document.getElementById("metodoPago").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("metodoPago").style = "visibility:hidden";
    }

    //Filtrado de numero de targeta
    if(expresiones.numeroTarjeta.test(f.numeroTarjeta.value)==false){
        document.getElementById("numInvalidio").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("numInvalidio").style = "visibility:hidden";
    }

    //Filtrado de fecha de caducidad de la targeta
    if(expresiones.fecha.test(f.fechaExpiracion.value)==false){
        document.getElementById("formatoIncorrecto").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("formatoIncorrecto").style = "visibility:hidden";
    }

    //Filtrado de cvv de la targeta
    if(expresiones.cvv.test(f.cvv.value)==false){
        document.getElementById("cvv").style = "visibility:visible";
        valido = 1;
    }
    else{
        document.getElementById("cvv").style = "visibility:hidden";
    }

    if(valido != 1){
        var datos = {
            nombre: f.nombre.value,
            apellidos: f.apellidos.value,
            telefono: f.telefono.value,
            provincia: f.provincia.value,
            ciudad: f.ciudad.value,
            direccion: f.direccion.value,
        }

        var guardarDatos = JSON.stringify(datos);
        window.sessionStorage.setItem("datos", guardarDatos);
        window.location.href="resumen.html"
    }
}

