let counterValue = 0;
const decrBtn = document.querySelector('[data-action="decrement"]');
const incrBtn = document.querySelector('[data-action="increment"]');
const output = document.getElementById('value');

decrBtn.addEventListener('click', () => {
    decrBtn.classList.add('animation');
    counterValue -= 1;
    output.textContent = `${counterValue}`;
    setTimeout(() => {
        decrBtn.classList.remove('animation');
    }, 200)
})

incrBtn.addEventListener('click', () => {
    incrBtn.classList.add('animation');
    counterValue += 1;
    output.textContent = `${counterValue}`;
    setTimeout(() => {
        incrBtn.classList.remove('animation');
    }, 200)
})