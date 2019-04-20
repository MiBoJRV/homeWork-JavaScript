/*jslint devel: true */
/*jslint node: true */
/*jshint -W079 */
/*jslint evil: true */
// 'use strict';

let money, time;

money = +prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

//  Обект с данными
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

//  Цикл для двойного выведения вопроса
for (let i = 0; i < 2; i++) {
    let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof (b)) != null && a != '' && b != "" && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else { // если условие не было выполнено отсчет цикла назад
        console.log ("bad");
        i--;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert('Ежедневный бюджет: ' + appData.moneyPerDay);

//  Уровень достатка 

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произовшла ошибка ");
}