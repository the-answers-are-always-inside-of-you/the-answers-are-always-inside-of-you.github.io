'use strict'

function randomBG(randomArray) {
  var random =
    randomArray[Math.floor(Math.random() * randomArray.length)];
  return random;
}

function sentenceGenerator() {
  const cover = document.querySelector("#cover")
  let sentence = `url(${randomBG(random)})`;
  cover.style.backgroundImage = sentence;
  cover.style.transition = "2s";
}

document.addEventListener('readystatechange', event => {
  if (event.target.readyState === 'loading') {
    // 文書の読み込み中に実行する
  } else if (event.target.readyState === 'interactive') {
    window.setInterval(function () {
      sentenceGenerator();
    }, 2000);
    sentenceGenerator();
  } else if (event.target.readyState === 'complete') {
    //
  }
});