const inputRef = document.querySelector('#name-input') 
const nameRef = document.querySelector('#name-output')

console.log(inputRef.value)

inputRef.addEventListener('input', onInput)
function onInput(event) {
    if (event.currentTarget.value !== '') {
        return nameRef.textContent = event.currentTarget.value
    }
    return nameRef.textContent = 'Anonymous'
}
