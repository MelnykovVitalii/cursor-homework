// import { getMaxDigit, numberInPower } from "./script.js";

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
  try {
    resutl8.innerHTML = `<span>${getRandomPassword(input1.value)}</span>`;
  } catch (error) {
    resutl8.innerHTML = `<span>${error.message}</span>`;
  }
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
