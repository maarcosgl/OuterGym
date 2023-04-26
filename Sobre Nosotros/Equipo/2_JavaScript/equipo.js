document.addEventListener("DOMContentLoaded", function(event) { 
    cargarDatos();
});

function cargarDatos(){
    fetch('datos.json')
    .then(response => response.json())
    .then(data => muestra(data));
}

function muestra(data){
  const marcos = document.getElementById('marcos');
  const angel = document.getElementById('angel');

  
  marcos.querySelector('img').src = data.marcos.imagen;
  marcos.querySelector('p:nth-of-type(1)').textContent = data.marcos.nombre;
  marcos.querySelector('p:nth-of-type(2)').textContent = data.marcos.descripcion;

  angel.querySelector('img').src = data.angel.imagen;
  angel.querySelector('p:nth-of-type(1)').textContent = data.angel.nombre;
  angel.querySelector('p:nth-of-type(2)').textContent = data.angel.descripcion;
}


