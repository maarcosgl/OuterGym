document.getElementById("b1").onclick=function() {guardarDatos(1)};
document.getElementById("b2").onclick=function() {guardarDatos(2)};
document.getElementById("b3").onclick=function() {guardarDatos(3)};

function guardarDatos(tarifa){
    if(tarifa == 1){
        var datos = document.getElementById("t1").textContent;
    }
    else if(tarifa == 2){
        var datos = document.getElementById("t2").textContent;
    }
    else if(tarifa == 3){
        var datos = document.getElementById("t3").textContent;
    }

    var guardarDatos = JSON.stringify(datos);
    window.sessionStorage.setItem("tarifa", guardarDatos);
    window.location.href="./datos.html"
}

