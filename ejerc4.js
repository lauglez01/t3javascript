document.body.classList.add('p-3','m-0', 'border-0', 'bd-example');

const div = document.createElement('div');
div.classList = 'list-group';

const a = document.createElement('a');
a.href = '#';
a.classList.add('list-group-item', 'list-group-item-action');
a.textContent = "A simple default list group item";

const a1 = document.createElement('a');
a1.href = '#';
a1.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-primary');
a1.textContent = "A primary list group item";

const a2 = document.createElement('a');
a2.href = '#';
a2.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-secondary');
a2.textContent = "A secondary list group item";

const a3 = document.createElement('a');
a3.href = '#';
a3.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-success');
a3.textContent = "A success list group item";

const a4 = document.createElement('a');
a4.href = '#';
a4.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-danger');
a4.textContent = "A danger list group item";

const a5 = document.createElement('a');
a5.href = '#';
a5.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-warning');
a5.textContent = "A warning list group item";

const a6 = document.createElement('a');
a6.href = '#';
a6.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-info');
a6.textContent = "A info list group item";

const a7 = document.createElement('a');
a7.href = '#';
a7.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-light');
a7.textContent = "A light list group item";

const a8 = document.createElement('a');
a8.href = '#';
a8.classList.add('list-group-item', 'list-group-item-action', 'list-group-item-dark');
a8.textContent = "A dark list group item";



div.appendChild(a);
div.appendChild(a1);
div.appendChild(a2);
div.appendChild(a3);
div.appendChild(a4);
div.appendChild(a5);
div.appendChild(a6);
div.appendChild(a7);
div.appendChild(a8);
document.body.appendChild(div);

