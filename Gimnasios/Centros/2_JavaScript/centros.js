document.getElementById("buscarCiudades").onclick=function() {cambiarMapa()};

document.getElementById("buscarCiudades").addEventListener("keyup", function(event){
    if(event.code == 'Enter'){
        var localizacion = document.getElementById("listaCiudades").value;  
        if(localizacion == "Santiago de Compostela"){
            var loc = document.querySelector("iframe");
            loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93556.87172148754!2d-8.614638020651155!3d42.88018370832865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe44e2dd71a7%3A0xe0146888c087e311!2sSantiago%20de%20Compostela%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1679223077053!5m2!1ses!2ses");
        }
        else if(localizacion == "A Coruña"){
            var loc = document.querySelector("iframe");
            loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46411.59525208859!2d-8.447703160794715!3d43.361868807728996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7cfcf174574d%3A0x6a47350d095cdfee!2zQSBDb3J1w7FhLCBMYSBDb3J1w7Fh!5e0!3m2!1ses!2ses!4v1680272300848!5m2!1ses!2ses");
        }
        if(localizacion == "Vigo"){
            var loc = document.querySelector("iframe");
            loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189085.38101209735!2d-8.86518125151525!3d42.22600432662271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f621461b2c193%3A0x7b441dad174bd49f!2sVigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1679246026963!5m2!1ses!2ses");
        }
        if(localizacion == "Barcelona"){
            var loc = document.querySelector("iframe");
            loc.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.6243159463!2d2.1401890999999997!3d41.392667949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1679246090318!5m2!1ses!2ses");
        }
        if(localizacion == "Madrid"){
            var loc = document.querySelector("iframe");
            loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388697.73660935246!2d-3.95903759899106!3d40.43761774568005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1679246134823!5m2!1ses!2ses");
        }
    }
});

function cambiarMapa(){
    var localizacion = document.getElementById("listaCiudades").value;  
    if(localizacion == "Santiago de Compostela"){
        var loc = document.querySelector("iframe");
        loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93556.87172148754!2d-8.614638020651155!3d42.88018370832865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2efe44e2dd71a7%3A0xe0146888c087e311!2sSantiago%20de%20Compostela%2C%20La%20Coru%C3%B1a!5e0!3m2!1ses!2ses!4v1679223077053!5m2!1ses!2ses");
    }
    else if(localizacion == "A Coruña"){
        var loc = document.querySelector("iframe");
        loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46411.59525208859!2d-8.447703160794715!3d43.361868807728996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7cfcf174574d%3A0x6a47350d095cdfee!2zQSBDb3J1w7FhLCBMYSBDb3J1w7Fh!5e0!3m2!1ses!2ses!4v1680272300848!5m2!1ses!2ses");
    }
    if(localizacion == "Vigo"){
        var loc = document.querySelector("iframe");
        loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d189085.38101209735!2d-8.86518125151525!3d42.22600432662271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f621461b2c193%3A0x7b441dad174bd49f!2sVigo%2C%20Pontevedra!5e0!3m2!1ses!2ses!4v1679246026963!5m2!1ses!2ses");
    }
    if(localizacion == "Barcelona"){
        var loc = document.querySelector("iframe");
        loc.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.6243159463!2d2.1401890999999997!3d41.392667949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1679246090318!5m2!1ses!2ses");
    }
    if(localizacion == "Madrid"){
        var loc = document.querySelector("iframe");
        loc.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d388697.73660935246!2d-3.95903759899106!3d40.43761774568005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1679246134823!5m2!1ses!2ses");
    }
}

