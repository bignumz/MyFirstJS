 // Строгий скрипт, проверяет старый синтаксис
'use strick';

// Обявляем объект в JS и вызываем
const obj = {  
    name: 'John',
    age: 25,
    isMarried: false 
};

console.log(obj.name);

// Массивы, обявление элемента
let arr = ['plum', 'orange', 'apple', 6, {},[]];
console.log(arr[1]);

// Pop up Alert with message на экран 
alert('Hello!');

// Вопрос на экран с варинтами true/false
let result = confirm('Are you here?');
console.log(result);

// prompt тип данных 'string'
const answer = prompt('Вам есть 18?', ""); 
console.log(answer);

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваша фамилия?', '');
answers[2] = prompt('Сколько вам лет?', '');

console.log(answers);    

// Интерполяция строк `https://someurl.com/${variable}/5`
const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);

// Операторы ++"5", плюс перед string превращает его в число
console.log('arr' + ' -object');
console.log(4 + ' -object');
console.log(4 + + "5");

// Инкременция и декрименция (Префиксная и Постфиксная)
let incr = 10,
    decr = 10;

incr ++; // ++incr (префиксная)
decr --; // incr++ (постфикцная)

console.log(incr);
console.log(decr);

// Операторы =, && (и), ||(или) 
console.log(2 + 2 * 2 === 6); // === строгое сравнение

const isChecked = true,
        isClose = true;

console.log(isChecked && isClose);
console.log(isChecked || !isClose);


/* *** Git Instructions ***
1) git init (initialized empty Git repository in /home/)
2) git config --local user.name "Nursultan"
3) git config --local user.email exmaple@gmail.com
4) git config --global user.email example@gmail.com
5) git status
5) git add -A / 
6) git commit -a -m"first commit"
7) git log (Shows changes)
8) git remote add origin https://github.com/bignumz/bignumz.git
9) git branch -M main / master
10) git push -u origin main
11) git clone https://github.com/bignumz/MyFirstJS.git gitclone ("gitclone")
*/

//Операторы условия
if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
} 

 const num = 50;

 if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
} 

// Тенарный аргумент
(num === 50) ? console.log('Ok') : console.log('Error');

// Использование "switch" "case" "break" "default" Сравнение === 
const nummm = 50;

switch (nummm) {
    case 49:
        console.log('Неверно');
        break;
            case 100:
            console.log('Неверно');
        break;
            case 50:
            console.log('Неверно');
        break;
            default:
            console.log('Не в этот раз')
        break;
} 

// Циклы "While" "do" 
let numm = 50;

 while (numm <= 55) {
    console.log(numm);
    numm++;
} 

do {
    console.log(numm);
    numm++;
}
while(num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /*break;*/
        continue;
    }
    console.log(i);
}

// Функции / FUCTION DECLARATION 

"use strict"; 

let nom = 20; 

function showFirstMessage(text) {
    console.log(text);
    let nom = 10;
    console.log(nom);   
}

showFirstMessage("Hello World!");
console.log(nom);   

function calc (a,b) { 
    return (a + b);
    // console.log("Unreachable code");
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret(){
    let num = 50; 

    //  


    return num;
}

const anotherNum = ret();
console.log(anotherNum);

//  функции / FUNCTION EXPRESSION 

const logger = function () {
    console.log("Hello");
};

logger(); 

// Функции / СТРЕЛОЧНАЯ ФУНКЦИЯ 

const calcul = (a,b) => a + b; 
// { a + b }
console.log(calcul(4,4));


// Функции /  СALL BACK / Сначала выполняется первая функция 
// только потом выполняется вторая.

"use strict";

function first() {
    // Do something 
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done () {
    console.log ('Я прошел этот урок!');
}

learnJS('JavaScript', done);

// ОБЪЕКТЫ 

"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options["colors"]["border"]);

// delete options.name;

// console.log(options);

for (let key in options) {
    if (typeof(options[key]) === 'object'){
        for(let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
    console.log(`Свойство ${key} имеет значение ${options[key]}`);
}




