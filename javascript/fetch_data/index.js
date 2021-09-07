const data = [
    {
        id: 1,
        name: 'Luis Salazar',
        age: 35   
    },
    {
        id: 2,
        name: 'Alfredo Lamas',
        age: 36   
    },
    {
        id: 3,
        name: 'Aljandro Torres',
        age: 37   
    }
]

const getData = () => {
    return new Promise((resolve, reject) => {
        if(data.length === 0){
            reject(new Error('Data no existe'))
        }
        setTimeout(() => {
            resolve(data)
        }, 3000)
    })
}

/* getData().then(datos => console.log(datos))

const fetchedData = async () => {
    try {
        const fetchedValues = await getData()
        console.log(fetchedValues)
    } catch (error){
        console.log(error)
    }
} 

fetchedData() */