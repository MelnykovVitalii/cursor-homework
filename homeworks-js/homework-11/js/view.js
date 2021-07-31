const output = document.querySelector(".output");
const button = document.querySelector(".button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  getRandomChinese(input.value).then((result) => {
    output.textContent = result;
  });
});
