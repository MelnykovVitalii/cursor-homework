const output = document.querySelector(".output");
const button = document.querySelector(".button");
const input = document.getElementById("input");

button.addEventListener("click", () => {
  console.log(input.value);
  getRandomChinese(input.value).then((result) => {
    output.textContent = result;
  });
});
