// Кожне завдання виконується у вигляді чистої функції. Функція повертає масив або інше значення, але не змінює його!
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

// 1.Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(students) {
  const temp = [...students];
  const pairs = [];

  for (let i = 0; i < temp.length; i = i + 2) {
    pairs.push(temp.slice(i, i + 2));
  }

  return pairs;
}
console.log("Пари студентів");
console.log(getPairs(students));

// 2.Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати.
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]
function setThemes(themes) {
  const pairs = getPairs(students);
  const pairsWithThemes = [];

  for (let i = 0; i < themes.length; i++) {
    pairsWithThemes.push([pairs[i].join(" і "), themes[i]]);
  }

  return pairsWithThemes;
}
console.log("Теми пар");
console.log(setThemes(themes));

// 3.Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]
function marksStudents(students, marks) {
  const studentsWithMarks = [];

  for (let i = 0; i < marks.length; i++) {
    studentsWithMarks.push([students[i], marks[i]]);
  }

  return studentsWithMarks;
}
console.log("Оцінки студентів");
console.log(marksStudents(students, marks));

// 4.Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив):
// [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]
const setAllMarks = () => {
  const pairsWithThemes = setThemes(themes);

  for (let i = 0; i < pairsWithThemes.length; i++) {
    const mark = Math.ceil(Math.random() * 5);
    pairsWithThemes[i].push(mark);
  }

  return pairsWithThemes;
};
console.log("Оцінки пар студентів");
console.log(setAllMarks());
