const pressed = [];
const code = 'wesbos';

window.addEventListener('keyup', (event) => {
    pressed.push(event.key);
    pressed.splice(-code.length - 1, pressed.length - code.length);
    if(pressed.join('') == code) {
        cornify_add();
    }
});