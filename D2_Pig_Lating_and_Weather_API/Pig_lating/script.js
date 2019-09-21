const output = document.getElementById("output");
const submitBtn = document.getElementById("btn");
const input = document.getElementById("input");

submitBtn.addEventListener("click", () => {
  let word = input.value;
  let lastChar = word.slice(0, 1);
  output.innerHTML = word.replace(word[0], " ") + "ya" + lastChar.toLowerCase();
});
