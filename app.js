"use strict";
//досмотрел у другой группы до 5-го занятия, поэтому чуть поэксперементировал
function calcCtoF() {
    let val_tempC = +document.getElementById('tempC').value;
    let val_tempF = val_tempC * 9 / 5 + 32;
    document.getElementById('tempF').value = val_tempF.toFixed(1);
}
function calcCtoC() {
    let val_tempF = +document.getElementById('tempF').value;
    let val_tempC = (val_tempF - 32) * 5 / 9;
    document.getElementById('tempC').value = val_tempC.toFixed(1);
}
// Дальше решил не выпендриваться
let my_name;
let admin;
my_name = "Василий";
admin = my_name;
console.log(admin);

/* тут должно примениться неявное приведение числа 20 
(10 + 10 сложатся нормально) к тексту с последующей конкатенацией
с посленей текстовой десяткой - "10". В результате "2010" */
console.log(10 + 10 + "10");
//Я знал!

/* тут должно примениться неявное приведение первого числа 10 
к тексту с последующей конкатенацией к тексту "10", в итоге "1010"
конкатерируется с неявноприведенной последней 10кой. Итог "101010"*/
console.log(10 + "10" + 10);

/*Тут сработает унарный + в итоге все сложится, как числа, ответ 30*/
console.log(10 + 10 + +"10");

/*Тут сработает унарный -, в итоге -"" превратится в -0, поделив на который
получим -infinity*/

console.log(10 / -"");

/*Тут сработает унарный +, в итоге +"2,5" превратится NaN т.к. "," 
в отличии от "." воспринимается, как текстовый символ. Поделив 10 на
NaN получим NaN, т.к. NaN, куда его в месте с числами не пихай,
всегда получим NaN, кроме проверки isNan*/

console.log(10 / +"2,5");


/* ДЗ №2 плохая идея была продолжать тут же, переменные дублируются,
но уже поздно */

// Задача 1
/* пример 1 
let a = 1, b = 1, c, d; c = ++a;
alert(c); // ответ: 2 

преинкремент сначала добавляет 1, потом присваивается, соответственно 
а становится равным 2, и присваивается переменной с. В итоге с=2 летит
в алерт.  a=2, c=2 

пример 2 
d = b++;
alert(d); //ответ: 1 

постинкремент применяется после присваивания. Соответственно
d станет равно b, которое равно 1 в этот момент. В итоге d=1 летит
в алерт. После присвоения b увеличится на 1 и станет равно 2. 
В итоге d=1, b=2 


пример 3 
c = 2 + ++a;
alert(c); //ответ: 5 

преинкремент применяется до сложения. Соответственно
с станет равно 2 + (2+1) т.е. 5 и улетит в алерт. В итоге с=5, a=3 


пример 4 
d = 2 + b++;
alert(d); //ответ: 4 

постинкремент применяется после сложения и присваивания. Соответственно
d станет равно 2 + 2 т.е. 4, а после к b=2 добавится 1. d=4 улетит в алерт. 
в итоге d=4, b=3 


alert(a); //3 
alert(b); //3

Выводятся по a и b, посчитанные мной выше. */

//Задача 2
/* Чему будут равны переменные x и a в примере ниже? 
Написать почему так произошло (описать последовательность действий). */

let a = 2; //a присвоили значение 2
let x = 1 + (a *= 2); // х равен 1 + a*2 = 5, при этом a 
/* присвоено значение a*2 т.е. 4. Итог a=4, x=5. На мой взгляд
такая запись ужасна. Я бы записал:
let a = 2;
a *= 2;
let x = 1 + a;
*/

//Задача 3
/* Объявить две переменные a и b и задать им целочисленные произвольные начальные значения.
Затем написать скрипт, который работает по следующему принципу:
- если a и b положительные, вывести их разность (ноль можно считать положительным числом);
- если а и b отрицательные, вывести их произведение;
- * (этот пункт по сложнее, делайте по желанию) если а и b разных знаков, вывести их сумму;
*/

/* взял произвольные целые от -99 до 99. Выглядит громоздко, но смысл простой
Math.random().toFixed(0) принимает значения или 0 или 1 с одинаковой вероятностью. 
Соответственно, мы это воспринимаем, как отрицательное или положительное 
число добавляя "-", если значение 1. */


let num1 = null;
let num2 = null;
putNewNumbers();


function getNewNumber() {
    return Math.random().toFixed(0) == 0 ? (100 * Math.random()).toFixed(0) : -(100 * Math.random()).toFixed(0);
}

function putNewNumbers() {
    num1 = getNewNumber();
    num2 = getNewNumber();
    document.getElementById('num1').value = num1;
    document.getElementById('num2').value = num2;
}

