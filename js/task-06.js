const inputRef = document.querySelector('#validation-input')

inputRef.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const value = event.currentTarget.value.length
    // console.log(typeof value)
    const requiredValue = inputRef.dataset.length
    // console.log(typeof requiredValue)

    this.classList.remove('valid')
    this.classList.add('invalid')

    if (value === Number(requiredValue)) {
        this.classList.add('valid')
        this.classList.remove('invalid')
    }
}