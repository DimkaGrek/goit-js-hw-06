const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    event.currentTarget.value === ''
        ? (output.textContent = 'Anonymous')
        : (output.textContent = event.currentTarget.value);
});
