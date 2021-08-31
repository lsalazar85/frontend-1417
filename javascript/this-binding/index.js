const luis = {
    name: 'Luis',
    age: 35,
    instragram: 'lanzaroth.js',
    saludar: function(vozAlta, enDespedida){
        const saludoOficial = `Hola, soy ${this.name}`
        const despedidaOficial = 'Adios'

        const saludo = vozAlta ? saludoOficial.toUpperCase() : saludoOficial
        const despedida = enDespedida ? despedidaOficial.toUpperCase() : despedidaOficial

        console.log(saludo)

        if(enDespedida){
            console.log(despedida)
        }
    },
    seguirmeEnInstagram: function(){
        console.log(`Hola, sigueme en ${this.instragram}`)
    },
    familia: {
        name: 'Mariana',
        age: 38,
        saludar: function(){
            console.log(`Hola ${this.name}`)
        },
    }
}

const alfredo = { name : 'Alfredoasdasd' }

// Call
//luis.saludar.call(alfredo, true, true)

// Apply
luis.saludar.apply(alfredo, [true, true])