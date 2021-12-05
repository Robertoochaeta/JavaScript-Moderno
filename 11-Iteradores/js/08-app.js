const automovil ={
    modelo: 'Hilux',
    año: 200,
    motor:3.0
}
for(let propiedad in automovil){
    console.log(`${automovil[propiedad]}`);
}

for(let [llave,valor] of Object.entries(automovil)){
    console.log(valor);
    console.log(llave);
}