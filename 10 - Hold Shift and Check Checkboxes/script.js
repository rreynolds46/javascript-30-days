const checks = document.querySelectorAll(".inbox input[type='checkbox']");

let lastChecked;

function toggleChecked(event) {
    let inBetween = false;
    if(event.shiftKey && this.checked) {
        checks.forEach(check => {
            if(check === this || check === lastChecked) {
                inBetween = !inBetween;
            }
            if(inBetween) {
                check.checked = true;
            }
        });
    }
    
    
    lastChecked = this;
};

checks.forEach(check => check.addEventListener('click',toggleChecked));