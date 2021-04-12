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

