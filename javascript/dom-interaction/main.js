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

function calculadora(){
    let numAction = prompt('¿Qué operación aritmetica queres hacer?')
    let num1 = parseInt(prompt('Ingresa el primer numero'))
    let num2 = parseInt(prompt('Ingresa el segundo numero'))

    if(numAction === 'sumar' || numAction === '+'){
       document.getElementById('resultado').innerHTML = num1 + num2
    } else if(numAction === 'restar' || numAction === '-'){
        document.getElementById('resultado').innerHTML = num1 - num2
    } else if(numAction === 'multiplicacion' || numAction === 'multiplicar' || numAction === '*'){
        document.getElementById('resultado').innerHTML = num1 * num2
    }else if(numAction === 'división' || numAction === 'dividir' || numAction === '/'){
        document.getElementById('resultado').innerHTML = num1 / num2
    } else {
        alert('Por favor ingresa numeros de forma correcta o una operación valida')
    }
}