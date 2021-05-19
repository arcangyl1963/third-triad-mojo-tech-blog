const editFormHandler = function (event) {
    event.preventDefault();
const postId = document.querySelector('input[name="post-id"]').value.trim();   
const title = document.querySelector('input[name="post-title"]').value.trim();
const body = document.querySelector('textarea[name="post-body"]').value.trim();

await fetch(`/api/posts/${postId}`, {
    method: 'PUT',
    body: JSON.stringify({
        title,
        body
    }),
    headers: {
        'Content-Type': 'application/json'
    }
});
document.location.replace('/dashboard');
};
const deleteHandler = async function() {
    await fetch(`/api/posts/${postId}`, {
        method: 'DELETE'
    });
    document.location.replace('/dashboard');
};
document.querySelector('#edit-post-form').addEventListener('submit', editFormHandler);
document.querySelector('#delete-btn').addEventListener('click', deleteHandler);
