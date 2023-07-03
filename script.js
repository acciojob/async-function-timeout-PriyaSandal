//your JS code here. If required.

const inputText = document.getElementById('text');
const inputDelay = document.getElementById('delay');
const btn = document.getElementById('btn');
const outputDiv = document.getElementById('output');
  const text = inputText.value;
  const delay = parseInt(inputDelay.value);
  await new Promise(resolve => setTimeout(resolve, delay));
outputDiv.textContent = text;
}
btn.addEventListener('click', () => {
  displayMessageWithDelay();
});