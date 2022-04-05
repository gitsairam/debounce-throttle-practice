const input = document.querySelector('input');
const defaultSpan = document.getElementById('default');
const debounceSpan = document.getElementById('debounce');
const throttleSpan = document.getElementById('throttle');

input.addEventListener('input', (e) => {
  defaultSpan.textContent = e.target.value;
  updateDebounceText(e.target.value);
});

const updateDebounceText = debounce((text) => {
  debounceSpan.textContent = text;
});

function debounce(cb, delay = 1000) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cb(...args);
    }, delay);
  };
}
