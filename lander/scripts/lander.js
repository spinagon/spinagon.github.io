function getLander(n) {
  return document.getElementById(`lander${n}`);
}

function rotat(n) {
  getLander(1).style.transform = `rotate(${n}deg)`;
}

function checkKey(e) {
  e = e || window.event;
  key = e.key;
  if (key === "a") {
    lander.rotat -= 1;
  }
  if (key === "d") {
    lander.rotat += 1;
  }
  if (key === "w") {
    lander.vy -= Math.cos(lander.rotat/360*6.28)*0.01;
    lander.vx += Math.sin(lander.rotat/360*6.28)*0.01;
  }
  if (key === "s") {
    lander.vy += 0.03;
  }
}

lander = getLander(1);
landerBox = document.querySelector('.lander-box');
lander.rotat = 0;
lander.posx = 50;
lander.posy = 0;
lander.vx = 0;
lander.vy = 0.1;

function step() {
  lander.posx += lander.vx;
  lander.posy += lander.vy;
  lander.vy += 0.0005;
  lander.style["transform-origin"] = `50% 50%`;
  rotat(lander.rotat);
  landerBox.style.top = `${lander.posy}%`;
  landerBox.style.left = `${lander.posx}%`;
}

document.onkeydown = checkKey;
setInterval(step, 20);
