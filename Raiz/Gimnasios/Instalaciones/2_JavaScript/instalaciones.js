function mostrar(n) {
    const imgs = document.getElementsByClassName("mySlide");
    const text = document.getElementsByClassName("slideText");

    if (n > imgs.length) {
    indice = 1;
    }
    if (n < 1) {
    indice = imgs.length;
    }
    for(im of imgs){
        im.style.display = "none";
    }
    for(tx of text){
        tx.style.display = "none";
    }

    imgs[indice - 1].style.display = "block";
    text[indice - 1].style.display = "block";
}

let indice = 1;
mostrar(indice);

slide= (n, funcionCallback) => {
    let argumento = indice += n;
    funcionCallback(argumento);
}








