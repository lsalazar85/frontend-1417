// Variables ( var, let, const )

// Forma basica de declarar una variable
var primerNombre = "Luis"

// Usamos const cuando el valor de la variable no será modificado
const segundoNombre = "Alfredo"

// Usamos let cuando el valor de la varible puede mutar sin generar interpretaciones no deseadas
let primerApellido = "Salazar"

// Tipo de datos
// ( Number - String - Boolean - Undefined)

// Number (Incluye todo los numeros reales y decimales)
var age = 35;

// String ( Palabra o character )
var word = "Luis"

// Boolean ( verdadero o falso )
var verdad = true
var mentira = false

// Undefined ( No tiene valor de referencia )
var nucba


// Operadores

// Aritmeticos ( sumar, restar, dividir, multiplicar)
const num1 = 10
const num2 = 20
// console.log(num1 + num2)

// TypeOf
// console.log(typeof num1)

// Operadores Booleanos

// Negacion ( !, !!)
const esVerdad = 1
const esMentira = 0
// console.log(!esVerdad, !esMentira)

// Identidad o igualdad ( === , !== , == )
// console.log(num1 === num2)
// console.log(num1 !== num2)
// console.log(num1 == num2) ( Evitar usar )

// Comparación ( > , <, >=, <=)
// console.log(5 > 3)
// console.log(5 < 3)
// console.log(3 >= 3)
// console.log(2 <= 1)

// Logicos

// And ( && )
// console.log(2+2 !== 10 && 5+2 === 7)

// Or ( || )
// console.log(2+2 === 10 || 5+2 === 7)

// Condicionales

// if
const condionalIf = () => {
  if(10 + 10 === 20){
    console.log('Es cierto')
  }
}
//console.log(condionalIf())

// if else
const condionalIfElse = () => {
  if(10 + 10 === 100){
    console.log('Es cierto')
  } else {
    console.log('Valor Invalido')
  }
}
//console.log(condionalIfElse())

// If else if
const condionalIfElseIf = () => {
  if(10 + 10 === 100){
    console.log('Es cierto')
  } else if (10 + 10 === 1){
    console.log('Valor Invalido')
  } else {
    console.log('No sabes nada')
  }
}
// console.log(condionalIfElseIf())

// Ternario
const ternario = 10 + 10 === 20 ? console.log('Esta ok') : console.log('No esta bien')

console.log(ternario)

// concatenación
// const cinco = '5'
// console.log(`5 no es esto ${cinco}`)
// console.log('5 no es esto' + cinco)