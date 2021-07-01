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
			console.log(
				`${this.fullName}, студент ${this.university} університету ${this.course} курсу`
			);
		} else {
			console.log(
				`${this.fullName}, студент ${this.university} університету виключений з ${this.course} курсу`
			);
		}
	}

	get getMarks() {
		if (this.isActiveStudent) {
			console.log(`Оцінки студента: ${this.marks}`);
		} else {
			console.log("Студент виключений з курсу");
		}
	}

	set setMarks(mark) {
		if (this.isActiveStudent) {
			this.marks.push(mark);
			console.log(`Була додана оцінка ${mark}`);
		} else {
			console.log("Студент виключений, неможливо додати оцінку!");
		}
	}

	get getAverageMark() {
		let averageMark = 0;
		if (this.marks.length === 0) {
			console.log(`Середня оцінка студента: ${averageMark}`);
		} else {
			averageMark =
				this.marks.reduce((total, mark) => total + mark) / this.marks.length;
			console.log(`Середня оцінка студента: ${averageMark.toFixed(1)}`);
		}
		return Number(averageMark);
	}

	dismiss() {
		this.isActiveStudent = false;
		console.log(`Студент ${this.fullName} виключений з курсу!`);
	}

	recover() {
		this.isActiveStudent = true;
		console.log(`Студент ${this.fullName} поновлений на курс!`);
	}
}

const anton = new Student("ОНПУ", 5, "Антон Рудько");

anton.getInfo();
anton.setMarks = 5;
anton.setMarks = 4;
anton.setMarks = 3;
anton.getMarks;
anton.getAverageMark;
anton.dismiss();
anton.setMarks = 5;
anton.recover();
anton.setMarks = 4;
anton.getMarks;
anton.setMarks = 5;
anton.getMarks;

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
			console.log(`Ваша стипендія 1400 грн!`);
		} else {
			console.log("Ви не отримуєте стипендії!");
			this.isActiveStudent
				? console.log(`Ваш середній бал: ${this.getAverageMark}.`)
				: console.log("Ви відраховані!");
		}
	}
}

console.log("Студент бюджетник!");
const kira = new BudgetStudent("ОНУ ім. Мечникова", 4, "Кіра Петрова");
kira.setMarks = 5;
kira.setMarks = 3;
kira.dismiss();
kira.recover();
