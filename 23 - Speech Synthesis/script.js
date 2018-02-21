const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"').value;

function populateVoices() {
    voices = this.getVoices();
    console.log(voices);
    voicesDropdown.innerHTML = voices
    .filter(voice => voice.lang.includes('en'))
    .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
    .join('');
}

function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

function toggle(startOver = true) {
    speechSynthesis.cancel();
    if(startOver == true) {
        speechSynthesis.speak(msg);
    }
}


function setOption() {
    console.log(this.value);
    msg[this.name] = this.value;
    toggle();
}

speakButton.addEventListener('click',() => toggle(true));
stopButton.addEventListener('click',() => toggle(false));
speechSynthesis.addEventListener('voiceschanged',populateVoices);
voicesDropdown.addEventListener('change',setVoice);
options.forEach(option => option.addEventListener('change',setOption));