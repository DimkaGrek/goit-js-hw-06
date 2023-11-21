const nameInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
    output.textContent =
        event.currentTarget.value === ''
            ? 'Anonymous'
            : event.currentTarget.value;

    // event.currentTarget.value === ''
    //     ? (output.textContent = 'Anonymous')
    //     : (output.textContent = event.currentTarget.value);
});
