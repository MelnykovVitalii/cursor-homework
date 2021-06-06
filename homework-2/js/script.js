const btn = document.querySelector(".submit-button");
const checkBox = document.getElementById("odd-even");
const resultBlock = document.querySelector(".result-block");

btn.addEventListener("click", function (e) {
	//  Відміняємо стандартну поведінку браузера для кнопки
	e.preventDefault();
	let sum = 0;
	// Отримуємо числа від користувача
	let firstNumber = document.getElementById("first-number").value.trim();
	let secondNumber = document.getElementById("second-number").value.trim();

	// Виконуємо перевірку на пустий рядок
	if (firstNumber && secondNumber) {
		firstNumber = Number(firstNumber);
		secondNumber = Number(secondNumber);

		// Перевірка на ціле число
		if (Number.isInteger(firstNumber) && Number.isInteger(secondNumber)) {
			// Вибирвємо максимальне та мінімальне число
			let minNum = Math.min(firstNumber, secondNumber);
			let maxNum = Math.max(firstNumber, secondNumber);

			for (let i = minNum; i <= maxNum; i++) {
				// Перевіряємо число на парність, якщо парне то пропускаємо його
				if (checkBox.checked && i % 2 == 0) continue;
				sum += i;
				console.log(checkBox.checked);
			}
			resultBlock.innerHTML = `<span class="done">Сума = ${sum}</span>`;
		} else
			resultBlock.innerHTML = `<span class="error">Треба вводити тільки цілі числа!</span>`;
	} else resultBlock.innerHTML = `<span class="error">Заповніть всі поля!</span>`;
});
