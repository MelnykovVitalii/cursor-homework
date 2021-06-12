// 1.Функція визначення максимальної цифри
function getMaxDigit(value) {
	if (isNaN(value) || value.trim() === "") {
		return "Помилка вводу";
	}

	const digits = value.split("");
	return Math.max(...digits);
}

// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function numberInPower(number, pow) {
	if (
		isNaN(number) ||
		number.trim() === "" ||
		isNaN(pow) ||
		pow.trim() === "" ||
		!Number.isInteger(Number(pow))
	) {
		return "Помилка! Вводити потрібно тільки цифри, ступінь повинна бути цілим числом.";
	}

	number = Number(number);
	pow = Number(pow);
	let result = 1;

	for (let i = 0; i < Math.abs(pow); i++) {
		result *= number;
	}

	return (result = pow > 0 ? result : 1 / result);
}

// 3.Функція форматування імені
function setFirstLetterToUpper(name) {
	if (!name || name.trim() === "" || Number.isInteger(Number(name))) {
		return "Помилка вводу";
	}

	name = name.trim().replace(/\d/g, "");

	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

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
	if (isNaN(num1) || num1.trim() === "" || isNaN(num2) || num2.trim() === "") {
		return "Помилка вводу";
	}

	num1 = Number(num1);
	num2 = Number(num2);
	const min = Math.min(num1, num2);
	const max = Math.max(num1, num2);
	const randomNumber = Math.random() * (max - min) + min;

	return Math.round(randomNumber);
}

// 6.Створити функцію, яка рахує скільки разів певна буква повторюється в слові.
function getCountLetter(char, string) {
	if (
		!char ||
		char.trim() === "" ||
		!string ||
		string.trim() === "" ||
		Number(char) ||
		Number(string)
	) {
		return "Помилка вводу";
	}

	if (char.length > 1) {
		return "Введіть одну букву";
	}

	let countLetter = string.match(new RegExp(char, "gi"));

	return countLetter === null ? 0 : countLetter.length;
}

// 7.Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку.
function convertCurrency(currency) {
	const valueToconvert = 25;
	const value = parseInt(currency.replace(/[^\d]/g, ""));
	let currencyConvert = 0;

	if (currency.match(/\$/i) !== null) {
		currencyConvert = value * valueToconvert;
	} else if (currency.match(/uan/i) !== null) {
		currencyConvert = value / valueToconvert;
	} else
		return "Неправильно введені дані. Введіть згідно шаблону 123$ чи 123UAN(uan).";

	return currencyConvert;
}

// 8.Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
function getRandomPassword(count = 8) {
	if (isNaN(count)) {
		return "Помилка вводу";
	} else if (Number(count) < 1 || Number(count) > 8) {
		return "Довжина паролю повинна бути в діапазоні від 1 до 8";
	}

	let randomPass = "";

	for (let i = 0; i < count; i++) {
		randomPass += Math.trunc(Math.random() * 10);
	}

	return randomPass;
}

// 9.Створіть функцію, яка видаляє всі букви з речення.
function deleteLetters(char, string) {
	if (
		!char ||
		char.trim() === "" ||
		!string ||
		string.trim() === "" ||
		Number(char) ||
		Number(string)
	) {
		return "Помилка вводу";
	}

	if (char.length > 1) {
		return "Введіть одну букву";
	}

	const newString = string.replace(new RegExp(char, "g"), "");

	return newString;
}

// 10.Створіть функцію, яка перевіряє, чи є слово паліндромом.
function isPalyndrom(string) {
	if (!string || string.trim() === "" || Number(string) || string.length == 1) {
		return "Помилка вводу";
	}

	const stringReverse = string.toLowerCase().split("").reverse().join("");

	return string === stringReverse
		? "Слово є паліндромом."
		: "Слово не є паліндромом.";
}

// 11.Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу.
function deleteDuplicateLetter(string) {
	if (!string || string.trim() === "" || Number(string)) {
		return "Помилка вводу";
	}

	let newString = "";

	for (let i = 0; i < string.length; i++) {
		const searchLetter = new RegExp(string[i], "gi");

		if (string.match(searchLetter).length == 1) {
			newString += string[i];
		}
	}

	return newString.length == 0
		? (newString = "Всі букви були видалені")
		: newString;
}

const btn1 = document.querySelector(".btn1");

btn1.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn1");
	const resutl1 = document.querySelector(".res1");
	resutl1.innerHTML = `<span>${getMaxDigit(input1.value)}</span>`;
});

const btn2 = document.querySelector(".btn2");

btn2.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn2");
	const input2 = document.querySelector("#input2_for_btn2");
	const resutl2 = document.querySelector(".res2");

	resutl2.innerHTML = `<span>${numberInPower(
		input1.value,
		input2.value
	)}</span>`;
});

const btn3 = document.querySelector(".btn3");

btn3.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn3");
	const resutl3 = document.querySelector(".res3");
	resutl3.innerHTML = `<span>${setFirstLetterToUpper(input1.value)}</span>`;
});

const btn4 = document.querySelector(".btn4");

btn4.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn4");
	const resutl4 = document.querySelector(".res4");
	resutl4.innerHTML = `<span>${calculateRevenue(input1.value)}</span>`;
});

const btn5 = document.querySelector(".btn5");

btn5.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn5");
	const input2 = document.querySelector("#input2_for_btn5");
	const resutl5 = document.querySelector(".res5");

	resutl5.innerHTML = `<span>${getRandomNumber(
		input1.value,
		input2.value
	)}</span>`;
});

const btn6 = document.querySelector(".btn6");

btn6.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn6");
	const input2 = document.querySelector("#input2_for_btn6");
	const resutl6 = document.querySelector(".res6");

	resutl6.innerHTML = `<span>${getCountLetter(
		input1.value,
		input2.value
	)}</span>`;
});

const btn7 = document.querySelector(".btn7");

btn7.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn7");
	const resutl7 = document.querySelector(".res7");
	resutl7.innerHTML = `<span>${convertCurrency(input1.value)}</span>`;
});

const btn8 = document.querySelector(".btn8");

btn8.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn8");
	const resutl8 = document.querySelector(".res8");
	resutl8.innerHTML = `<span>${getRandomPassword(input1.value)}</span>`;
});

const btn9 = document.querySelector(".btn9");

btn9.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn9");
	const input2 = document.querySelector("#input2_for_btn9");
	const resutl9 = document.querySelector(".res9");

	resutl9.innerHTML = `<span>${deleteLetters(
		input1.value,
		input2.value
	)}</span>`;
});

const btn10 = document.querySelector(".btn10");

btn10.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn10");
	const resutl10 = document.querySelector(".res10");
	resutl10.innerHTML = `<span>${isPalyndrom(input1.value)}</span>`;
});

const btn11 = document.querySelector(".btn11");

btn11.addEventListener("click", () => {
	const input1 = document.querySelector("#input1_for_btn11");
	const resutl11 = document.querySelector(".res11");
	resutl11.innerHTML = `<span>${deleteDuplicateLetter(input1.value)}</span>`;
});
