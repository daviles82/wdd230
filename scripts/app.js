const h1 = document.querySelector('h1');
const copyright = document.querySelector('#copyright');

h1.textContent = `Brother David Aviles`;
const currentYear = new Date().getFullYear();
copyright.textContent = `©️ ${new Date().getFullYear()}`;
let quantity = document.querySelector('#q').value;
