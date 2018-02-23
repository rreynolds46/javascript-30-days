let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    clearInterval(countDown);
    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countDown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now())/1000);
        if(secondsLeft < 0) {
            clearInterval(countDown);
            return;
        }
    displayTimeLeft(secondsLeft);
    },1000);
};

function displayTimeLeft(seconds) {
    const mins = Math.floor(seconds/60);
    const remainSecs = (seconds % 60);
    const display = `${mins}:${remainSecs < 10 ? '0' : '' }${remainSecs}`;
    timerDisplay.textContent = display;
    document.title = display;
}

function displayEndTime(timeStamp) {
    const end = new Date(timeStamp);
    const hours = end.getHours();
    const mins = end.getMinutes();
    endTime.textContent = `Be Back At ${hours > 12 ? hours - 12 : hours}:${mins < 10 ? '0' : '' }${mins}`;
}

buttons.forEach(button => button.addEventListener('click', startTimer));

function startTimer() {
    const seconds = parseInt(this.dataset.time);

    timer(seconds);
}

document.customForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const mins = this.minutes.value;
    timer(mins*60);
    this.reset();

})
