$(document).ready(function () {
    cargaHorario();
});


function cargaHorario(){
    var xhttp=new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState ==4 && this.status == 200){
            completarHorario(this.responseXML);
        }
    }
    xhttp.open("GET", "horario.xml", true);
    xhttp.send();

}

function completarHorario(respuesta){
    let porHoras = respuesta.getElementsByTagName("PorDia");
    var elemento = 1;
    var actual = document.body.getElementsByTagName("td");

    for(var i = 0; i < 7; i++){
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("lunes")[0].childNodes[0].nodeValue;
        elemento++;
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("martes")[0].childNodes[0].nodeValue;
        elemento++;
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("miercoles")[0].childNodes[0].nodeValue;
        elemento++;
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("jueves")[0].childNodes[0].nodeValue;
        elemento++;
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("viernes")[0].childNodes[0].nodeValue;
        elemento++;
        actual[elemento].innerHTML = porHoras[i].getElementsByTagName("sabado")[0].childNodes[0].nodeValue;
        elemento+=2;
    }
}