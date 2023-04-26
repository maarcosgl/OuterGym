document.getElementById("siguiente").onclick=function() {guardarDatos()};

function guardarDatos(){
    var datos = document.getElementById("seleccionarGimnasio").value;
    var guardarDatos = JSON.stringify(datos);
    window.sessionStorage.setItem("gimnasio", guardarDatos);
    window.location.href="./seleccionarTarifa.html"    
}

