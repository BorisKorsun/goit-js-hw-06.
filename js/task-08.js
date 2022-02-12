const formRef = document.querySelector('.login-form')

// inputsRef.addEventListener('input', event => {
//     console.log(event.currentTarget.value === '')
// })

formRef.addEventListener('submit', onLoginFormSubmit)

function onLoginFormSubmit(event) {
    event.preventDefault()
    if (
        event.currentTarget.elements.email.value === '' ||
        event.currentTarget.elements.password.value ===''
    ) {
        alert('All the fields have to be filled')
        return
    }
    const dataFormResult = {};
    const formData = new FormData(event.currentTarget)
    
    formData.forEach((value, name) => {
        dataFormResult[name] = value;
    });

    console.log(dataFormResult)
    event.currentTarget.reset()
}


