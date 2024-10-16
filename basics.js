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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// console.log(null, typeof null);
// console.log(undefined, typeof undefined);
// console.log(NaN, typeof NaN);
// console.log(1, typeof 1);
// console.log('2', typeof '2');
// console.log(true, typeof true);
// Primitives: number, string, boolean
var age = 25;
age = 12.4;
// age = 'xx'; - error
var userName;
userName = 'Max';
var isInstructor;
isInstructor = true;
/**
 *  More complex types: arrays, objects
 */
// Array.
var hobbies;
hobbies = ['Muai Tai', 'Sports'];
var numbers = [1, 2, 3];
// numbers[0].split('');
// Object.
var person;
person = {
    name: 'Max',
    age: 32
};
// Array of objects.
var persons;
persons = [
    {
        name: 'Max',
        age: 32
    },
    {
        name: 'Anna',
        age: 21
    }
];
// Type inference - do not specify type explicitely.
var course = 'React - The Complete Guide';
// Multiple var types.
var myCourse = 'Go go';
myCourse = 2;
var person_1;
person_1 = {
    name: 'Max',
    age: 32
};
// Functions & types - param types and function return types.
function sub(a, b) {
    // Return value is typed. "string, number, boolean" or "void".
    return a + b;
}
sub(15, 23);
function printOutput(value) {
    console.log(value);
}
// Generics. <T> - generic type.
function insertAtBeginning(array, value) {
    var newArray = __spreadArray([value], array, true);
    return newArray;
}
var demo = [1, 2, 3];
var numberDemo = insertAtBeginning(demo, -1);
console.log('numberDemo: ', numberDemo);
// Will not give error without <T>, as numberDemo is of type "any".
// numberDemo[0].split('');
var stringDemo = insertAtBeginning(['bt y', 'c', 'd'], 'a');
console.log('stringDemo: ', stringDemo);
// This will not give error, as split can be called on string.
var splited = stringDemo[1].split('');
console.log('splited: ', splited);
