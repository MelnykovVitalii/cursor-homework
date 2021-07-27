// У цьому завданні вам необхідно створити клас Student та розробляти методи всередині цього класу.

class Student {
	constructor(university, course, fullName) {
		this.university = university;
		this.course = course;
		this.fullName = fullName;
		this.marks = [];
		this.isActiveStudent = true;
	}

	getInfo() {
		if (this.isActiveStudent) {
			return `${this.fullName}, студент ${this.university} університету ${this.course} курсу`;
		}
		return `${this.fullName}, студент ${this.university} університету виключений з ${this.course} курсу!`;
	}

	get getMarks() {
		if (this.isActiveStudent) {
			return this.marks;
		}
		return null;
	}

	set setMarks(mark) {
		if (this.isActiveStudent) {
			this.marks.push(mark);
		}
	}

	get getAverageMark() {
		if (this.marks.length === 0) {
			return 0;
		}

		const marksTotal = this.marks.reduce((total, mark) => total + mark);

		return Math.round(marksTotal / this.marks.length);
	}

	dismiss() {
		this.isActiveStudent = false;
	}

	recover() {
		this.isActiveStudent = true;
	}
}

export const anton = new Student("ОНПУ", 5, "Антон Рудько");

// console.log(anton.getInfo());
// anton.setMarks = 5;
// anton.setMarks = 4;
// anton.setMarks = 3;
// console.log("Оцінки студента", anton.getMarks);
// console.log("Середня оцінка студента:", anton.getAverageMark);
// anton.dismiss();
// console.log(anton.getInfo());
// anton.setMarks = 3;
// console.log(anton.getMarks);

// Advanced

class BudgetStudent extends Student {
	constructor(university, course, fullName) {
		super(university, course, fullName);
		setInterval(() => {
			this.getScholarship();
		}, 30000);
	}

	getScholarship() {
		if (this.getAverageMark >= 4 && this.isActiveStudent) {
			// console.log(`Ваша стипендія 1400 грн!`);
		} else {
			const reasonInfo = this.isActiveStudent
				? `Ваш середній бал: ${this.getAverageMark}.`
				: "Ви відраховані!";
			// console.log(`Ви не отримуєте стипендії! ${reasonInfo}`);
		}
	}
}

// console.log("Студент бюджетник!");
const kira = new BudgetStudent("ОНУ ім. Мечникова", 4, "Кіра Петрова");

// console.log(kira.getInfo());
// console.log("Встановлена оцінка:", (kira.setMarks = 4));
// console.log("Встановлена оцінка:", (kira.setMarks = 2));
// kira.dismiss();
// console.log(kira.getInfo());
// kira.recover();
// console.log(`${kira.getInfo()} поновлений!`);
