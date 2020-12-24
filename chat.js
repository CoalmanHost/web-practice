let input = document.querySelector('input');
let submit = document.querySelector('.chat-submit');
let messages = document.querySelector('.chat-messages-box');

input.addEventListener('keydown', e => newMessage(e));
document.querySelectorAll('.closeContent')
    .forEach(e => e.addEventListener(
        'click', () => closeMessage(e.parentNode.parentElement)));

let quotes = ["Лучше быть последним среди волков, чем первым среди шакалов.",
"Если волк молчит, то лучше его не перебивать", "Можно кинуть камень в волка,но не волка в камень",
"Бывают ночи, когда не волки воют на луну, а наоборот.", "Демократия — это когда два волка и ягненок голосуют насчет обеденного меню. Свобода — это когда хорошо вооруженный ягненок оспаривает результат такого голосования.",
"Волк волку человек.", "Я матёрый старый волк!\n" +
    "Я в охоте знаю толк!\n" +
    "И с ружьём наперевес\n" +
    "Выхожу в родной свой лес.\n" +
    "Для меня в лесу вовек\n" +
    "Зверю равен человек."
]


function newMessage(e) {
    let message = input.value;
    if (e.code !== "Enter" || /^\s*$/.test(message)) {
        return;
    }
    addMessageToMessages(message, "outcoming");
    input.value = "";
    answer(message);
    messages.scrollTop = messages.scrollHeight;
}

submit.onclick = function submit() {
    let message = input.value
    if (message.toString().length == 0) {
        return;
    }
    addMessageToMessages(message, "outcoming");
    input.value = "";
    answer();
    messages.scrollTop = messages.scrollHeight;
}

function answer() {
    let ans = quotes[rand(0, quotes.length)];
    addMessageToMessages(ans, "incoming")
}

function addMessageToMessages(message, type) {
    let newMessage = document.createElement('div');
    newMessage.classList.toggle("chat-message-row");
    if (type == "incoming") {
        newMessage.innerHTML = "" +
            "                <div class=\"chat-incoming-message-box\">\n" +
            "                    <div class=\"chat-incoming-message\">\n" +
            "                       <div class=\"chat-message-text\"></div>\n" +
            "                    </div>\n" +
            "                    <button class=\"delete-message\">x</button>\n" +
            "                </div>\n"
    }
    else if (type == "outcoming") {
        newMessage.innerHTML = "" +
            "                <div class=\"chat-outcoming-message-box\">\n" +
            "                    <button class=\"delete-message\">x</button>\n" +
            "                    <div class=\"chat-outcoming-message\">\n" +
            "                       <div class=\"chat-message-text\"></div>\n" +
            "                    </div>\n" +
            "                </div>\n"
    }
    newMessage.querySelector('.chat-message-text').innerText = message;
    newMessage.querySelector('.delete-message')
        .addEventListener('click', () => closeMessage(newMessage));
    messages.appendChild(newMessage);
}

function closeMessage(e) {
    e.remove();
}

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}