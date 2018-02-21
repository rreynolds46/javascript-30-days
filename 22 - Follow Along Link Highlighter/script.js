const triggers = document.querySelectorAll('a');

const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
    const linkCoords = this.getBoundingClientRect();
    highlight.style.height = `${linkCoords.height}px`;
    highlight.style.width = `${linkCoords.width}px`;
    const left = linkCoords.x - scrollX;
    const top = linkCoords.y + scrollY;
    highlight.style.left = `${left}px`;
    highlight.style.top = `${top}px`;


}

triggers.forEach(link => link.addEventListener('mouseenter', highlightLink));