var botones = document.querySelectorAll("button");
for(var i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", siguiente);
}

function siguiente(){
    window.location.href="../Altas/altas.html";
}

