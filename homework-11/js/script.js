async function getRandomChinese(length) {
	let chinaString = "";

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

// getRandomChinese().then((result) => {
// 	console.log(result);
// });
