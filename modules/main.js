// main.js
import { bye } from './lower/bye.js';
// main.js
import { greet } from './lower/greet.js';

document.addEventListener('DOMContentLoaded', () => {
    const nameInput = document.getElementById('name');
    const submitButton = document.getElementById('submitBtn');

    submitButton.addEventListener('click', () => {
        const name = nameInput.value;
        greet(name);
        bye(name)
    });
});