// const str = "123546";
// let arr = [];
// for (let i = 0; i < str.length; i++) {
//   arr[i] = str[i];
// }
// // console.log(Math.max(...arr));

// function maxDigit(num) {
//   let result = -1;
//   for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     console.log(i);
//     let digit = i % 10;
//     console.log("dig", digit);
//     if (result < digit) result = digit;
//   }
//   return console.log(result);
// }

// maxDigit(123456);

// Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі.
// function getMaxDigit(...number) {
// 	let arr = [];
// 	arr = Array.from(String(number));
// 	// console.log(arr);
// 	return console.log(Math.max(...arr));
// }

// 1.Функція визначення максимальної цифри
function getMaxDigit(value) {
	if (isNaN(value) || value.trim() === "") {
		return "Помилка вводу";
	}

	const digits = value.split("");
	return Math.max(...digits);
}

// const a = "45459755";
// console.log(getMaxDigit(a));

// 3.Функція форматування імені
function setFirstLetterToUpper(name) {
	if (!name || name.trim() === "") {
		return "Помилка вводу";
	}
	name = name.trim();
	name = name[0].toUpperCase() + name.slice(1).toLowerCase();
	return name;
}

// const ads = "   d sdf ghf    ";
// console.log(setFirstLetterToUpper(ads));

// 4.Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати.
function calculateRevenue(salary) {
	if (isNaN(salary) || Number(salary) === 0) {
		return "Помилка вводу";
	}

	const tax = (Number(salary) * 19.5) / 100;
	const revenue = Number(salary) - tax;
	return revenue;
}

// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomNumber(num1, num2) {
	if (
		(isNaN(num1) || num1.trim() === "") &&
		(isNaN(num2) || num2.trim() === "")
	) {
		return "Помилка вводу";
	}

	num1 = Number(num1);
	num2 = Number(num2);
	const min = Math.min(num1, num2);
	const max = Math.max(num1, num2);
	const randomNumber = Math.random() * (max - min) + min;
	return Math.round(randomNumber);
}

// const a = "4";
// const n = "6";

// console.log(getRandomNumber(a, n));

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
function getCountLetter(char, string) {
	if ((!char || char.trim() === "") && (!string || string.trim() === "")) {
		return "Помилка вводу";
	}

	let countLetter = string.match(new RegExp(char, "gi"));
	return countLetter === null ? (countLetter = 0) : countLetter.length;
}

// const r = " tr";
// const u = " r";
// console.log(getCountLetter(u, r));

// const str = "ggdgHhdjguhh";
// const char = "g";

// console.log(str.match(new RegExp(char, "gi")));
