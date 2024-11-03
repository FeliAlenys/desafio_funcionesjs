
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}

// Seleccionar el elemento y añadir el evento
const ele = document.getElementById("ele1");

// El color del div en verde
pintar(ele);

// Agregar el evento que cambia el color a amarillo al hacer clic
ele.addEventListener("click", function() {
    pintar(ele, 'yellow'); // Al hacer clic, cambia a amarillo
});


// Seleccionamos el elemento y añadimos el evento
//const ele = document.getElementById("ele1");

//ele.addEventListener("click", function() {
  //  pintar(ele, 'yellow'); // Al hacer clic, cambiar a amarillo
//});
