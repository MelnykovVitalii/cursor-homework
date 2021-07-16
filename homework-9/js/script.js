const wrapper = document.querySelector(".square-wrapper");

function randomColor() {
  const firstNumber = Math.trunc(Math.random() * 256);
  const secondNumber = Math.trunc(Math.random() * 256);
  const thirdNumber = Math.trunc(Math.random() * 256);

  return `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
}

function createBlock(size, color) {
  const block = document.createElement("div");

  block.classList.add("row");
  block.style.width = `${size}px`;
  block.style.height = `${size}px`;
  block.style.backgroundColor = color;
  return block;
}

function generateBlocks(size) {
  wrapper.style["max-width"] = `${size * 5}px`;
  const blocksQuantity = 25;

  for (let i = 0; i < blocksQuantity; i++) {
    const block = createBlock(size, randomColor());
    wrapper.append(block);
  }
}

generateBlocks(50);

function generateBlocksInterval() {
  const arrayNewBlocks = document.querySelectorAll(".row");

  setInterval(() => {
    arrayNewBlocks.forEach((block) => {
      block.style.backgroundColor = randomColor();
    });
  }, 1000);
}

generateBlocksInterval();
