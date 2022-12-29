const socket = io()
const msgForm = document.querySelector('#msg-form');
const msgFormInput = msgForm.querySelector('#msg');
const msgFormBtn = msgForm.querySelector('button');
const msg = document.querySelector('#messages');
const msgTemplate = document.querySelector('#msg-template').innerHTML;
const sidebarTemplate = document.querySelector('#sidebar-template').innerHTML

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })

socket.on('message', (message) => {
    console.log(message)
    const html = Mustache.render(msgTemplate, {
        username: message.username,
        message: message.text,
        createdAt: moment(message.createdAt).format('h:mm A')
    })
    msg.insertAdjacentHTML('beforeend', html)
})

