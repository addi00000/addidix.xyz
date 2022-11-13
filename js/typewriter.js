const element = document.querySelector('.title');
function typeWriter(element) {
    const textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letter, i) => {
        setTimeout(() => element.innerHTML += letter, 200 * i);
    });
}

typeWriter(element);