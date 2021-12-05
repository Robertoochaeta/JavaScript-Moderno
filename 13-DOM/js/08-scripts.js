const navegacion =document.querySelector('.navegacion');
console.log(navegacion);
console.log(navegacion.firstElementChild);
console.log(navegacion.lastElementChild)
console.log(navegacion.childNodes)
console.log(navegacion.children);
console.log(navegacion.children[0].nodeName);
console.log(navegacion.children[0].nodeType)

const card= document.querySelector('.card');
card.children[1].children[1].textContent='Nuevo Heading';
card.children[0].src = 'img/hacer3.jpg';
console.log(card.children[1]);


console.log(card.parentNode);
console.log(card.parentElement.parentElement.parentElement);

card.nextElementSibling.children[1].textContent='Ciudad Imperial'
card.nextElementSibling.children[0].src='img/populares1.jpg'
console.log(card.nextElementSibling.children[0]);
console.log(card.nextElementSibling.nextElementSibling)

const ultimoCard = document.querySelector('.card:nth-child(4');
console.log(ultimoCard.previousElementSibling);
console.log(ultimoCard);

