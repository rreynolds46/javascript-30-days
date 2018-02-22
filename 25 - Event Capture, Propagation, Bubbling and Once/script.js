const allDivs = document.querySelectorAll('div');

function logText(event) {
    console.log(this.classList.value);
    event.stopPropagation();
}

allDivs.forEach(div => div.addEventListener('click',logText, {
    capture:false
}));