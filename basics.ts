// 
/**
 * Primitives: number, string, boolean
 * null typeof 'object'
 * undefined typeof 'undefined'
 * NaN typeof 'number'
 * 
 * More complex types: arrays, objects
 * Function types, parameters
 */

// console.log(null, typeof null);
// console.log(undefined, typeof undefined);
// console.log(NaN, typeof NaN);
// console.log(1, typeof 1);
// console.log('2', typeof '2');
// console.log(true, typeof true);


// Primitives: number, string, boolean
let age: number = 25;
age = 12.4;
// age = 'xx'; - error

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;





/**
 *  More complex types: arrays, objects
 */
// Array.
let hobbies: string[];
hobbies = ['Muai Tai', 'Sports'];

let numbers = [1, 2, 3];
// numbers[0].split('');

// Object.
let person: {
  name: string;
  age: number;
};
person = {
  name: 'Max',
  age: 32
};

// Array of objects.
let persons: {
  name: string;
  age: number;
}[];
persons = [
  {
    name: 'Max',
    age: 32
  },
  {
    name: 'Anna',
    age: 21
  }
]




// Type inference - do not specify type explicitely.
let course = 'React - The Complete Guide';




// Multiple var types.
let myCourse: string | number = 'Go go';
myCourse = 2;




// "Type Aliases" or "Type Definition". "type" keyword is special for Typescript.
type Person = {
  name: string;
  age: number;
}

let person_1: Person;
person_1 = {
  name: 'Max',
  age: 32
};




// Functions & types - param types and function return types.
function sub(a: number, b: number): number {
  
  // Return value is typed. "string, number, boolean" or "void".
  return a + b;
}
sub(15, 23);

function printOutput(value: any) {
  console.log(value);
}






// Generics. <T> - generic type.
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demo = [1, 2, 3];
const numberDemo = insertAtBeginning(demo, -1);
console.log('numberDemo: ', numberDemo);
// Following code will not give error without <T>, as numberDemo is of type "any".
// numberDemo[0].split('');


const stringDemo = insertAtBeginning(['bt y', 'c', 'd'], 'a');
console.log('stringDemo: ', stringDemo);

// This will not give error, as split can be called on string.
let splited = stringDemo[1].split('');
console.log('splited: ', splited);