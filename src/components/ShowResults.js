const showResults = () => {

  document.querySelector(`.results-panel`).classList.toggle('vissible');

  document.querySelector('.results-item').innerHTML = '';

  let results = [];

  for ( let i = 0, len = localStorage.length; i < len; ++i ) {
    results.push(localStorage.getItem(localStorage.key(i)));
  }

  results.sort((a, b) => a - b);

  results.reverse();

  for ( let i = 0, len = results.length; i < len; ++i ) {
    document.querySelector('.results-item').innerHTML += `<div id="result-${i}" class="game-results">Players win ${results[i]} time(s)!</div>`;
  }
}

export default showResults;
