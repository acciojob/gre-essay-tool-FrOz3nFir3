const input = document.getElementById("evaluatedText");
const wordCount = document.getElementById("wordCount");

input.addEventListener("input", countWords);

const wordsRegex = /[a-z]+/gi;
function countWords() {
  let value = input.value.trim();
  let wordsLength = (value.match(wordsRegex) || []).length;
  wordCount.innerText = String(wordsLength);
}
