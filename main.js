let hours = 0;
let mins = 0;
let secs = 0;
let mili = 0;
let timeRef = document.getElementById("time");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
let int = null;

start.addEventListener("click", () => {
  if (int != null) {
    clearInterval(int);
  }
  int = setInterval(() => {
    startTimer();
  }, 10);
});

function startTimer() {
  mili += 10;
  if (mili == 1000) {
    mili = 0;
    secs++;
    if (secs == 60) {
      secs = 0;
      mins++;
      if (mins == 60) {
        mins = 0;
        hours++;
      }
    }
  }

  let h = hours < 10 ? "0" + hours : hours;
  let m = mins < 10 ? "0" + mins : mins;
  let s = secs < 10 ? "0" + secs : secs;
  let ml =
    Math.floor(mili / 10) < 10
      ? "0" + Math.floor(mili / 10)
      : Math.floor(mili / 10);

  timeRef.innerText = `${h}:${m}:${s}.${ml}`;
}

stop.addEventListener("click", () => {
  clearInterval(int);
});

reset.addEventListener("click", () => {
  clearInterval(int);
  hours = 0;
  mins = 0;
  secs = 0;
  mili = 0;
  timeRef.innerText = "00:00:00";
});
