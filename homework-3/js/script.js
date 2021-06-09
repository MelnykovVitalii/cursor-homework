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

// Функція визначення максимальної цифри
function getMaxDigit(value) {
	if (isNaN(value) || value.trim() === "") {
		return "Помилка вводу";
	}

	const digits = value.split("");
	return Math.max(...digits);
}

// const a = "45459755";
// console.log(getMaxDigit(a));

// Функція форматування імені

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

function calculateRevenue(salary) {
	if (isNaN(salary) || Number(salary) === 0) {
		return "Помилка вводу";
	}

	const tax = (Number(salary) * 19.5) / 100;
	const revenue = Number(salary) - tax;
	return revenue;
}

// const r = "";
// console.log(calculateRevenue(r));

// function getRandomNumber(num1, num2) {
// 	if (isNaN(num1) || isNaN(num2)) {
// 		return "Помилка вводу";
// 	}
// }
