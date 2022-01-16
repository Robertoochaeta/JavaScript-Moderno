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