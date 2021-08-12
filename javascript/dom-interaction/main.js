// prompt -  string
// parseInt(promp('Ejemplo numero'))

// getElementById - devuelve un elemento
// getElementsByClassName - devuelve un array

function prueba(){
    let num1 = parseInt(prompt('Ingresa num1'))
    let num2 = parseInt(prompt('Ingresa num2'))
   // document.getElementById('resultado').innerHTML = num1 + num2
   document.getElementsByClassName('resultado')[0].innerHTML = num1 + num2
}

function mySelect(){
   let x = document.getElementById("mySelect").value
   document.getElementById("resultado").innerHTML = x
}

function input() {
    let inputValue = document.getElementById("input")
    inputValue.value = inputValue.value.toUpperCase()
    // alert(inputValue.value)
}

const selectElement = document.querySelector('.helado')

selectElement.addEventListener('change', (event) =>{
    const resultado = document.querySelector(".resultado")
    resultado.innerHTML = event.target.value
})
