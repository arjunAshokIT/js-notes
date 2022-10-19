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
