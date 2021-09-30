// setItem -- agregar cualquier key al LS
// getItem -- consumir u obtener cualquier key de LS
// removeItem -- eliminar cualquier key de LS
// clear() -- reset de todo el LS

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((json) => localStorage.setItem('Nucba', JSON.stringify(json)));
    
const list = JSON.parse(localStorage.getItem('Nucba'))

list && list.forEach(item => {
    const results = document.getElementById('results')
    let p = document.createElement('p')
    p.appendChild(document.createTextNode(item.name))
    results.appendChild(p)
});





