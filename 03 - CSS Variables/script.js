const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
    const px = 'px';
    console.log(1);
    if(this.name == "spacing" || this.name == "blur") {
        document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
    } else {
        document.documentElement.style.setProperty(`--${this.name}`, this.value);
    }
}

inputs.forEach(input => input.addEventListener('change',handleUpdate));