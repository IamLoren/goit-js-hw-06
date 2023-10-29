const input = document.getElementById('validation-input');
const errorMessge1 = document.querySelector('.error');
const successMessage = document.querySelector('.success');

function removeModal() {
     const existingModal = input.nextElementSibling;
        if (existingModal && existingModal.classList.contains('modal')) {
          existingModal.remove();
        }
}

function createModal(validationResult) {
    const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
      <p class='modal-text'>${validationResult 
        ? 'YOU ARE JUST THE BEST!' 
        : 'Ну написано ж було - 6 символів!'}</p>
      <img class='modal-img' src='${validationResult 
        ? 'https://dandizettecharm.files.wordpress.com/2010/05/002432788846.jpg?w=500&h=333' 
        : 'https://i.kym-cdn.com/entries/icons/original/000/000/554/picard-facepalm.jpg'}' alt='facepalm'>
    `;
    input.insertAdjacentElement('afterend', modal);
}

input.addEventListener('blur', () => {
    if (input.value.length === 6) {
        input.classList.remove('invalid');
        input.classList.add('valid');
        removeModal();
        createModal(true);
      } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        removeModal();
        createModal(false);
  }
})