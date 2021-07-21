const buttonIdGenerator = document.querySelector(".id-generator");
const outputID = document.querySelector(".output-id-generator");
const btnUp = document.querySelector(".generator-up");
const btnDown = document.querySelector(".generator-down");
const fontBlock = document.querySelector(".output-font-generator");

function* createIdGenerator() {
	let i = 0;
	while (true) {
		yield i++;
	}
}

const idGenerator = createIdGenerator();

function* newFontGenerator(fontSize = 14) {
	let res = yield fontSize;

	while (true) {
		if (res === "up") {
			res = yield (fontSize += 2);
		} else if (res === "down") {
			res = yield (fontSize -= 2);
		} else {
			res = yield fontSize;
		}
	}
}

const fontGenerator = newFontGenerator(14);

buttonIdGenerator.addEventListener("click", () => {
	outputID.innerHTML = `ID = ${idGenerator.next().value}`;
});

btnUp.addEventListener("click", () => {
	let fontSize = fontGenerator.next().value;

	if (fontSize < 50) {
		fontSize = fontGenerator.next("up").value;
		fontBlock.style.fontSize = `${fontSize}px`;
	} else {
		fontBlock.style["font-size"] = fontSize;
	}
});

btnDown.addEventListener("click", () => {
	let fontSize = fontGenerator.next().value;

	if (fontSize > 14) {
		fontSize = fontGenerator.next("down").value;
		fontBlock.style.fontSize = `${fontSize}px`;
	} else {
		fontBlock.style["font-size"] = fontSize;
	}
});
