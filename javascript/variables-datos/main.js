// Old school function
function hello(name, lastname) {
  return console.log(`Hola ${name} ${lastname}`)
}

hello('Luis', 'Salazar')


 // ECMA 6+

 // Arrow Function
 const saludar = (name, lastname) => {
  return console.log(`Hola ${name} ${lastname}`)
 }

 //saludar('Agustin', 'Pereyra')


// Calculadora

// Calculadora que reciba 2 numeros, y el tipo de operación aritmetica ( + , - , * , / )

const calculator = (num1, num2, operation) => {
  let result

  if(!num1 || !num2){
    console.log('Ingresa numeros')
  }

  if(!isNaN(num1) && !isNaN(num2)){
    console.log('Ingrese un numero')
  }

  if(!isNaN(num1) || !isNaN(num2)){
    console.log('Ingrese un numero')
  }

/*  if(operation === 'sumar'){
    console.log(num1 + num2)
  } else if(operation === 'restar'){
    console.log(num1 - num2)
  } else if(operation === 'multiplicar'){
    console.log(num1 * num2)
  } else if(operation === 'dividir'){
    console.log(num1 / num2)
  } else {
    console.log('Tipo de operacion no valida')
  }*/

  switch(operation){
    case 'sumar':
      result = num1 + num2
      break;

    case 'restar':
      result = num1 - num2
      break;

    case 'multiplicar':
      result = num1 * num2
      break;

    case 'dividir':
      result = num1 / num2
      break;

    default:
      console.log('Tipo de operacion no valida')
  }

  return result;
}

/*
calculator(10, 10, 'sumar')
calculator(10, 10, 'restar')
calculator(10, 10, 'multiplicar')
calculator(10, 10, 'dividir')
calculator(10, 10, 'hola')
console.log(calculator(10, 10, 'sumar')) */

const saludar = name => {
  return `Hola ${name}`
}

const despedida = message => {
   let result;
   return result = message
} 

const presentacion = (name, message) => {
  let part1 = saludar(name)
  let part2 = despedida(message)

  return saludar(name) + despedida(message)
}

//presentacion('Luis', 'Hasta Luego, vuelvan prontos')

// Bucles

// While & For

// While

const whileLoop = () => {
  let i = 1;

  while(i < 11){
    console.log(i)
    i++
  }
}

// For
const forLoop = () => {
  for(let i = 1; i < 11; i++){
    console.log(i)
}

