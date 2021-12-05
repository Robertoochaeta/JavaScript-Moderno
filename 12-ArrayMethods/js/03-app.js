const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]
// Con un ForEach
let total =0;
carrito.forEach(producto=> total += producto.precio)

console.log(total);

// Reduce 
let Resultado=carrito.reduce((total,producto)=> total + producto.precio, 0);

console.log(Resultado);