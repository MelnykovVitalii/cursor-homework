// 1.Функція визначення максимальної цифри
const getMaxDigit = (number) => {
  return (number = !number
    ? "Помилка вводу"
    : Math.max(...Array.from(String(number)).map((item) => parseInt(item))));
};

// 2.Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл
function numberInPower(number, pow) {
  if (!Number.isInteger(Number(pow)) || !number || !pow) {
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
  if (!Number(salary)) {
    return "Помилка вводу";
  }

  const tax = (Number(salary) * 19.5) / 100;
  const revenue = Number(salary) - tax;

  return revenue;
}

// 5.Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M.
function getRandomNumber(firstnumber, secondnumber) {
  if (!Number.isInteger(firstnumber) || !Number.isInteger(secondnumber)) {
    return "Помилка вводу";
  }

  firstnumber = Number(firstnumber);
  secondnumber = Number(secondnumber);
  const min = Math.min(firstnumber, secondnumber);
  const max = Math.max(firstnumber, secondnumber);
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
    throw new Error("Помилка вводу!");
  } else if (Number(count) < 1 || Number(count) > 8) {
    throw new Error("Довжина паролю повинна бути в діапазоні від 1 до 8");
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

// export { getMaxDigit, numberInPower };
