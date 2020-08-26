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
    lander.rotat -= 3;
  }
  if (key === "d") {
    lander.rotat += 3;
  }
  if (key === "w") {
    lander.vy -= Math.cos(lander.rotat/360*6.28)*0.02;
    lander.vx += Math.sin(lander.rotat/360*6.28)*0.02;
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

g = 0.001;

function step() {
  lander.posx += lander.vx;
  if (falling(lander) || lander.vy < 0) {
    lander.posy += lander.vy;
    lander.vy += g;
  } else {
    lander.vy = 0;
    lander.vx *= 0.9;
  }
  lander.style["transform-origin"] = `50% 50%`;
  rotat(lander.rotat);
  landerBox.style.top = `${lander.posy}%`;
  landerBox.style.left = `${lander.posx}%`;
}

function falling(lander) {
  if (lander.posy > 75) {
    return false;
  } else {
    return true;
  }
}

document.onkeydown = checkKey;
setInterval(step, 10);
