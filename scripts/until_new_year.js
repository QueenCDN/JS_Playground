const daysDisplay = document.getElementById('days');
const hoursDisplay = document.getElementById('hours');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const displayTimer = () => {
    const nowDate = new Date(); // нынешненяя дата
    const newYearDate = new Date((new Date().getFullYear()+ 1), 0, 1); // дата нового года

    const difference = Math.max(0, newYearDate - nowDate); // вычитаемая разница дат

    const Days = Math.floor(difference/(24*60*60*1000)); // математическое преобразование единиц времени в миллисекунды
    const Hours = Math.floor((difference/(60*60*1000)) % 24);
    const Minutes = Math.floor((difference/(60*1000)) % 60);
    const Seconds = Math.floor((difference/(1000) % 60));
    
    daysDisplay.textContent = String(Days).padStart(2, "0");
    hoursDisplay.textContent = String(Hours).padStart(2, "0");
    minutesDisplay.textContent = String(Minutes).padStart(2, "0");
    secondsDisplay.textContent = String(Seconds).padStart(2, "0");

    if (difference <= 0) {
        clearInterval(updateTimer);
    }
}

displayTimer();
const updateTimer = setInterval(displayTimer, 1000);