const btnFlotante = document.querySelector('.btn-flotante');
const footer =document.querySelector('.footer');

btnFlotante.addEventListener('click',mostrarOcultarFooter);
function mostrarOcultarFooter(){
    footer.classList.add('activo');
}