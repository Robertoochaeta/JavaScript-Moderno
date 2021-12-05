const efectivo =300;
const credito = 100;
const disponible =efectivo + credito;
const totalapagar = 600;
if(disponible > totalapagar || credito > totalapagar ||disponible >totalapagar){
 console.log('Si podemos pagar');
}else{
    console.log('Fondos insuficientes');
}