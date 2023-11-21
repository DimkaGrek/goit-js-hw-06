const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);

[...categories.children].forEach((elem) => {
    console.log(`Category: ${elem.children[0].textContent}`);
    console.log(`Elements: ${elem.children[1].children.length}`);
});
