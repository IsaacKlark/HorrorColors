const color1 = "#F20000";
const color2 = "#1700DE";
let state = true;

const p = document.querySelectorAll("p");
const h2 = document.querySelectorAll("h2");

setInterval(() => {
  for (let i = 0; i < p.length; i++) {
    p[i].style.color = state ? color1 : color2;
  }
  for (let i = 0; i < h2.length; i++) {
    h2[i].style.color = state ? color1 : color2;
  }

  document.body.style.backgroundColor = state ? color2 : color1;
  state = !state;
}, 10);