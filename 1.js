document.addEventListener("DOMContentLoaded", function() {
    const commentInputs = document.querySelectorAll('.comment-input');
    const postButtons = document.querySelectorAll('.post-button');
    
    function postComment(event) {
        const commentInput = event.target.parentElement.querySelector('.comment-input');
        const commentsContainer = event.target.parentElement.querySelector('.comments');
        const commentText = commentInput.value;
        
        if (commentText.trim() !== '') {
            const commentElement = document.createElement('div');
            commentElement.classList.add('comment');
            commentElement.textContent = commentText;
            commentsContainer.appendChild(commentElement);
            commentInput.value = '';
        }
    }
    
    postButtons.forEach(button => {
        button.addEventListener('click', postComment);
    });
    
    commentInputs.forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                postComment(event);
            }
        });
    });
});