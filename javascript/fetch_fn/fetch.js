const API_URL = 'https://jsonplaceholder.typicode.com'

const loadUsers = async () => {
   /* const response = await fetch(`${API_URL}/users`)
    const users = await response.json()
    return users */

    return (await fetch(`${API_URL}/users`)).json()
}


document.addEventListener('DOMContentLoaded', async () => {
    let users = []

    try {
        users = await loadUsers()
    }catch(e) {
        console.log(e)
    }

    console.log(users)
})