// const autenticado = true;
// const PuedesPagar = false;

// console.log(autenticado ?PuedesPagar  ?'Si Puede Pagar':'Si autenticado,No Puede pagar' : 'No esta autenticado' );

const autenticado= false;
const PuedesPagar=false;

if(autenticado === true && PuedesPagar ===true){
console.log('Puedes pagar')
}else if(autenticado === true && PuedesPagar ===false){
    console.log('Esta autenticado pero no puede pagar');
}else{
    alert('No puede hacer nada');
}
const aprendiendo= (tecnologia)=> `Aprendiendo ${tecnologia}`
console.log(aprendiendo('Javascript')) 

function Aprendiendo2(nombre){
    console.log(`Bienvenido ${nombre}`);
}
Aprendiendo2('Roberto');


