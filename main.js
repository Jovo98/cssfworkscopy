document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const formTitle = document.getElementById('form-title');
    const toggleFormLink = document.getElementById('toggle-form');
    const toggleToLoginLink = document.getElementById('toggle-to-login');

    toggleFormLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
        formTitle.textContent = 'Register';
    });

    toggleToLoginLink.addEventListener('click', function (e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        formTitle.textContent = 'Login';
    });

    document.querySelector('form').addEventListener('submit', function(event) {
        const password = document.getElementById('password').value;
        if (password.length < 8) {
            event.preventDefault();
            alert('Password must be at least 8 characters long');
        }
    });

    document.getElementById('register-form')?.addEventListener('submit', function(e) {
        const password = document.getElementById('password-register')?.value;
        const confirmPassword = document.getElementById('confirm-password')?.value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            e.preventDefault();
        }
        if (password.length < 8) {
            e.preventDefault();
            alert('Password must be at least 8 characters long');
        }
    });
});
