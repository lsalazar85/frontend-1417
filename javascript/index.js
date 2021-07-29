// JSON ( Javascript Object Notation )
const person = {
    'name': 'Luis Salazar',
    'age': 35,
    'addres': 'Floresta, CABA',
    career: 'Software Engineer',
    'homeBanking': {
        'banco': 'Santander',
        'cash' : {
            'dolares': 100
        }
    },
}

// console.log(Object.keys(person))
// console.log(Object.values(person))

const objectIteracion = () => {
    for(let nucba in person){
        // console.log(nucba)
        console.log(`${person[nucba]}`)
    }
}

const cars = {
    model: 'onix',
    brand: 'chevrolet'
}

const cars2 = {
    model: 'onix',
    brand: 'chevrolet'
}

// Metodos Number

// ParseInt
const transformar = parseInt('1111')
//console.log(typeof transformar)

// ParseFloat
//console.log(parseFloat("5e3"))

// toFixed ( redondear a mayor )
const n = 2.45
//console.log(n.toFixed(0))

// Math
//console.log(Math.max(5,9,1))

// Arrays -  Siempre va adentro de corchetes
 const arrayBasico = []

// Arrays Metodos
// sort, push, filter, find, reverse, map, join, slice

// Sort Ordenar de forma ascendente nros enteros
const numbers = [1,2,3,4,5,6]
// console.log(numbers.sort())

// Push - agrega un nvo elemento en el array
// const fruits = ['peras', 'manzanas', 'naranjas']
// console.log(fruits.push('sandias'))

// Filter - filtrar o buscar elementos adentro de un arreglo - devuelve un array
/* const persons = [
     {nombre: 'Luis', edad: 35},
     {nombre: 'Natalia', edad: 32},
     {nombre: 'Alfredo', edad: 53},
     {nombre: 'Mariana', edad: 38},
    ]
*/
//console.log(persons.filter(item => item.nombre === "Luis"))

// Find - filtrar y buscar  un elemento adentro de un arreglo - devuelve el elemento
// console.log(persons.find(item => item.nombre === "Luis"))

// Reverse - intercambiar orden del array
// console.log(numbers.reverse())

// Slice
// console.log(persons.slice(0,2))

// Map
const numbers2 = [10,11,12,13,14,15]

const mapArray = () => {
    numbers.map(nucbers => {
        const saludo = 'Hola'
        return console.log(`${saludo} ${nucbers * 2}`)
    })
}
// mapArray()

// Concat - Unir arrays
const numbersComplete = numbers.concat(numbers2)
// console.log(numbersComplete)

// Join
const joinExample = [ 'hola', 'chao', 'como va' ]
// console.log(joinExample.join(""))

// metodos para strings
const nucba = "Nucba es un instituto"
const saludoGlobal = "Hola como estas my friend"
// console.log(nucba[2])
// console.log(nucba.length > 10)
// console.log(nucba.substring(1,3))
// console.log(saludoGlobal.split(' '))


// Mover un robot mediante 4 instrucciones (UP - DOWN - LEFT - RIGHT)
// La funcion que ayudara al robot debe recibir los parametros de movimiento Ejm: robot('RRLLDDUU')
// La funcion debe avisarme cuando el robot regrese a su punto inicial.

const robot = moves => {
    let initialPositionY = 0
    let initialPositionX = 0

    for(let i = 0; i < moves.length; i++){
        if(moves[i] === 'U'){
            initialPositionY = initialPositionY + 1;
        } else if(moves[i] === 'D'){
            initialPositionY = initialPositionY - 1;
        } else if(moves[i] === 'R'){
            initialPositionX = initialPositionX + 1;
        } else if(moves[i] === 'L'){
            initialPositionX = initialPositionX - 1;
        } else {
            console.log('Datos incorrectos')
        }
    }

    return initialPositionY === 0 && initialPositionX === 0
}

console.log(robot('DU'))