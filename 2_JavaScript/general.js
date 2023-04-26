document.getElementById("figuraBarras").addEventListener("click", abrir);

var elemento = document.getElementsByTagName("nav")[0];
var abierto;
abierto = 0;

function abrir(){
    if(abierto == 0){
        elemento.style = 'display:flex';
        abierto = 1;
    }
    else{
        elemento.style = 'display:none';
        abierto = 0;
    }
}

window.addEventListener("resize", function(){
    let css = window.getComputedStyle(elemento);
    let valorDisplay = css.getPropertyValue('display');

    if(this.document.documentElement.clientWidth > 800 && valorDisplay != 'flex'){
        elemento.style = 'display:flex';
    }
});

window.addEventListener("resize", function(){
    let css = window.getComputedStyle(elemento);
    let valorDisplay = css.getPropertyValue('display');

    if(this.document.documentElement.clientWidth <= 800 && valorDisplay != 'none'){
        elemento.style = 'display:none';
    }
});


