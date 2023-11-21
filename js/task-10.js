function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

function createBoxes(amount) {
    let width = 30;
    let height = 30;
    let result = '';
    for (let i = 1; i <= amount; i++) {
        result += `<div style="width: ${width}px; height: ${height}px; background-color: ${getRandomHexColor()}"></div>`;
        width += 10;
        height += 10;
    }
    return result;
}

function destroyBoxes() {
    boxes.innerHTML = '';
}

const input = document.querySelector('input');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

btnCreate.addEventListener('click', () => {
    boxes.innerHTML = createBoxes(input.value);
});

btnDestroy.addEventListener('click', destroyBoxes);
