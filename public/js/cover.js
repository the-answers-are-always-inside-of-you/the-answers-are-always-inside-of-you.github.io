'use strict'

function randomBG(randomArray) {
  var random =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  return random;
}

function sentenceGenerator() {
  const cover = document.querySelector("#cover")
  let sentence = `url(${randomBG(randomBGArr)})`;
  cover.style.backgroundImage = sentence;
  cover.style.backgroundSize = "cover";
  cover.style.transition = "2s";
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'interactive') {
    window.setInterval(function () {
      sentenceGenerator();
    }, 2000);
    sentenceGenerator();
  }
});