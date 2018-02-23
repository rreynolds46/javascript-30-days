const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(event) {
    const y = event.pageY - this.offsetTop;
    const percent = y / this.offsetHeight;
    const min = 0.4;
    const max = 4.0;
    const height = Math.round(percent * 100) + "%";
    const playbackRate = percent * (max - min) + min;
    bar.textContent = playbackRate.toFixed(2) + 'x';
    bar.style.height = height;
    video.playbackRate = playbackRate;

});