import { getMaxDigit, isPalyndrom, getRandomPassword } from "./hw3.js";
import { students, getPairs } from "./hw4.js";
import { divideByThree } from "./hw5.js";
import { students as newStudents, getSubjects } from "./hw6.js";
import { ukraine, getTotalTaxes } from "./hw7.js";
import { anton } from "./hw8.js";
import { generateBlocks } from "./hw9.js";
import { getRandomChinese } from "./hw11.js";
import { fontGenerator } from "./hw14.js";

export function view() {
	const block3 = document.querySelector(".block3");
	const block4 = document.querySelector(".block4");
	const block5 = document.querySelector(".block5");
	const block6 = document.querySelector(".block6");
	const block7 = document.querySelector(".block7");
	const block8 = document.querySelector(".block8");
	const block9 = document.querySelector(".block9");
	const block11 = document.querySelector(".block11");
	const output11 = document.querySelector(".output11");
	const block14 = document.querySelector(".block14");

	block3.innerHTML = `
                        <div>getRandomPassword(5) = ${getRandomPassword(
													5
												)}</div>
                        <div>getMaxDigit(541167) = ${getMaxDigit(541167)}</div>
                        <div>isPalyndrom(JavaScript) = ${isPalyndrom(
													"JavaScript"
												)}</div>
                      `;

	block4.innerHTML = `<div>getPairs(students) = ${getPairs(students)}</div>`;

	block5.innerHTML = `<div>divideByThree("live") = ${divideByThree(
		"live"
	)}</div>`;

	block6.innerHTML = `<div>getSubjects(newStudents[0]) = ${getSubjects(
		newStudents[0]
	)}</div>`;

	block7.innerHTML = `<div>getTotalTaxes.call(ukraine) = ${getTotalTaxes.call(
		ukraine
	)}</div>`;

	block8.innerHTML = `<div>${anton.getInfo()}</div>`;

	block9.innerHTML = `<div>generateBlocks(50)</div>`;
	generateBlocks(50);

	block11.innerHTML = `<div>getRandomChinese(8)</div>`;
	getRandomChinese(8).then((result) => {
		output11.textContent = result;
	});

	block14.innerHTML = `<div>fontGenerator.next("up").value = ${
		fontGenerator.next("up").value
	}</div>`;
}
