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
    newReply.innerHTML = replyNameInput.value.toString() + ":" + form;
    newReply.querySelector('.reply-content').innerText = replyTextInput.value;
    repliesContainer.appendChild(newReply);
    replyNameInput.value = "";
    replyEmailInput.value = "";
    replyTextInput.value = "";
}
replySubmitButton.addEventListener("click", SubmitReply);

$(document).ready(function(){
	$(window).scroll(function () {
			if ($(this).scrollTop() > 50) {
				$('#back-to-top').fadeIn();
			} else {
				$('#back-to-top').fadeOut();
			}
		});

		$('#back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 400);
			return false;
		});
});