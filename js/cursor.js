const pointer = document.createElement('div');
pointer.classList.add('cursor');
document.body.appendChild(pointer);

document.addEventListener('mousemove', e => {
    pointer.style.left = e.pageX - pointer.offsetWidth / 2 + 'px';
    pointer.style.top = e.pageY - pointer.offsetHeight / 2 + 'px';
});

document.addEventListener('mousedown', () => {
    pointer.style.transform = 'scale(0.5)';
});

document.addEventListener('mouseup', () => {
    pointer.style.transform = 'scale(1)';
});

window.addEventListener('blur', () => {
    pointer.style.display = 'none';
});

window.addEventListener('focus', () => {
    pointer.style.display = 'block';
});

const anchors = document.querySelectorAll('a');
anchors.forEach(anchor => {
    anchor.addEventListener('mouseover', () => {
        pointer.style.borderRadius = '5px';
        pointer.style.transform = 'scale(0.75)';
    });
    anchor.addEventListener('mouseleave', () => {
        pointer.style.borderRadius = '';
        pointer.style.transform = '';
    });
});