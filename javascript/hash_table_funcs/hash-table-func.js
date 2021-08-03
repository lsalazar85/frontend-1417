// Hash Table
const enemigo = 'Hulk'

//  Snake Case ( _ )

const LOKI_DISFRACES = {
    'Iron-Man': 'Thanos',
    Thor: 'Odin',
    Hulk: 'Spiderman',
    Wolverine: 'Magneto'
}

// Hash Table

// const LOKI_DEFAULT_DISFRAZ = 'Loki'
// const loki = LOKI_DISFRACES[enemigo] || LOKI_DEFAULT_DISFRAZ
// const loki = LOKI_DISFRACES[enemigo] ? LOKI_DISFRACES[enemigo] : LOKI_DEFAULT_DISFRAZ
// console.log(loki)

const lokiEnemies = (lokiDisfraces, enemigo) => {
       /* if(lokiDisfraces[enemigo]){
            return lokiDisfraces[enemigo]
        } else {
            return 'Loki'
        } */
      return lokiDisfraces[enemigo] ? lokiDisfraces[enemigo] : 'Loki'
 }

 console.log(lokiEnemies(LOKI_DISFRACES, 'Hulk'))
 console.log(lokiEnemies(LOKI_DISFRACES, 'Iron-Man'))
 console.log(lokiEnemies(LOKI_DISFRACES, 'Thor'))
 console.log(lokiEnemies(LOKI_DISFRACES, 'Luis'))

/*
if (adversio === 'Iron-Man'){
    loki = 'Thanos'
} else if(adversio === 'Thor'){
    loki = 'Odin'
} else if(adversio === 'Hulk'){
    loki = 'Spiderman'
} else if(adversio === 'Wolverine'){
    loki = 'Magneto'
}

switch(adversio){
    case 'Iron-Man':
        loki = 'Thanos'
        break;

    case 'Thor':
        loki = 'Odin'
        break;

    case 'Hulk':
        loki = 'Spiderman'
        break;

    case 'Wolverine':
        loki = 'Magneto'
        break

    default:
        loki = 'Loki'
} */
