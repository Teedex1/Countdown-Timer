let countdown;

function startTimer() {
    let hours = document.getElementById('hours').value;
    let totalSeconds = hours * 3600;

    countdown = setInterval(function() {
        let displayHours = Math.floor(totalSeconds / 3600);
        let remainderMinutes = totalSeconds % 3600;
        let displayMinutes = Math.floor(remainderMinutes / 60);
        let displaySeconds = remainderMinutes % 60;

        if (displayHours < 10) {
            displayHours = "0" + displayHours;
        }
        if (displayMinutes < 10) {
            displayMinutes = "0" + displayMinutes;
        }
        if (displaySeconds < 10) {
            displaySeconds = "0" + displaySeconds;
        }

        document.getElementById('display').textContent = 
            displayHours + ':' + displayMinutes + ':' + displaySeconds;

        if (totalSeconds === 0) {
            clearInterval(countdown);
            alert('Time is up!');
        }

        totalSeconds--;

    }, 1000);
}

function stopTimer() {
    clearInterval(countdown);
    document.getElementById('hours').value = '';
    document.getElementById('display').textContent = '00:00:00';
}
