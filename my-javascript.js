// (ctrl + /) for commenting out a selected block of code

// console.error('Error!')

/*
console.warn('I am an error')
console.error('Error!')
console.log("HI");
*/

// var javascript = 99;
// javascript = 100
// javascript = 999
// javascript = "Scripting language"

// const javascript = "Some text";
// let javascript = 99;
// javascript = 100;
// javascript = 101;
// javascript = "Hundred and two"

// let x = 89;
// x = 77;
// x = 90;
// x = "Hundred"
// console.log(x);

// const y = 200;
// console.log(y);

// Data type in JS

// const z = 'This is a constant!'
// console.log(z);

// const a = 10.89;
// console.log(a);

// Boolean
// const truthyValue = true;
// console.log(truthyValue);

// const falsyValue = false;
// console.log(falsyValue);

// const x = null;
// console.log(x);

// let x;
// console.log(x);

// let num = "thirty";
// let course_name = "JavaScript";
// const student_name = "Ankit";

// const x = student_name + " asked a question. This is a " + course_name + " lesson."
// console.log(x);

// const y = `${student_name} asked a question. This is a ${course_name} lesson.`;
// console.log(y);

// const text = "    COURSE   "

// let modified_text = text.toLowerCase().trim().toUpperCase()

// let a = text.toLowerCase();
// let b = a.trim();
// let c = b.toUpperCase();

// console.log(modified_text);

// Arrays

// let numbers_array = [1, 2, 4, 8, 10, 12, 14]; // array of numbers

// let array_of_strings = ['one', 'two', 'three']; // array of strings

// let abc = [true, false, true, true, false];

// let arr_of_multiple_types = [1, "Hello", "Bye", true, 32];

// console.log(arr_of_multiple_types);

// typeof Function

// let a = 88;
// let b = 'Hi';
// let c = false;

// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);

// console.log(typeof 66);
// console.log(typeof [1, 2, 4]);

// let number_array = ["One", "Two", "Three", "Four", 5, false];
// let array_2 = ['a', 'b', 'c'];
// console.log(number_array);

// Adding items to the end of an array
// number_array.push(5);
// number_array.push(31);
// number_array.push(true);

// Adding items to the start of an array
// number_array.unshift(5);
// number_array.unshift(6);
// number_array.unshift(7);

// let first_element = number_array[0];
// let second_element  = number_array[1];
// let third_element = number_array[2];
// let last_element = number_array[number_array.length - 1];

// console.log(third_element);

// // array.indexOf()  - to get the index of an element in an array
// const index = number_array.indexOf(false);
// console.log(`Index is ${index}`);

// let number_array = ["One", "Two", "Three", "Four", 5, false];
// console.log(number_array);
// number_array.pop();
// console.log(number_array);
// number_array.pop();
// console.log(number_array);

// console.log(number_array);
// number_array.splice(3, 2);
// console.log(number_array);
// number_array.splice(0, 2);
// console.log(number_array);
// number_array.splice(0, 1);
// console.log(number_array);

// Objects

// const my_data = {
//   name: "Arjun",
//   age: 29,
//   address: "Some address",
//   sector: "IT Sector",
//   specialization: "UI Development",
//   married: false,
//   skills: ["HTML", "CSS", "Javascript"],
//   "my-classes": [1, 2, 3]
// };

// cannot re-assign values to a const variable
//
// my_data = {};

// console.log(my_data);
// console.log(my_data.age);
// console.log(my_data.name);
// console.log(my_data.skills);

// console.log(my_data["my-classes"])

// const obj1 = {
//   name: "Arjun",
//   id: 99,
// };

// const obj2 = {
//   name: "Ali",
//   id: 100,
// };

// const obj3 = {
//   name: "Ashish",
//   id: 101,
// };

// const myArray = [obj1, obj2, obj3];
// console.log(myArray);

// const newArray = [{ name: "A" }, { name: "B" }, { name: "C" }];
// console.log(newArray);

// newArray[0] = "My name is Arjun.";
// console.log(newArray);

// newArray = [9, {}, {}];

// Loops - For Loops, while loops

// const num = 89;

// const newArray = [3, 5, 15];

// for (let i = 0; i < newArray.length; i++) {
//   if (i === 3) {
//     console.log("Three");
//   } else if (i === 4) {
//     console.log("Four");
//   } else if (i === 5) {
//     console.log("Five");
//   } else if (i === 6) {
//     console.log("Six");
//   } else {
//     console.log(newArray[i]);
//   }

//   switch (newArray[i]) {
//     case 0:
//       console.log("Zero");
//       break;

//     case 1:
//       console.log("One");
//       break;

//     case 2:
//       console.log("Two");
//       break;

//     default:
//       console.log("DEFAULT");
//   }

//   switch (num == 89) {
//     case true:
//       console.log("TRUE!");
//       break;

//     case false:
//       console.log("FALSE!");
//       break;
//   }
// }

// While loops

// let i = 0;
// while(i < newArray.length) {
//     console.log(newArray[i]);
//     i++;
// }

// let j = 0;
// while (j < newArray.length) {
//   console.log(`value of j: ${j}`);
//   j++;
// }

// const arr = [0, 1, 2, 3, 4];

// for (let i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     continue;
//   }

