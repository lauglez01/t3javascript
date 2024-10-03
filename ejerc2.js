
const imagen = document.createElement('img');
imagen.setAttribute('src', 'img_la.jpg'); 

// Create a heading element
const heading = document.createElement('h1');
heading.textContent = "This is a heading";  


const para1 = document.createElement('p');
para1.textContent = "This is a paragraph";  


const para2 = document.createElement('p');
para2.textContent = "This is another paragraph"; 


document.body.appendChild(imagen);
document.body.appendChild(heading);
document.body.appendChild(para1);
document.body.appendChild(para2);
