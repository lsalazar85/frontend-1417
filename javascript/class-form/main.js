function updateBg(reset){
    const cuadrado = document.getElementById('cuadrado')
    reset ? cuadrado.classList.remove('extra') :
    cuadrado.classList.add('extra')
}


// Form
const myForm = event => {
    event.preventDefault()
    const formState = []
    const mailformat =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    let name = document.getElementById('nombre')
    let lastname = document.getElementById('apellido')
    let email = document.getElementById('email')

    !name.value ? name.classList.add('error') :
    formState.push({ element: 'nombre', value: name.value }) && name.classList.remove('error')

    !lastname.value ? lastname.classList.add('error') :
    formState.push({ element: 'apellido', value: lastname.value }) && lastname.classList.remove('error')

    !email.value || !email.value.match(mailformat) ? email.classList.add('error') :
    formState.push({ element: 'email', value: email.value }) && email.classList.remove('error')

    const dato = document.getElementById('formValues')

    const html = formState.map(item => {
        let p = document.createElement('p')
        p.innerText = item.value
        dato.appendChild(p)
    })

    formState.length === 3 && JSON.stringify(html)
}