//   console.log(`i : ${i}`);
// }

// const ages = [5, 8, 9, 10, 12, 15]

// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] < 10) {
//     console.log(`i is less than 10`)
//   } else if (ages[i] === '10') {
//     console.log(`EQUAL TO TEN`)
//   } else {
//     console.log(`i > 10`);
//   }
// }

// let age = 10

// if (age === 10) {
//   console.log('Value is 10')
// }

// if (age !== 10) {
//   console.log('Value is NOT 10')
// }

// const ages = [10, 20, 30, 40]

// for (let i = 0; i < ages.length; i++) {
//   switch (ages[i]) {
//     case 10:
//       console.log('It is TEN')
//       break

//     case 20:
//       console.log('It is TWENTY')
//       break

//     default:
//       console.log('IT is > 20')
//   }
// }

const ages = [10, 20, 30, 40];

const names = ["name1", "name2", "name3"];

// for(let i = 0; i < ages.length; i++) {
//     if(i == (ages.length - 1)) {
//         console.log(ages[i]);
//     }
// }

//  for each loop | for of (most commonly used FOR loop)

// for (let x of names) {
//   const i = names.indexOf(x)

//   if (i === 0) {
//     console.log(names[0])
//   }
// }

// const num1 = 5
// const num2 = 3

// for in loop
// obj = {
//   name: 'k',
//   age: 10,
//   address: 'some address',
//   phone: '122323'
// }

// for (let i in obj) {
//   console.log(obj[i])
// }

// Functions

// function multiply(num1, num2) {
//   console.log(num1 * num2)
// }

// function logFiveTimes() {
//   console.log(num1 * num2)
//   console.log(num1 * num2)
//   console.log(num1 * num2)
//   console.log(num1 * num2)
//   console.log(num1 * num2)
//   console.log('---------------')
// }

// Javascript is a loosely typed language

// class Car {
//   model
//   date
//   color
//   mileage

//   constructor(model, date, color, mileage) {
//     this.model = model
//     this.date = date
//     this.color = color
//     this.mileage = mileage
//   }

//   drive() {}
//   park() {}
//   turnOn() {}
//   turnOff() {}

//   getDateOfManufacture() {
//     return this.date
//   }

//   logCarDetails() {
//     console.log(`The date of manufacture: ${this.date}`)
//     console.log(`The model is: ${this.model}`)
//     console.log(`The color of the car is: ${this.color}`)
//     console.log(`Mileage is: ${this.mileage}`)
//   }
// }

// const marutiCar = new Car('Maruti Swift', 2010, 'Red', 20)
// const tataCar = new Car('Tata Nexon', 2020, 'Black', 17)
// const skodaCar = new Car()

// marutiCar.logCarDetails()
// console.log('----------')
// tataCar.logCarDetails()
// console.log('----------')

// const date = marutiCar.getDateOfManufacture()
// console.log(`date of manufacture for maruti is: ${date}`)

// const tata_date = tataCar.getDateOfManufacture()
// console.log(`date of manufacture for tata is: ${tata_date}`)

// function logSomeText(name, age) {
//   console.log(`My name is ${name}, my age is ${age}`);
// }

// const logSomeText2 = (name, age) => {
//     console.log(`My NAME is ${name}, my AGE is ${age}`);
// }

// logSomeText("Satish", 29);
// logSomeText2("arjun", 39);

// logSomeText('Arjun', 29)

// Arrow functions

// const logSomeText = (name, age) => {
//   console.log(`My name is ${name}, my age is ${age}`)
// }

// logSomeText('Arjun', 29)



// JSON -> JAVASCRIPT OBJECT NOTATION

// const obj = {
//   name: "Arjun",
//   age: 12,
//   grade: "A"
// };

// const jsonData = JSON.parse(obj);

// stringify -> 
// const jsonData = JSON.stringify(obj)
// parse -> 

// console.log(obj);
// console.log(jsonData);

// const parsedJson = JSON.parse(jsonData);
// console.log(parsedJson);



// ----------> DOM Manipulation ------------>

// Document Object Model

// const my_form_div = document.getElementById('my-form');
// console.log(`my_form_div`, my_form_div);

// const containerHTML = document.getElementsByClassName('container');
// console.log('containerHTML', containerHTML);

// const test = document.querySelector("#my-form")
// console.log(test);

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.innerText = "Item 4";

// ul.appendChild(li);

// // ul.remove()
// // ul.firstElementChild.remove()
// ul.firstElementChild.textContent = "ITEM ONE"
// ul.children[1].innerText = "<h1>I am changing you!</h1>"
// ul.children[2].innerHTML = "<h1>New content</h1>"
// console.log(ul.children);

// function preventDefaultAndLog(event) {
//   event.preventDefault();
//   console.log("Button clicked!");
// }

// // Events
// const button = document.getElementsByClassName("btn")[0];
// button.addEventListener("click", preventDefaultAndLog);


// const button = document.getElementsByClassName("btn")[0]

// // anonymous functions

// button.addEventListener("click", function(event) {
//   event.preventDefault();

//   const name = document.getElementById("name");
//   const email = document.getElementById("email")


//   let obj = {
//     my_name: name.value, 
//     my_email: email.value
//   }
  
//   console.log(obj);
// })