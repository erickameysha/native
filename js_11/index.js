function fetch() {
    return new Promise(() => {
    })
}

fetch('https:/vk.com/users')
    .then(user=>{
        return fetch('https:/vk.com/users/10')
    })    .then(user=>{
        return fetch('https:/vk.com/users/10/book')
    })    .then(user=>{
        return fetch('https:/vk.com/users/10/book/1')
    })    .then(user=>{
        return fetch('https:/vk.com/users/10book/2')
    }).then(user => {
    return fetch('https:/vk.com/users/10')
})