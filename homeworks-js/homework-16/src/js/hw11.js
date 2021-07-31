import "../styles/hw11.css";

export async function getRandomChinese(length) {
	const message = "Введіть число більше 0";
	let chinaString = "";

	if (!length || length <= 0) return message;

	while (chinaString.length < length) {
		const promise = new Promise((resolve) => {
			setTimeout(() => {
				const string = Date.now().toString().slice(-5);
				const chinaCharacter = String.fromCharCode(string);
				resolve(chinaCharacter);
			}, 50);
		});

		chinaString += await promise;
	}

	return chinaString;
}
