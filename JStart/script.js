"use strick";

//alert('Hello!');

//let result = confirm('Are you here?');
//console.log(result);

//let answer = prompt('Вам есть 18?', '');
//console.log(answer);

//const answers = [];

//answers[0] = prompt('Как ваше имя?', '');
//answers[1] = prompt('Как ваша фамилия?', '');
//answers[2] = prompt('Сколько вам лет?', '');

//console.log(answers); 

/*const obj = {  
    name: 'John',
    age: 25,
    isMarried: false 
};

console.log(obj.name);  */

/*const category = 'toys';

console.log(`https://someurl.com/${category}/5`);

const user = 'Ivan';

alert(`Привет, ${user}`);*/

/* console.log('arr' + ' -object');
console.log(4 + ' -object');
console.log(4 + +"5");

let incr = 10,
    decr = 10;

incr ++; // ++incr (префиксная)
decr --; // incr++ (постфикцная)

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2 + 2 * 2 === 6); // строгое сравнение

const isChecked = true,
        isClose = true;


// console.log(isChecked && isClose);

console.log(isChecked || !isClose);*/ 

/* const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

const   a = prompt('Один из последних просмотренных фильмов?',''),
        b = prompt('На сколько оцените его?',''),
        c = prompt('Один из последних просмотренных фильмов?',''),
        d = prompt('На сколько оцените его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB); */

/* if (4 == 9) {
    console.log('Ok');
} else {
    console.log('Error');
} */

/* const num = 50;

 if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Много');
} else {
    console.log('Ok');
} 

// Тернарный аргумент
(num === 50) ? console.log('Ok') : console.log('Error');
*/

/* const num = 50;

switch (num) {
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
} */

/* let num = 50;*/

/* while (num <= 55) {
    console.log(num);
    num++;
} */

/* do {
    console.log(num);
    num++;
}
while(num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        /*break;
        continue;
    }
    console.log(i); */

/*const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?','');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}; 

for (let i=0; i < 2; i++) {
    const   a = prompt('Один из последних просмотренных фильмов?',''),
            b = prompt('На сколько оцените его?','');
       
    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a]= b;
        console.log('Done');
    } else {
        console.log('Error');
        i--;
    }  

} 

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
} else  {
    console.log('Призошла ошибка');
}

console.log(personalMovieDB); */

/*
"use strict";

let num = 50; 

while (num <= 55) {
    console.log(num);
    num++;
} */

/*do {
    console.log(num);
    num++;
}

while (num < 55); 

for (let i = 1; i < 10; i++) {
    if (i == 6) {
        break;
    }
    
    console.log(i);
} */ 

/* "use strict";

let num = 20;

function showFirstMessage(text){
    console.log(text);
   let num = 10;
   console.log(num);
}

showFirstMessage("Hello World!");
console.log(num);

function calc (a,b) {
    return (a+b);

}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(7, 8));


function ret() {
    let num = 50; 
    return num; 
}

const anotherNum = ret();
console.log(anotherNum); 

const logger = function() {
    console.log('Hello')
};

logger(); 
*/

/* let calc = (a, b) => 5 + 5; 
    console.log(calc(5+5));
    return calc;
*/
// "use strict";

// const str = 'test';

// const arr = [1, 2 ,3];
/* console.log(str);
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

const fruit = "Some fruit";

console.log(fruit.indexOf("fruit")); */ 

/* const num = 12.2;
console.log(Math.round(num));

const test = '12.2px'; 
// console.log(parseInt(test)); 
console.log(parseFloat(test)); 

/* const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test)); */ 


/* const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false 
};

for (let i = 0; i < 2; i++) {
    const a = prompt ('Один из последних просмотренных фильмов', ''),
          b = prompt ('На сколько оцените его?', '');

    if (a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovieDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    } 
} */ 

/* "use strict";

let numberOfFilms;

function start (numberOfFilms) {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}

start(); */ 

let areYouReady = confirm('Are you ready?');
alert (areYouReady); 
    if (areYouReady == true) {
        alert("Let's go!");
    } else {
        alert("You are not ready!");
    }

