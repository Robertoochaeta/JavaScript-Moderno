const autenticado = true;

if(autenticado){
    console.log('Esta autenticado');
}
const puntaje = 500;
function RevisarPuntaje(){
    if(puntaje >400){
        console.log('excelente');
        return;
    }
    
    if(puntaje > 300){
        console.log('Feliciades');
        return;
    }
}
RevisarPuntaje();
