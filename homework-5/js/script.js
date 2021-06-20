// 1.Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел.
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа.
function getRandomArray(length, min, max) {
	const randomArray = [];
	for (let i = 0; i < length; i++) {
		const randomNumber = Math.round(Math.random() * (max - min) + min);
		randomArray.push(randomNumber);
	}
	return randomArray;
}

// 2.Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getModa(...numbers) {
	let count = 0;
	const sortArray = numbers.sort((a, b) => a - b);

	const countArray = [];

	sortArray.forEach((item, i, arr) => {
		if (item == arr[i + 1]) {
			count++;
		} else count = 1;
		countArray.push(count);
	});
	const maxCount = Math.max(...countArray);
	console.log(maxCount);
	const moda = [];
	countArray.forEach((item, i) => {
		if (item == maxCount) {
			moda.push(sortArray[i]);
		}
	});

	return countArray;
}

// console.log(getModa(3, 5, 6, 7, 6, 6, 5, 5));
// console.log(getRandomArray(16, 1, 9));
// 3.Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getAverage(...numbers) {
	const filterArray = numbers.filter((number) => Number.isInteger(number));
	const total = filterArray.reduce((prev, number) => prev + number);

	return total / filterArray.length;
}

// console.log(getAverage(10, 2, 3, 2.5));

// 5.Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
	const evenNumbers = numbers.filter((number) => number % 2 != 0);
	return evenNumbers;
}

// 4.Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
function getMedian(...numbers) {
	let median = 0;

	const filterArray = numbers
		.filter((number) => Number.isInteger(number))
		.sort((a, b) => a - b);
	const arrayLength = filterArray.length;
	const index = Math.round(arrayLength / 2);

	if (arrayLength % 2 == 0) {
		median = (filterArray[index] + filterArray[index - 1]) / 2;
	} else {
		median = filterArray[index - 1];
	}

	return median;
}

console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));
// console.log(filterEvenNumbers(1, 4, 6, 7, 11, 20));
// 6.Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0

function countPositiveNumbers(...numbers) {
	const countNumbers = numbers.reduce((count, number) => {
		if (number > 0) {
			count++;
		}
		return count;
	}, 0);

	return countNumbers;
}

// console.log(countPositiveNumbers(4, -6, 7, -4, 7, 0, 3));

// 7.Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5

function getDividedByFive(...numbers) {
	if (!numbers) return "Помилка вводу!";
	const dividedByFive = numbers.filter((number) => number % 5 == 0);
	return dividedByFive;
}

// console.log(getDividedByFive(3, 5, 10, 15, 7, 8, 4));

// 8.Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*).
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "),
// після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. Передбачте можливість розширювати список цих слів у майбутньому.
function replaceBadWords(string, ...othersBadWords) {
	if (!string) return "Нічого не введено!";

	const badwordsArray = ["shit", "fuck", ...othersBadWords];
	const arrayWords = string.replace(/ +/g, " ").trim().split(" ");
	const arrayWithoutBadWords = arrayWords.map((word) => {
		const badWorsToRepace = badwordsArray.filter((badWord) => {
			return word.toLowerCase().includes(badWord);
		});

		badWorsToRepace.forEach((badWord) => {
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
	const arr = [];
	for (let i = 0; i < stringFiltered.length; i = i + 3) {
		arr.push(stringFiltered.slice(i, i + 3));
	}
	return arr;
}
console.log(divideByThree("dsfsfs hggh "));
