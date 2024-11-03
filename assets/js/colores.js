
// Función para cambiar el color a negro al hacer clic
function cambiarColorNegro(elemento) {
    elemento.style.backgroundColor = 'black';
}

// Seleccionar los divs
const div1 = document.getElementById('div1');
const div2 = document.getElementById('div2');
const div3 = document.getElementById('div3');
const div4 = document.getElementById('div4');
const keyDiv = document.getElementById('key');

// Añadir event listeners
div1.addEventListener('click', () => cambiarColorNegro(div1));
div2.addEventListener('click', () => cambiarColorNegro(div2));
div3.addEventListener('click', () => cambiarColorNegro(div3));
div4.addEventListener('click', () => cambiarColorNegro(div4));


// Evento de teclado para cambiar el color del div 'key'
document.addEventListener('keydown', function (event) {
    let color;
    if (event.key === 'a') {
        color = 'pink'; // color rosado
    } else if (event.key === 's') {
        color = 'orange'; // color naranjo
    } else if (event.key === 'd') {
        color = 'lightblue'; // color celeste
    } else if (event.key === 'q') {
        color = 'purple'; // color morado
        crearNuevoDiv(color);
    } else if (event.key === 'w') {
        color = 'gray'; // color gris
        crearNuevoDiv(color);
    } else if (event.key === 'e') {
        color = 'brown'; // color café
        crearNuevoDiv(color);
    }
    
    if (color) {
        keyDiv.style.backgroundColor = color;
    }
});

// Función para crear un nuevo div
function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.style.width = '200px';
    nuevoDiv.style.height = '200px';
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = '1px solid black';
    document.body.appendChild(nuevoDiv);
}