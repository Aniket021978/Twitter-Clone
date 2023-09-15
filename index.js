const body = document.querySelector('.newPost');
const btn = document.querySelector('.btn');
const input = document.querySelector('#tweettxt');
const fb = document.querySelector('.f-btn');
const rem = document.querySelector('.m-o');

body.addEventListener('click', (event) => {
    if (event.target.classList.contains('fa-xmark')) {
        const tweetToRemove = event.target.closest('.other-tweet');
        if (tweetToRemove) {
            tweetToRemove.remove();
        }
    }
});

btn.addEventListener('click', () => {
    const tweetContent = input.value.trim();

    if (tweetContent !== '') {
        const newTweet = createTweetElement(tweetContent);
        insertNewTweet(newTweet);
        input.value = ''; // Clear the input value
    } else {
        // Show the modal
        const modal = document.getElementById('emptyTweetModal');
        modal.style.display = 'flex';

        // Close the modal when OK button is clicked
        const modalCloseBtn = document.getElementById('modalCloseBtn');
        modalCloseBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }
});

fb.addEventListener('click', () => {
    fb.classList.add('nbtn');
    fb.classList.remove('f-btn');
    fb.innerHTML = 'Following';
});

function createTweetElement(content) {
    const formattedContent = content.replace(/\n/g, '<br>'); // Replace newline characters with line break tags
    const newTweet = document.createElement('div');
    newTweet.className = 'other-tweet';
    newTweet.innerHTML = `
        <div class="other-tweet">
            <div class="profile">
                <div class="other-p">
                    <img src="/1st clone/images/me.jpg" alt="">
                </div>
                <div class="new-msg">
                    <span>
                        <p>Aniket bansal<b><i class="fa fa-check-circle-o"></i>@aniketbansal.<small>Just now</small></b></p>
                    </span>
                    <div class="msg">
                        <p>${formattedContent}</p>
                    </div>
                </div>
                <div class="m-o">
                    <i class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div class="react">
                <div class="comm"><i class="fa-solid fa-comment"></i><p>12.8K</p></div>
                <div class="retweet"><i class="fa fa-retweet"></i><p>120K</p></div>
                <div class="like"><i class="fa-solid fa-heart"></i><p>5M</p></div>
                <div class="book"><i class="fa fa-upload"></i><p>100K</p></div>
            </div>
        </div>`;
    return newTweet;
}

function insertNewTweet(tweetElement) {
    body.insertBefore(tweetElement, body.firstChild);
}
