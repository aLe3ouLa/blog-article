let button = document.getElementById('btnSend');

button.addEventListener('click', function (event) {
    event.preventDefault();
    let textarea = document.getElementById('newComment');
    let html = `<div class="conversation">
    <div class="reply u-margin-bottom-small">
        <div class="reply__details">
            <div class="reply__details__wrapper">
                <img class="reply__details__wrapper--avatar"
                    src="./assets/E2ADFD8B-EB2E-4DE9-9319-10887B04FAEC.png" alt="">
                <div class="reply__details__wrapper_text">
                    <span class="reply__details__wrapper_text--name">Patrícia Ribeiro</span>
                    <span class="reply__details__wrapper_text--date">February 2, 2019, 3:05
                        PM</span>
                </div>
            </div>
            <div class="dropdown">
                <span class="fas fa-ellipsis-v"></span>
                <ul class="dropdown-content">
                    <li> <span class="fas fa-pen"></span> &nbsp; Edit</li>
                    <li><span class="fas fa-trash"></span> &nbsp; Delete</li>
                </ul>
            </div>
        </div>
        <div class="reply__content u-margin-bottom-xsm ">${textarea.value}</div>
        <div class="reply__actions">
            <div class="reply__actions--like">
                <span class="far fa-heart"></span>
                <span class="text">Like</span>
            </div>
            <hr class="vertical">
            <div class="reply__actions--reply">
                <span class="far fa-comment"></span>
                <span class="text">reply</span>
            </div>
        </div>

        <div id="inline-reply" class="reply__inline_reply">
            <div class="comment__textarea">
                <img class="comment__textarea--avatar"
                    src="./assets/E2ADFD8B-EB2E-4DE9-9319-10887B04FAEC.png" alt="">
                <div class="comment__textarea--textarea">
                    <div class="comment__textarea--textarea--container">
                        <textarea id="newComment" name="newComment"
                            placeholder="Write a comment..." rows="10"></textarea>
                    </div>
                    <button id="btnSend" class="btn">Send</button>
                </div>
            </div>
        </div>
    </div>

    <div class="inline-replies-container"></div>
</div>`

    let parentDiv = document.getElementById('replies-container');
    parentDiv.innerHTML = html + parentDiv.innerHTML;

    textarea.value = null;

    hearts();

    replies();

}, false);


function hearts() {
    let heart = document.querySelectorAll('span.fa-heart');

    for (let i = 0; i < heart.length; i++) {
        let self = heart[i];

        self.addEventListener('click', function (event) {
            // prevent browser's default action
            event.preventDefault();

            if (self.classList.contains('far')) {
                self.classList.remove('far')
                self.classList.add('fas');
                self.nextElementSibling.innerHTML = 'liked';
            } else {
                self.classList.remove('fas')
                self.classList.add('far');
                self.nextElementSibling.innerHTML = 'like';
            }

        }, false);
    }
}

function replies() {
    let reply = document.querySelectorAll('span.fa-comment');

    for (let i = 0; i < reply.length; i++) {
        let self = reply[i];

        self.addEventListener('click', function (event) {
            // prevent browser's default action
            event.preventDefault();

            let replyitem = self.parentElement.parentElement.nextElementSibling;

            if (replyitem.classList.contains('editor-display')) {
                replyitem.classList.remove('editor-display');
            } else {
                replyitem.classList.add('editor-display');
            }

        }, false);
    }
}

replies();
hearts();


function showHidden (){
    let hidden = document.getElementById("hidden-conv");
    hidden.classList.add("show-hidden-conv");
}