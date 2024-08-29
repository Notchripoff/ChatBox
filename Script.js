// script.js
const usernameInput = document.getElementById('username');
const joinBtn = document.getElementById('join-btn');
const chatLog = document.getElementById('chat-log');
const messageInput = document.getElementById('message');
const sendBtn = document.getElementById('send-btn');

let username = '';

joinBtn.addEventListener('click', () => {
    username = usernameInput.value.trim();
    if (username !== '') {
        usernameInput.disabled = true;
        joinBtn.disabled = true;
        messageInput.disabled = false;
        sendBtn.disabled = false;
    }
});

sendBtn.addEventListener('click', () => {
    const message = messageInput.value.trim();
    if (message !== '') {
        const messageHTML = `<p class="message"><span class="username">${username}</span> ${message}</p>`;
        chatLog.innerHTML += messageHTML;
        messageInput.value = '';
    }
});
