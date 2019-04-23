/*jslint devel: true */
/*jslint node: true */
/*jshint -W079 */
/*jslint evil: true */
// 'use strict';

let money, time;

function start() {
    money = +prompt('Ваш бюджет на месяц?', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Ваш бюджет на месяц?', '');
    }
}

start();

//  Обект с данными
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Введите обязательную статью расходов в этом месяце', ''),
                b = prompt('Во сколько обойдется?', '');

            if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != "" && a.length < 50) {
                console.log('done');
                appData.expenses[a] = b;
            } else { // если условие не было выполнено отсчет цикла назад
                console.log("bad");
                i = i - 1;
            }
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert('Ежедневный бюджет ' + appData.moneyPerDay);
    },
    detectLevel: function () {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Произовшла ошибка ");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt('Какова сума накоплений?', ""),
                percent = +prompt('Под какой процент?', "");

            appData.monthIncome = save / 100 / 12 * percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function () {
        for (let i = 0; i < 3; i++) {
            let opt = prompt('Статья необязательных расходов?', '');
            if (typeof (opt) === 'string' && typeof (opt) != null && opt != '') {
                appData.optionalExpenses[i + 1] = opt;
    
            } else {
                i = i - 1;
            }
        }
    },
    chooseIncome: function() {
        for (let i = 0; i < 1; i++) {
            let items = prompt("Что принесет дополнительный доход (Перечислите через запятую)", "");
    
            if (typeof(items) === 'string' && typeof(items) != null && items != '') {
                console.log('Done');
                
                appData.income = items.split(', ');
                appData.income.push(prompt('Может что-то еще?', ''));
                appData.income.sort();
    
            } else {
                alert('Возникла ошибка при вводе, попробуйте снова');
                i = i - 1;
            }
            appData.income.forEach(function (item, i) {
                        alert((i + 1) + ' способ доп. заработка: ' + item);
                    });
    
        }
    }
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}
