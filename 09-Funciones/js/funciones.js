
fun        ction NumeroPar(numero){
    if (numero%2==0) {
        console.log(`El número ${numero} es par`);
    
    }else{
        console.log(`El número ${numero} es impar`);
    }
}

function Resultado(mostrar,numero){
if(numero%2==0){
    NumeroPar(numero);
}else{
    console.log(numero);
}
}
NumeroPar(12); 
