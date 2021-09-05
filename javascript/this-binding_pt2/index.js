const luis = {
    name: 'Luis',
    age: 35,
    instragram: 'lanzaroth.js',
    saludar: function(vozAlta, enDespedida){
        const saludoOficial = `Hola, soy ${this.name}`
        const despedidaOficial = 'Adios'

        const seguirmeEnInstagram = () => console.log(`Hola, sigueme en ${this.instragram}`)

        const saludo = vozAlta ? saludoOficial.toUpperCase() : saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase() : despedidaOficial

        console.log(saludo)

        if(enDespedida){
            console.log(despedida)
        }

        seguirmeEnInstagram()
    },
    familia: {
        name: 'Mariana',
        age: 38,
        saludar: function(){
            console.log(`Hola ${this.name}`)
        },
    }
}


const boton = document.getElementById('button')

boton.addEventListener('click', luis.saludar.bind(luis))

class Persona {
    constructor(name) {
        this.name = name
        this.saludar = this.saludar.bind(this)
    }

    saludar(){
        console.log(`Hola ${this.name}`)
    }
}

Persona('Luis')

