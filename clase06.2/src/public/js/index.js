const socket = io()
const chatbox = document.getElementById('chatbox')
let user = ''

Swal.fire({
    title: 'Auth',
    input: 'text',
    text: 'Set username',
    inputValidator: value => {
        return !value.trim() && 'Please. write a username'
    },
    allowOutsideClick: false
}).then(result => {
    user = result.value
    document.getElementById('username').innerHTML = user
    socket.emit('new', user)
})
// Enviar mensajes:
chatbox.addEventListener('keyup', event => {
    if (event.key === 'Enter') {
        const message = chatbox.value.trim()
        if (message.length > 0) {
            socket.emit('message', {
                user,
                message
            })
            chatbox.value = ''
        }
    }
})
// Recibir mensajes:
socket.on('logs', data => {
    const divLogs = document.getElementById('logs')
    let messages = divLogs.innerHTML

    messages += `<p><i>${data.user}</i>: ${data.message}</p>`

    divLogs.innerHTML = messages
})