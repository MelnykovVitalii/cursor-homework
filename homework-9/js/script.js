const wrapper = document.querySelector(".square-wrapper");

function randomColor() {
  const firstNumber = Math.trunc(Math.random() * 256);
  const secondNumber = Math.trunc(Math.random() * 256);
  const thirdNumber = Math.trunc(Math.random() * 256);
  return `rgb(${firstNumber},${secondNumber},${thirdNumber})`;
}

function createParentBlock() {
  const parentBlock = document.createElement("div");
  parentBlock.classList.add("row");
  return parentBlock;
}

function createChildBlock(size, color) {
  const childBlock = document.createElement("div");
  childBlock.classList.add("colum");
  childBlock.style.width = `${size}px`;
  childBlock.style.height = `${size}px`;
  childBlock.style.backgroundColor = color;
  return childBlock;
}

function generateBlocks(size, rows, colums) {
  for (let i = 0; i < rows; i++) {
    const rowDiv = createParentBlock();

    for (let j = 0; j < colums; j++) {
      const columDiv = createChildBlock(size, randomColor());
      rowDiv.append(columDiv);
    }

    wrapper.append(rowDiv);
  }
}

generateBlocks(50, 5, 5);

function generateBlocksInterval() {
  const arrayNewBlocks = document.querySelectorAll(".colum");
  setInterval(() => {
    arrayNewBlocks.forEach((block) => {
      block.style.backgroundColor = randomColor();
    });
  }, 1000);
}

generateBlocksInterval();
