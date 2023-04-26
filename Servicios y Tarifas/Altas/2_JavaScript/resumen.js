document.addEventListener("DOMContentLoaded", function(event) { 
    var gimSel = sessionStorage.getItem("gimnasio") || "";
    var tarSel = sessionStorage.getItem("tarifa") || "";
    var datos = sessionStorage.getItem("datos") || "";


    var jsonGim=JSON.parse(gimSel);
    var jsonTar=JSON.parse(tarSel);
    var jsonDatos=JSON.parse(datos);


    if(datos!=""){
        if(jsonDatos.nombre!=""){
            document.getElementById("nombre").innerHTML=jsonDatos.nombre;
        }
        if(jsonDatos.apellidos!=""){
            document.getElementById("apellidos").innerHTML=jsonDatos.apellidos;
        }
        if(jsonDatos.telefono!=""){
            document.getElementById("telefono").innerHTML=jsonDatos.telefono;
        }

        if(jsonDatos.provincia!=""){
            document.getElementById("provincia").innerHTML=jsonDatos.provincia;
        }
        if(jsonDatos.ciudad!=""){
            document.getElementById("ciudad").innerHTML=jsonDatos.ciudad;
        }
        if(jsonDatos.direccion!=""){
            document.getElementById("direccion").innerHTML=jsonDatos.direccion;
        }
    }
    



    if(jsonGim!=""){
        document.getElementById("gimnasio").innerHTML=jsonGim;
    }
    if(jsonTar!=""){
        document.getElementById("precio").innerHTML=jsonTar;
    }
    
    
});