const encabezado= document.querySelector('.contenido-hero h1');
console.log(encabezado);

console.log(encabezado.innerText);
console.log(encabezado.textContent);
console.log(encabezado.innerHTML);
const nuevoHeading='Nuevo Heading';
document.querySelector('.contenido-hero h1').textContent=nuevoHeading;

