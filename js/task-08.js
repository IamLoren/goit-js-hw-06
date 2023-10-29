
const form = document.querySelector('.login-form');
const submitButton = document.querySelector('[type="submit"]');

function getEmailValue() {
    let email = document.querySelector('input[type="email"]');
    if(!email.value) {
        createErrorMessage('email');
        return;
    } else {
        return email.value;
    }
}

function getPasswordValue() {
    let password = document.querySelector('input[type="password"]');
    if(!password.value) {
        createErrorMessage('password');
        return;
    } else {
        return password.value;
    }
}

function createErrorMessage(typeOfInput) {
    let error = document.createElement('div');
    error.classList.add('error-message', `${typeOfInput === 'email' 
    ? 'error-message-email' 
    : 'error-message-password'}`);
    error.textContent = `${typeOfInput === 'email' 
    ? 'Ви не заповнили поле "e-mail"' 
    : 'Ви не заповнили поле "password"'}`;
    form.insertAdjacentElement('afterend', error);
}

function removeErrorMessage() {
    document.querySelectorAll('.error-message').forEach(errorMessage => {
            errorMessage.remove();
          });
}

form.addEventListener('submit', (event) => {
    removeErrorMessage();
    event.preventDefault();
    const emailInput = getEmailValue();
    const passwordInput = getPasswordValue();
    if (emailInput && passwordInput) {
        console.table({ emailInput, passwordInput });
        form.reset();
        removeErrorMessage()
    }
})