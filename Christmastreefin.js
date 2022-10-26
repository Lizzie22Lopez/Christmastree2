//const btn = document.getElementById('btn');

//btn.innerHTML = 'START';

// Change button text on click
//btn.addEventListener('click', function handleClick() {
// const initialText = 'START';

// btn.innerHTML = `STOP`;
//});

// change color
//btn.addEventListener('click', function onClick() {
//btn.style.backgroundColor = '#ff3030';
//btn.style.color = 'white';
//});

function sparkling() {
  let text = document.getElementById("Christmas");
  let Xmas = document.getElementById("Xmas");
  let red = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  text.style.color = `rgb(${red},${green},${blue})`;
  Xmas.innerHTML = `rgb(${red},${green},${blue})`;
}

function start() {
  start_color = setInterval(sparkling, 1000);
}

function stop() {
  clearInterval(start_color);
}
