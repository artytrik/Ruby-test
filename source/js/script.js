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

document.querySelector(`.ruby__svg-text`).onmouseover = () =>
  document.querySelector(`.ruby`).style.backgroundColor = `#4d71cf`;

document.querySelector(`.ruby__svg-text`).onmouseout = () =>
  document.querySelector(`.ruby`).style.backgroundColor = `white`;
