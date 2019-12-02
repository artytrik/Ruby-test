const counter = () => {
  let count = 1;
  const block = document.getElementById('svg-text');
  const interval = setInterval(() => {
    count++;
    block.innerHTML = `&nbsp;&nbsp;${count}&nbsp;&nbsp;`;

    if(count === 4) {
      clearInterval(interval);
      block.innerHTML = `Go!`;
    }
  }, 500);
  block.innerHTML = `&nbsp;&nbsp;${count}&nbsp;&nbsp;`;
};

setInterval(() => (counter()), 4000);

document.querySelector(`.svg-text`).onmouseover = () =>
  document.querySelector(`.meow`).style.backgroundColor = `#4d71cf`;

document.querySelector(`.svg-text`).onmouseout = () =>
  document.querySelector(`.meow`).style.backgroundColor = `white`;
