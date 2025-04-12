import '../css/style.css';
import myalert from './alert.js';

const app = document.getElementById('app');

app.classList.add('container', 'mx-auto', 'p-4');

app.innerHTML = `
  <h1 class="font-bold text-3xl mb-4">Hello World</h1>
  <button type="button" class="bg-blue-500 text-white p-2 rounded-md" id="button">Click me</button>
`;

document.querySelector('#button').addEventListener('click', () => {
    myalert('Hello World');
});
