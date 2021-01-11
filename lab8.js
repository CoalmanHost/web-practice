let replyNameInput = document.getElementById("reply-input-name");
let replyEmailInput = document.getElementById("reply-input-email");
let replyTextInput = document.getElementById("reply-input-text");
let replySubmitButton = document.getElementById("reply-submit");

let repliesContainer = document.getElementById("replies");

let htmlReplyForm = "" +
    "<div class=\"reply-content\"></div>";

function SubmitReply() {
    let form = htmlReplyForm.toString();
    let newReply = document.createElement('div');
    newReply.classList.toggle("reply");
    newReply.innerHTML = replyNameInput.value.toString() + form;
    console.log(newReply.querySelector('.reply-content').outerHTML);
    newReply.querySelector('.reply-content').innerText = replyTextInput.value;
    repliesContainer.appendChild(newReply);
}
replySubmitButton.addEventListener("click", SubmitReply);