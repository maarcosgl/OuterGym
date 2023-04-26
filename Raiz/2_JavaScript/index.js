document.body.onload = function(){
    document.getElementById("figuraBarras").style = "display:none";
    document.querySelector("nav").style = "display:none";
    document.querySelector("main").firstChild.nextSibling.style = "display:flex";
    window.addEventListener('scroll', disableScroll);
}

function disableScroll(){  
    window.scrollTo(0, 0);
}

document.getElementById("aceptar").addEventListener("click", aceptar);

function aceptar(){
   document.getElementById("figuraBarras").style.removeProperty("display");
    document.querySelector("main").firstChild.nextSibling.style = "display:none";
    window.removeEventListener('scroll', disableScroll);
    
    if(document.documentElement.clientWidth > 800){
        document.querySelector("nav").style = 'display:flex';
    }
    else if(document.documentElement.clientWidth <= 800){
        document.querySelector("nav").style = 'display:none';
    }
    
}