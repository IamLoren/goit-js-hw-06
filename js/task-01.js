const categoriList = document.getElementById('categories');
const items = categoriList.children;

console.log(`Number of categories: ${items.length}`);
[...items].forEach(item => {
    console.log(`
    Category: ${item.firstElementChild.textContent}
    Elements: ${item.querySelectorAll('li').length}
    `)
});