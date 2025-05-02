//your JS code here. If required.
const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');
    const existingButton = document.getElementById('existing');

    // Check if credentials are saved
    window.addEventListener('DOMContentLoaded', () => {
      const savedUsername = localStorage.getItem('username');
      const savedPassword = localStorage.getItem('password');
      if (savedUsername && savedPassword) {
        existingButton.style.display = 'inline-block';
      }
    });

    // Handle form submission
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const username = usernameInput.value;
      const password = passwordInput.value;

      alert(`Logged in as ${username}`);

      if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingButton.style.display = 'inline-block';
      } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
      }
    });

    // Handle existing user login
    existingButton.addEventListener('click', () => {
      const savedUsername = localStorage.getItem('username');
      if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
      }
    });