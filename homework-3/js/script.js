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
function getMaxDigit(...number) {
  let arr = [];
  arr = Array.from(String(number));
  // console.log(arr);
  return console.log(Math.max(...arr));
}

getMaxDigit(8578986);
const num = 3 % 2;
// const num2 = Number(num);

if (6 % 2) {
  console.log("sdfsfs0");
}

console.log(typeof num);
