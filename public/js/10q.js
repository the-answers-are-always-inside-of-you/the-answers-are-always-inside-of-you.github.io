'use strict'

async function index10Q(requestURL) {
    const request = new Request(requestURL);
    const response = await fetch(request);
    const jsonIndex = await response.text();

    const index = JSON.parse(jsonIndex);
    all10Q(index);
}

function shuffle(arrays) {
  const array = arrays.slice()
  for (let i = array.length - 1; i >= 0; i--) {
    const shuffleArr = Math.floor(Math.random() * (i + 1));
    [array[i], array[shuffleArr]] = [array[shuffleArr], array[i]]
  }
  return array
}

function all10Q(q) {
    const by = document.querySelector('#by');
    by.textContent = q.by
    const as = document.querySelector('#as');
    as.textContent = q.as
    const text = document.querySelector('#text');
    const textAll = q.text
    for (const i of textAll) {
        text.innerHTML += i + "<br>"
      }

    const link = document.querySelector('#link');
    const links = q.link;
    for (const ii of links) {
        const a = document.createElement('a');
        a.href = ii.url;
        a.setAttribute('target', '_blank')
        a.textContent = ii.title;
        link.appendChild(a);
    }

    const questions = shuffle(q.questions);
    for (const q of questions) {
        const allQ = document.querySelector('#questions');
        const question = document.createElement('article');
        question.className = "question";
        question.id = q.id;

        const h3 = document.createElement('h3');
        h3.innerHTML = `
        <strong>${q.question}</strong>
        <small>${q.jp}</small>
        `;

        const section = document.createElement('section');
        section.innerHTML = `
        <input name="${q.id}" id="${q.id}_left" value="${q.id}_left" type="radio" required/>
        <label for="${q.id}_left">
        <strong>${q.yes}</strong>
        <small>${q.left}</small>
        </label>
        <input name="${q.id}" id="${q.id}_right" value="${q.id}_right" type="radio" required/>
        <label for="${q.id}_right">
        <strong>${q.no}</strong>
        <small>${q.right}</small>
        </label>
        `;

        allQ.appendChild(question);
        question.appendChild(h3);
        question.appendChild(section);
    }
}

index10Q()