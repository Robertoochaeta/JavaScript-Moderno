const dinero = 300;
const totalCarrito = 500;
const tarjeta = false;
const cheque = true;

if( dinero >= totalCarrito ) {
    console.log('Pago Correcto');

}else if(cheque){
    console.log('Puedo pagar con cheque');
}
else if(tarjeta){
    console.log('Si puedo pagar porque tengo tarjeta ');
}

else {
    console.log('Fondos Insuficientes');
}
