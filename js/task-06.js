const input = document.querySelector('#validation-input');

input.addEventListener('blur', (event) => {
    const validLength = Number(input.getAttribute('data-length'));
    event.currentTarget.value.length === validLength
        ? input.classList.add('valid')
        : input.classList.add('invalid');
});

input.addEventListener('focus', () => {
    input.classList.remove('valid');
    input.classList.remove('invalid');
});
