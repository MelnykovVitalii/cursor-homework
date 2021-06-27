const students = [
	{
		name: "Tanya",
		course: 3,
		subjects: {
			math: [4, 4, 3, 4],
			algorithms: [3, 3, 3, 4, 4, 4],
			data_science: [5, 5, 3, 4],
		},
	},
	{
		name: "Victor",
		course: 4,
		subjects: {
			physics: [5, 5, 5, 3],
			economics: [2, 3, 3, 3, 3, 5],
			geometry: [5, 5, 2, 3, 5],
		},
	},
	{
		name: "Anton",
		course: 2,
		subjects: {
			statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
			english: [5, 3],
			cosmology: [5, 5, 5, 5],
		},
	},
];

// 1.Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента.
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл
function getSubjects(student) {
	const studentSubjects = Object.keys(student.subjects);
	const updatedSubjects = studentSubjects.map((subject) => {
		const subjectUpperCased = subject[0].toUpperCase() + subject.slice(1);
		return subjectUpperCased.replace("_", " ");
	});

	return updatedSubjects;
}

console.log(getSubjects(students[0]));

// Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ.
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)
function average(array) {
	const total = array.reduce((prev, next) => prev + next, 0);
	const averageMark = Number((total / array.length).toFixed(2));
	return averageMark;
}

function getAverageMark(studentIndex) {
	const student = students[studentIndex];
	const studentMarksSubjects = Object.values(student.subjects);
	const arrayStudentMarksSubjects = studentMarksSubjects.reduce(
		(acc, item) => acc.concat(item),
		[]
	);
	const avarageMark = average(arrayStudentMarksSubjects);

	return avarageMark;
}

console.log(getAverageMark(0));

// 3.Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту
//  (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.
function getStudentInfo(studentIndex) {
	const student = students[studentIndex];
	const { course, name } = student;
	const averageMark = getAverageMark(studentIndex);
	return { course, name, averageMark };
}

console.log(getStudentInfo(0));

// 4.Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] –
// яка повертає імена студентів у алфавітному порядку.
function getStudentsNames(students) {
	const arrayNamesStudent = students.map((student) => student.name).sort();

	return arrayNamesStudent;
}

console.log(getStudentsNames(students));

// 5.Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.
function getBestStudent(students) {
	const allAvarageMarksStudents = students.map((student, index) => {
		return getAverageMark(index);
	});

	const maxMark = Math.max(...allAvarageMarksStudents);
	const bestStudent = [];

	students.forEach((student, index) => {
		if (getAverageMark(index) === maxMark) {
			bestStudent.push(student.name);
		}
	});

	return bestStudent;
}

console.log(getBestStudent(students));

// 6.Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.
function calculateWordLetters(string) {
	const arrayFromString = string.split("");

	const countLetters = arrayFromString.reduce((lettersObj, letter) => {
		lettersObj[letter] ? lettersObj[letter]++ : (lettersObj[letter] = 1);
		return lettersObj;
	}, {});

	return countLetters;
}

console.log(calculateWordLetters("тест"));
