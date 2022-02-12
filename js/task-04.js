const btnDcr = document.querySelector('button[data-action="decrement"]')
const btnIncr = document.querySelector('button[data-action="increment"]')
const value = document.querySelector('#value')

let CounterValue = 0

btnDcr.addEventListener('click', onBtnDcr)
btnIncr.addEventListener('click', onBtnIncr)

function onBtnDcr() {
    value.textContent = CounterValue -= 1
}
function onBtnIncr() {
    value.textContent = CounterValue += 1
}

