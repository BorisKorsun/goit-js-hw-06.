const ulRef = document.querySelector('#categories');
const liItemsRef = document.querySelectorAll('.item');

console.log(`Number of categories: ${liItemsRef.length}`);

liItemsRef.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`)
    console.log(`Elements: ${item.lastElementChild.children.length}`)
})
