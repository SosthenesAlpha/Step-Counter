let clock = 0;
let clockDiv = document.createElement('div');
clockDiv.innerHTML = clock;
document.body.appendChild(clockDiv);
let startButton = document.createElement('button');
startButton.innerHTML = 'Start';
document.body.appendChild(startButton);
let stopButton = document.createElement('button');
stopButton.innerHTML = 'Stop';
document.body.appendChild(stopButton);
let intervalId;
startButton.addEventListener('click', function() {
  intervalId = setInterval(function() {
    clock++;
    clockDiv.innerHTML = clock;
  }, 1000);
});
stopButton.addEventListener('click', function() {
  clearInterval(intervalId);
});