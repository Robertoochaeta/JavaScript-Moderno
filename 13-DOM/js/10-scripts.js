const enlace = document.createElement('A');
enlace.textContent='Nuevo Enlace';
enlace.href='./nuevo_enlace';
enlace.target= '_blank'
console.log(enlace)
enlace.setAttribute('date-enlace', 'Nuevo Enlace');
enlace.classList.add('Nueva-Clase')
const navegacion = document.querySelector('.navegacion');
// console.log(navegacion.children);
enlace.onclick=mifuncion;
navegacion.insertBefore(enlace, navegacion.children[1]);

function mifuncion(){
    alert('Diste Click')
}
// Crear un card de forma dinamica
const parrafo1= document.createElement('p');
parrafo1.textContent= 'Concierto'

parrafo1.classList.add('categoria', 'concierto')

const parrafo2 = document.createElement('p');
parrafo2.textContent='Concierto de rock'
parrafo2.classList.add('titulo')

const parrafo3 = document.createElement('p');
parrafo3.textContent= '800 por persona';
parrafo3.classList.add('precio')

// Crear Div con la clase de info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg'

const card = document.createElement('div');
card.classList.add('card');
// Asignar Imagen
card.appendChild(imagen);
card.appendChild(info);

// Insertar en el html
const contenedore = document.querySelector('.hacer .contenedor-cards');
contenedore.insertBefore(card, contenedore.children[0])
