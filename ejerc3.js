const div = document.createElement('div');
document.body.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "The input min and max attributes";

const br = document.createElement('br');

const p = document.createElement('p');
p.textContent = "The min and max attributes specify the minimum and maximum values for an input element.";


const f = document.createElement('form');
f.setAttribute('action', 'action_page.php');


const l = document.createElement('label');
l.setAttribute('for', 'datemax');
l.textContent = "Enter a date before 1980-01-01:";

const input = document.createElement('input');
input.setAttribute('type', 'date');
input.setAttribute('id', 'datemax');
input.setAttribute('name', 'datemax');
input.setAttribute('max', '1979-12-31');  


const l2 = document.createElement('label');
l2.setAttribute('for', 'datemin');
l2.textContent = "Enter a date after 2000-01-01:";

const input2 = document.createElement('input');
input2.setAttribute('type', 'date');
input2.setAttribute('id', 'datemin');
input2.setAttribute('name', 'datemin');
input2.setAttribute('min', '2000-01-02');  


const l3 = document.createElement('label');
l3.setAttribute('for', 'quantity');
l3.textContent = "Quantity number (between 1 and 5):";

const input3 = document.createElement('input');
input3.setAttribute('type', 'number');
input3.setAttribute('id', 'quantity');
input3.setAttribute('name', 'quantity');
input3.setAttribute('min', '1');
input3.setAttribute('max', '5');


const br2 = document.createElement('br');
const br3 = document.createElement('br');
const br4 = document.createElement('br');


const submit = document.createElement('input');
submit.setAttribute('type', 'submit');
submit.setAttribute('value', 'Submit');

 
div.appendChild(h1);
div.appendChild(br);
div.appendChild(p);
div.appendChild(f); 

f.appendChild(l);  
f.appendChild(input);  
f.appendChild(br2);

f.appendChild(l2);
f.appendChild(input2);  
f.appendChild(br3);

f.appendChild(l3);
f.appendChild(input3); 
f.appendChild(br4);

f.appendChild(submit); 
