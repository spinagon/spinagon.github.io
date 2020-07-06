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
}

lander = getLander(1);
landerBox = document.querySelector('.lander-box');
lander.rotat = 0;
lander.pos = 0;
pos = 0

function step() {
  lander.pos = `${pos}px`;
  pos += 1;
  lander.style["transform-origin"] = `50% 50%`;
  rotat(lander.rotat);
  landerBox.style.top = lander.pos;
}

document.onkeydown = checkKey;
setInterval(step, 20);
