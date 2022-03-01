const elements = {
  btnArray: document.getElementById('btn-arr'),
  startBtn: document.getElementById('start-btn'),
  timerText: document.getElementById('first'),
  timerText2: document.getElementById('second')
}

const { 
  btnArray, 
  startBtn, 
  timerText, 
  timerText2 
} = elements;

let timeInSeconds = 0;
let timeInMilliseconds = 0;

timerText.innerHTML = timeInSeconds;
timerText2.innerHTML = timeInMilliseconds;

startBtn.addEventListener('click', () => {
  let stopBtn = document.createElement('button')
  stopBtn.innerText = 'Stop'
  document.body.appendChild(stopBtn)
  stopBtn.onclick = () => {
    window.location.reload()
  }
  setInterval(() => {
    timeInSeconds++;
    timerText.innerHTML = timeInSeconds;
  }, 1000)
  setInterval(() => {
    if (timeInMilliseconds === 250) {
      timeInMilliseconds = 0;
      timeInMilliseconds++;
      timerText2.innerHTML = timeInMilliseconds;
    } else {
      timeInMilliseconds++;
      timerText2.innerHTML = timeInMilliseconds;
    }
  }, 1)
  btnArray.removeChild(startBtn)
})