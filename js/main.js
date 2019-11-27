function sendButton() {
    let textarea = document.getElementById('newComment');
    var now = moment(new Date).format("MMMM D, YYYY, h:mm a");
    if (textarea.value !== '') {
        let html = `<div class="conversation">
        <div class="reply u-margin-bottom-small">
            <div class="reply__details">
                <div class="reply__details__wrapper">
                    <img class="reply__details__wrapper--avatar"
                        src="./assets/E2ADFD8B-EB2E-4DE9-9319-10887B04FAEC.png" alt="">
                    <div class="reply__details__wrapper_text">
                        <span class="reply__details__wrapper_text--name u-margin-bottom-xxsm">Patrícia Ribeiro</span>
                        <span class="reply__details__wrapper_text--date">${ now }</span>
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
                <div class="reply__actions--like" onclick="clickHeart(this)">
                    <span class="far fa-heart"></span>
                    <span class="text">Like</span>
                </div>
                <hr class="vertical">
                <div class="reply__actions--reply" onclick="clickReply(this)">
                    <span class="far fa-comment"></span>
                    <span class="text">reply</span>
                </div>
            </div>

            <div id="inline-reply" class="reply__inline_reply">
                <div class="comment__textarea">
                <div class="comment__textarea__user">
                <img class="comment__textarea__user--avatar"
                    src="./assets/E2ADFD8B-EB2E-4DE9-9319-10887B04FAEC.png" alt="">
                <span class="comment__textarea__user--name">Patrícia Ribeiro</span>
            </div>
                    <div class="comment__textarea--textarea">
                        <div class="comment__textarea--textarea--container">
                            <textarea id="newComment" name="newComment"
                                placeholder="Write a comment..." rows="10"></textarea>
                        </div>
                        <button id="btnSendInlineReply" class="btn">Send</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="inline-replies-container"></div>
    </div>`;

        let parentDiv = document.getElementById('replies-container');
        parentDiv.innerHTML = html + parentDiv.innerHTML;
        textarea.value = null;
    }
}

function showHidden() {
    let hidden = document.getElementById("hidden-conv");
    hidden.classList.add("show-hidden-conv");
}

function clickHeart(e) {
    if (e.children[0].classList.contains('far')) {
        e.children[0].classList.remove('far')
        e.children[0].classList.add('fas');
        e.children[1].innerHTML = 'liked';
    } else {
        e.children[0].classList.remove('fas')
        e.children[0].classList.add('far');
        e.children[1].innerHTML = 'like';
    }
}

function clickReply(e) {
    let replyitem = e.parentElement.nextElementSibling;
    if (replyitem.classList.contains('editor-display')) {
        replyitem.classList.remove('editor-display');
    } else {
        replyitem.classList.add('editor-display');
    }
}