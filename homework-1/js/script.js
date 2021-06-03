const PROCESSOR = 90.2345;
const MOTHERBOARD = 15.678;
const VIDEOCARD = 123.965;

const clientSum = 500;
// Base

// Максимальне та мінімальне значення
const maxValue = Math.max(PROCESSOR,MOTHERBOARD,VIDEOCARD);
const minValue = Math.min(PROCESSOR, MOTHERBOARD, VIDEOCARD);

// Вартість всіх товарів
const totalPrice = PROCESSOR + MOTHERBOARD + VIDEOCARD;

// Вартість без копійок та округлена в меньшу сторону
const totalPriceWithoutCoins = Math.trunc(PROCESSOR) + Math.trunc(MOTHERBOARD) + Math.trunc(VIDEOCARD);
const totalPriceFloor = Math.floor(totalPriceWithoutCoins/100)*100;

//Вся вартість округлена до сотень
const totalpriceRound = Math.round(totalPrice/100)*100;

// Парна чи непарна сумма
const isEven = (totalPriceFloor % 2 == 0);

// Решта з 500 грн 
const rest = clientSum - totalPrice;

// Середня ціна
const averagePrice = (totalPrice/3).toFixed(2);

// Знижка
const discount = Math.trunc(Math.random()*100);

// Сума знижки зі знижкою
const priceWithDiscount = (totalPrice - ((totalPrice*discount)/100)).toFixed(2);

// Прибуток
const profit = ((totalPrice/2) - ((totalPrice*discount)/100)).toFixed(2);

// Advanced

const list = document.querySelector('.list-block');

list.innerHTML = `<ul>
                    <li>Максимальна ціна: ${maxValue}</li>
                    <li>Мінімальна ціна: ${minValue}</li>
                    <li>Вартість всіх товарів: ${totalPrice}</li>
                    <li>Вартість без копійок та округлена в меньшу сторону: ${totalPriceFloor}</li>
                    <li>Вся вартість округлена до сотень: ${totalpriceRound}</li>
                    <li>Чи парне число: ${isEven}</li>
                    <li>Решта з 500 грн: ${rest}</li>
                    <li>Середня ціна: ${averagePrice}</li>
                    <li>Знижка: ${discount}%</li>
                    <li>Сума знижки зі знижкою: ${priceWithDiscount}</li>
                    <li>Прибуток: ${profit}</li>
                  </ul>`