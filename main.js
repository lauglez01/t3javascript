const p = document.getElementById('titulo');
console.log(p.textContent);

const parrafos = document.getElementsByClassName('parrafo');
console.log(parrafos[0].textContent);
console.log(parrafos[1].textContent);

const nombre = document.getElementsByName('nombre');
console.log(nombre[0].placeholder);

const apellido = document.getElementsByName('apellido');
console.log(apellido[0].placeholder);

const elemento = document.getElementsByTagName('li');
console.log(elemento[0].textContent);
console.log(elemento[1].textContent);
console.log(elemento[2].textContent);

const titulo = document.querySelector('#titulo');
console.log(titulo.textContent);

const parrafo = document.querySelectorAll(".parrafo");
console.log(parrafo[0].textContent);
console.log(parrafo[1].textContent);