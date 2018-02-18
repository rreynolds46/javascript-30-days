const allPanels = document.querySelectorAll(".panel");

function toggleOpen() {
    this.classList.toggle('open');
};

function toggleActive(e) {
    if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
};

allPanels.forEach(panel => panel.addEventListener('click',toggleOpen));
allPanels.forEach(panel => panel.addEventListener('transitionend',toggleActive));