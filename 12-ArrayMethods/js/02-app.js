const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 400 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach((mes,i)=>{
    if(mes==='Abril'){
        console.log(`Encontrado en el indice ${i}`);
    }
})

// Encontrar el indice de abril
const indice = meses.findIndex((mes)=>{
    return mes==='Abril'
})
console.log(indice);

const indice2= carrito.findIndex((prodcuto)=>{
    return prodcuto.precio===100;
})
console.log(indice2);