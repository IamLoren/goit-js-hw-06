const input = document.getElementById('font-size-control');
const text = document.getElementById('text');
input.value = input.min;

input.addEventListener('input', () => {
    text.style.fontSize = `${input.value}px`;
})