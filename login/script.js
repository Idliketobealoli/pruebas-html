function showPassword(eyeIcon, passwordInputId) {
    const passwordField = document.getElementById(passwordInputId);

    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.setAttribute('name', 'eye-outline');
    } else {
        passwordField.type = 'password';
        eyeIcon.setAttribute('name', 'eye-off-outline');
    }
}