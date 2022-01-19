const nav = document.querySelector('.navegacion');

// Regisrar un evento
nav.addEventListener('mousedown',()=>{
    console.log('Dentro de la Navegación');
    nav.style.backgroundColor='red'

})

// nav.addEventListener('mouseup',()=>{
//     console.log('Fuera de la Navegación');
//     nav.style.fontFamily = 'Arial';
//     nav.style.backgroundColor = 'blue'
//     nav.style.fontSize= '30px';
// })
nav.addEventListener('dblclick',()=>{
    console.log('Doble Click')
})