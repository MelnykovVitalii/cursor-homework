const PROCESSOR = 90.2345,
      MOTHERBOARD = 15.678,
      VIDEOCARD = 123.965;


// Base

// Максимальне та мінімальне значення
const maxValue = Math.max(PROCESSOR,MOTHERBOARD,VIDEOCARD);
const minValue = Math.min(PROCESSOR, MOTHERBOARD, VIDEOCARD);

// Вартість всіх товарів
const allPrice = PROCESSOR + MOTHERBOARD + VIDEOCARD;

// Вартість без копійок та округлена в меньшу сторону
const allPriceWithoutCoins = Math.trunc(PROCESSOR) + Math.trunc(MOTHERBOARD) + Math.trunc(VIDEOCARD);
const allPriceFloor = Math.floor(allPriceWithoutCoins/100)*100;

//Вся вартість округлена до сотень
const allpriceRound = Math.round(allPrice/100)*100;

// Парна чи непарна сумма
const oddEven = (allPriceFloor % 2 == 0);

// Решта з 500 грн 
const rest = 500 - allPrice;

// Середня ціна
const averagePrice = (allPrice/3).toFixed(2);

// Знижка
const discount = Math.trunc(Math.random()*100);

// Сума знижки зі знижкою
const priceWithDiscount = (allPrice - ((allPrice*discount)/100)).toFixed(2);

// Прибуток
const profit = ((allPrice/2) - ((allPrice*discount)/100)).toFixed(2);

// Advanced

const list = document.querySelector('.list-block');

list.innerHTML = `<ul>
                    <li>Максимальна ціна: ${maxValue}</li>
                    <li>Мінімальна ціна: ${minValue}</li>
                    <li>Вартість всіх товарів: ${allPrice}</li>
                    <li>Вартість без копійок та округлена в меньшу сторону: ${allPriceFloor}</li>
                    <li>Вся вартість округлена до сотень: ${allpriceRound}</li>
                    <li>Чи парне число: ${oddEven}</li>
                    <li>Решта з 500 грн: ${rest}</li>
                    <li>Середня ціна: ${averagePrice}</li>
                    <li>Знижка: ${discount}%</li>
                    <li>Сума знижки зі знижкою: ${priceWithDiscount}</li>
                    <li>Прибуток: ${profit}</li>
                  </ul>`