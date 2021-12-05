const usuario =true;
const puedePagar=false;

if(usuario && puedePagar){
    console.log('Si puedes comprar');

}
else if(!usuario&&!puedePagar){
    console.log('No puedes comprar');
}
else if(!usuario){
    console.log('Inicia Sesión');
}
else if(!puedePagar){
    console.log('Fondos insuficientes');
}
