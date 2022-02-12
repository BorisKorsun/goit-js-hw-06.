const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createIngridients = array => {
  return array.map(ingredient => {
    const itemRef = document.createElement('li')
    itemRef.textContent = ingredient
    itemRef.classList.add('item')
    return itemRef
  })
} 

const elements = createIngridients(ingredients)
console.log(elements)

const listRef = document.querySelector('#ingredients')

listRef.append(...elements)