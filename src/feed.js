document.querySelector('.create-post-btn').addEventListener('click', () => {
    document.getElementById('create-post-modal').style.display = 'block';
});

document.querySelector('.close-modal').addEventListener('click', () => {
    document.getElementById('create-post-modal').style.display = 'none';
});