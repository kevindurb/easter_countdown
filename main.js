const easter = new Date('2020-04-12T00:00:00-06:00');
const $body = document.body;
const $days = $body.querySelector('#days');
const $hours = $body.querySelector('#hours');
const $minutes = $body.querySelector('#minutes');
const $seconds = $body.querySelector('#seconds');

function pluralize(num, word) {
  if (num === 1) {
    return `${num} ${word}`;
  }
  return `${num} ${word}s`;
}

function render() {
  const now = new Date();
  const days = (easter - now) / 1000 / 60 / 60 / 24;
  const hours = (days - Math.floor(days)) * 24;
  const minutes = (hours - Math.floor(hours)) * 60;
  const seconds = (minutes - Math.floor(minutes)) * 60;

  $days.textContent = pluralize(Math.floor(days), 'day');
  $hours.textContent = pluralize(Math.floor(hours), 'hour');
  $minutes.textContent = pluralize(Math.floor(minutes), 'minute');
  $seconds.textContent = pluralize(Math.floor(seconds), 'second');

  window.requestAnimationFrame(render);
}

window.requestAnimationFrame(render);
