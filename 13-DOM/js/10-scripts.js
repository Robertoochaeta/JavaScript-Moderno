const enlace = document.createElement('A');
enlace.textContent= 'Nuevo Enlace';
enlace.href='./nuevo-enlace';
enlace.target = '_blank';
enlace.setAttribute('data-enlace', 'Nuevo Enlace')
console.log(enlace);


// Navegacion
const navegacion = document.querySelector('.navegacion');
console.log(navegacion.children);
navegacion.insertBefore(enlace,navegacion.children[1]);