// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
function getRandomArray(length, min, max) {
	if (!length || !min || !max) return "Помилка вводу";
	const randomArray = [];
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.round(Math.random() * (max - min) + min);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

console.log(getRandomArray(6, 5, 15));

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getModa(...numbers) {
	let count = 1;
	const sortArray = numbers
		.filter((number) => Number.isInteger(number))
		.sort((a, b) => a - b);
	const countArray = [];

	sortArray.forEach((item, i, arr) => {
		if (item === arr[i + 1]) {
			count++;
		} else count = 1;
		countArray.push(count);
	});
	const maxCount = Math.max(...countArray);
	const moda = [];
	countArray.forEach((item, i) => {
		if (item === maxCount) {
			moda.push(sortArray[i]);
		}
	});

	return moda;
}

console.log(getModa(3, 3, 5, 5));

// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers) {
	const filterArray = numbers.filter((number) => Number.isInteger(number));
	const total = filterArray.reduce((prev, number) => prev + number);

	return total / filterArray.length;
}

console.log(getAverage(10, 2, 3, 2.5));

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
	const evenNumbers = numbers.filter((number) => number % 2 != 0);
	return evenNumbers;
}

console.log(filterEvenNumbers(2, 7, 5));

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers) {
	let median = 0;

	const filterArray = numbers
		.filter((number) => Number.isInteger(number))
		.sort((a, b) => a - b);
	const arrayLength = filterArray.length;
	const index = Math.round(arrayLength / 2);

	if (arrayLength % 2 === 0) {
		median = (filterArray[index] + filterArray[index - 1]) / 2;
	} else {
		median = filterArray[index - 1];
	}

	return median;
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));

// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
	const countNumbers = numbers.reduce((count, number) => {
		number > 0 ? count++ : count;
		return count;
	}, 0);

	return countNumbers;
}

console.log(countPositiveNumbers(4, -6, 7, -4, 7, 0));

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
	if (!numbers.length) return "Помилка вводу!";
	const dividedByFive = numbers.filter((number) => number % 5 == 0);
	return dividedByFive;
}

console.log(getDividedByFive(5, 4, 81, 75));

// 8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
// після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
function replaceBadWords(string, ...othersBadWords) {
	if (!string) return "Нічого не введено!";

	const badwordsArray = ["shit", "fuck", ...othersBadWords];
	const arrayWords = string.replace(/ +/g, " ").trim().split(" ");
	const arrayWithoutBadWords = arrayWords.map((word) => {
		const badWordsToReplace = badwordsArray.filter((badWord) => {
			return word.toLowerCase().includes(badWord);
		});

		badWordsToReplace.forEach((badWord) => {
			const stars = "*".repeat(badWord.length);
			word = word.toLowerCase().replaceAll(badWord, stars);
		});

		return word;
	});
	return arrayWithoutBadWords.join(" ");
}

console.log(replaceBadWords("Are you fucking kidding?", ""));

// 9.Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви.
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру.

function divideByThree(string) {
	if (!string) return "Нічого не введено!";
	const stringFiltered = string.toLowerCase().replace(/ +/g, "");
	const divideByThreeArr = [];
	for (let i = 0; i < stringFiltered.length; i = i + 3) {
		divideByThreeArr.push(stringFiltered.slice(i, i + 3));
	}
	return divideByThreeArr;
}
console.log(divideByThree("live"));
