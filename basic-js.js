// Variable
// let, const, var
let a;
a = 'Hi';
console.log(a);

let b = 'Hello';
//b = 'hhh';
console.log(b);

const height = 180;
//height = 200;

// ไม่นิยมแล้ว เกิดความสับสน
c = 1;
var c;
console.log(c);

// Naming convention
// camelCase -> js
// snake-case
// kebab-case
// Pascal-case

//Data Types
let o = null;
let u = undefined;
let myString = 'Hello, World';
let myNumber = 3;
let myBoolean = true; //or False
let myArr = [1, 'n', false, [3, '3']];
let myObj = {name: 'Rawitch', age: 20, isStudent: true };

let num1 = 3+3-3*3/3;

// ===, !==, <, >, <=, >=
console.log('123' == 123);
console.log('123' === 123);

//conditionals

let fruit = 'banana';
if(fruit === 'banana'){
    console.log('This is banana');
} else if(fruit === 'apple'){
    console.log('This is apple');
} else {
    console.log('Something else');
}

// Ternary Operator

const result = 10 % 2 === 0 ? 'even':'odd';

//Array

 const fruits = ['apple', 'mango', 'banana', 'orange'];
// console.log(fruits.length);
// console.log(fruits[1]);

// fruits.push('grape');
// console.log(fruits);
// console.log(fruits.length);

// fruits.splice(0,2);
// console.log(fruits);

// Loop

// for (let i=0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

for(const f of fruits) {
    console.log(f);
}

// String Concatenation
const name = 'Rawitch';
const greeting1 = 'Hello, ' + name;
// const greeting2 = 


// Functions

function add(num1,num2) {
    return num1 + num2;
}

const add2 = (num1,num2) =>{
    return num1+num2;
}

// Callback Function

function greeting(callback) {
    callback('Nice');
}

function logGreeting(name) {
    console.log('Hello',name);
}

greeting(logGreeting);
// Object

const dog = {
    name: 'Bill',
    age: 10,
    color: 'black',
    parents: ['John','Jane'],
    bark() {
        console.log('Wulf!');
    },
    introduce() {
        console.log(`I am dog named ${this.name}`);
    }
}

console.log(dog.name);
dog.age = 20;
console.log(dog.age);
dog.bark();
dog.introduce();

dog.breed = 'Shiba Inu';
console.log(dog.breed);

const me = {
    name: 'Rawitch',
    lname: 'Payakkawan',
    years: 2,
    age: 20,
    isStudent: true,
    welcome(){
        console.log('Hello');
    },
    introduce() {
        console.log(`My name is ${this.name} ${this.lname}`);
    },
    greeting(name){ 
        console.log(`Hello, ${name}`);
    }
}

me.welcome();
me.introduce();
me.greeting();

// Destructuring

const d1 = [1, 2, 3, 4, 20];
const d2 = { str: 'Hi', num: 2, bool: false, arr:[1, 2, 3]};

const [a1, a2, a3, ...rest] = d1;
console.log(a1);
console.log(a2);
console.log(a3);
console.log(rest);

const { bool, str, ...rest2 } = d2;
console.log(str);
console.log(bool);
console.log(rest2);

// Basic Array Methods

const users = [
    {
        id: 1,
        name: 'A',
        age: 44
    },
    {
        id: 2,
        name: 'B',
        age: 20
    },
    {
        id: 3,
        name: 'C',
        age: 13
    },
    {
        id: 4,
        name: 'D',
        age: 18
    },
    {
        id: 5,
        name: 'E',
        age: 5
    }
];

users.forEach(function (u){
    console.log(u.name);
});

// const userWithId3 = users.find(function(user){
//     return users.if=d === 3;
// });
const userWithId3 = users.find((user) => user.id === 3);
console.log(userWithId3);

const indexOfB = users.findIndex((user) =>user.name === 'B' );
console.log(indexOfB);

const adults = users.filter((user) => user.age >= 18);
console.log(adults);

const userNameList = users.map((user) => user.name);
console.log(userNameList);

//const usersNoId = users.map((user) => ({ name: user.name, age: user.age}));
const usersNoId = users.map(({ name, age})=>{
    return { name, age};
});
console.log(usersNoId);

const eUser = users.find((user) => user.name === 'E');
console.log(eUser);

users.forEach((user)=>{
    user.greeting = function(){
        console.log(`Hello, my name is ${this.name}`);
    };
});

users[0].greeting();
