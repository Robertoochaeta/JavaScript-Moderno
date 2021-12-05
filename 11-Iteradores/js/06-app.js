// Foreach
const pendientes =['Tarea','Trabajar ','Comer','Aprender JavaScript'];

pendientes.forEach((pendiente,indice)=>{
    console.log(`${indice}: ${pendiente}` );
});

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet ', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
]
const CarritoNuevo= carrito.forEach(productos=> productos.nombre);

const CarritoNuevo2 = carrito.map(productos =>productos.nombre);

console.log(CarritoNuevo);
console.log(CarritoNuevo2);
