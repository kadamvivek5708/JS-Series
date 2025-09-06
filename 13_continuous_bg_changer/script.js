let start = document.getElementById('start');
let stop = document.getElementById('stop');
let body = document.getElementById('body');

let randomcolor = function () {
  const hex = '123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 15)];
  }
  return color;
};

let coloor = () => (body.style.backgroundColor = randomcolor());
let intervalID
let change = function () {
  if(!intervalID){
    intervalID = setInterval(coloor, 1000);
  }
};

let notchange = function () {
  clearInterval(intervalID);
  intervalID = null;
};

start.addEventListener('click', change);
stop.addEventListener('click', notchange);