function startMagic() {
    let result_text = '';
    if (num1 >= 0 && num2 >= 0) {
        result_text = (num1 + ' и ' + num2 + ' положительные. Их разность равно ' + (num1 - num2));
    }
    else if (num1 < 0 && num2 < 0) {
        result_text = (num1 + ' и ' + num2 + ' отрицательные. Их произведение равно ' + (num1 * num2));
    }
    else {
        let sum = +num1 + +num2;
        result_text = (num1 + ' и ' + num2 + ' разных знаков. Их сумма равна ' + sum);
    }
    document.getElementById('result_text').value = result_text;
}

//Задача 4

/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде 
функций с двумя параметрами. Т.е. например, функция для сложения должна 
принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return.*/

function calcSum(number1, number2) {
    return number1 + number2
}

function calcSub(number1, number2) {
    return number1 - number2
}

function calcDiv(number1, number2) {
    return number1 / number2
}

function calcMult(number1, number2) {
    return number1 * number2
}

//Задача 5
/* Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение.*/

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return calcSum(arg1, arg2);
        case '*':
            return calcMult(arg1, arg2);
        case '-':
            return calcSub(arg1, arg2);
        case '/':
            return calcDiv(arg1, arg2);
        default:
            return 'Нет такой операции!'
    }
}

function doCalc() {
    let arg1 = +document.getElementById('arg1').value;
    let arg2 = +document.getElementById('arg2').value;
    let operation = document.getElementById('operation').value;
    if (isNaN(arg1)) {
        document.getElementById('arg1').value = 'Введите число!!!'
    } else if (isNaN(arg2)) {
        document.getElementById('arg2').value = 'Введите число!!!'
    } else if (arg2 == 0 && operation == '/') {
        document.getElementById('result').value = 'На 0 делить нельзя!!!'
    } else {
        document.getElementById('result').value = mathOperation(arg1, arg2, operation)
    }
}

// Задание 6** 
/* (Это задание не является частью курса, можете его не делать, оно для тех кому мало обычных заданий,
    требует времени и возможно гугления, делайте по желанию.) Программа должна спросить у пользователя
    число, это будет количество денег, которое он хочет положить на счет в банке. Затем программа
    должна выдать примерно такое сообщение:
"Ваша сумма в 101 рубль успешно зачислена." - в случае если пользователь ввел 101.
"Ваша сумма в 10020 рублей успешно зачислена." - в случае если пользователь ввел 10020.
"Ваша сумма в 120104 рубля успешно зачислена." - в случае если пользователь ввел 120104.
То есть ваша задача выводить слово «рубль» в правильном падеже, в зависимости от введенного числа. */
function getRubleEnding(rubles_amount) {
    if (rubles_amount % 100 > 10 && rubles_amount % 100 < 20) {
        return 'рублей';
    } else {
        switch (rubles_amount % 10) {
            case 1:
                return 'рубль';
            case 2:
            case 3:
            case 4:
                return 'рубля';
            default:
                return 'рублей';
        }
    }
}
function makeDeposit() {
    let rubles_amount = +document.getElementById('rubles_amount').value;
    let operation_result = `Ваша сумма ${rubles_amount} ${getRubleEnding(rubles_amount)} успешно зачислена.`;
    document.getElementById('operation_result').value = operation_result;
}

//Начинаем ДЗ№3

// Задание 1
/* С помощью цикла for написать алгоритм для вывода чисел (выводите в консоль, с помощью console.log) от 0 до 10 включительно, чтобы результат выглядел так:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число */


function getNumberDescription(number) {
    if (number % 2) {
        return "нечетное число";
    } else {
        return "четное число";
    }
}

let number_description = null;
for (let i = 0; i <= 10; i++) {
    number_description = (i == 0) ? "это ноль" : getNumberDescription(i);
    console.log(`${i} - ${number_description}`);
}

// Задание 2

/* 
Выведите в консоль значения, указанные рядом с комментариями: */
const post = {
    author: "John", //вывести этот текст 
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2 //вывести это число 
            }
        },
        {
            userId: 5, //вывести это число 
            userName: "Jane",
            text: "lorem ipsum 2", //вывести этот текст 
            rating: {
                likes: 3,
                dislikes: 1
            }
        },
    ]
};

// Да без проблем
console.log(post.author);
console.log(post.comments[0].rating.dislikes);
console.log(post.comments[1].userId);
console.log(post.comments[1].text);

// Задание 3

/* Перед вами находится массив с продуктами, сегодня распродажа и вам нужно на каждый
товар применить скидку 15%, можете использовать метод forEach */

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];