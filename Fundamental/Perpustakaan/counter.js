function stopCounter() {
  document.getElementById("waktuPembayaran").hidden = true;
  clearInterval(stopwatch);
  seconds = 5;
  minutes = 0;
}

let stopwatch;

function startCounter() {
  let seconds = 0;
  let minutes = 1;
  stopwatch = setInterval(() => {
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);

    seconds -= 1;

    if (seconds < 10) {
      seconds = "0" + seconds;
      document.getElementById("seconds").innerHTML = seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    if (minutes == 1) {
      minutes = "0" + (minutes - 1);
      seconds = 5;

      if (seconds < 10) {
        seconds = "0" + seconds;
      }
      if (minutes > 0 && seconds == 0) {
        minutes = 0;
        seconds = 59;
      }
    }
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("minutes").innerHTML = minutes;
    if (seconds < 1 && minutes < 1) {
      clearInterval(stopwatch);
      alert("waktu habis");
      document.getElementById("waktuPembayaran").hidden = true;
    }
  }, 1000);
}
