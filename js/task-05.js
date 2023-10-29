const input = document.querySelector('input#name-input');
const output = document.querySelector('span#name-output');
const modal = document.querySelector('.modal');
const modal2 = document.querySelector('.modal2');
const modalImg = document.querySelector('img');
const regex = /^[a-zA-Zа-яА-ЯІіЇ\s]*$/;

input.addEventListener('input', ()=> {
    output.textContent = `${input.value}`;
    if (!regex.test(input.value)) {
        modal.classList.add('facepalm-active');
    } else if (input.value === ``) {
        output.textContent = 'Anonymous'
        modal.classList.remove('facepalm-active');
    } else {
        modal.classList.remove('facepalm-active');
        if (input.value.charAt(0) === input.value.charAt(0).toLowerCase()) {
        modal2.classList.add('facepalm-active');
       setTimeout(() => {
        modal2.classList.remove('facepalm-active');
       }, 3000) 
    }
}
});

